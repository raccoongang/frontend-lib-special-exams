import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, useToggle } from '@edx/paragon';
import { Visibility, VisibilityOff } from '@edx/paragon/icons';

const TICK = 1;

const getTimeComponents = (timeLeft) => ({
  hours: Math.floor((timeLeft / (60 * 60)) % 24),
  minutes: Math.floor((timeLeft / 60) % 60),
  seconds: Math.floor(timeLeft % 60),
});

const CountDownTimer = (props) => {
  const {
    timeLeft, lowTime, criticalLowTime,
    onLimitReached, onLowTime, onCriticalLowTime,
  } = props;
  const [timeState, setTimeState] = useState(getTimeComponents(timeLeft));
  const [isShowTimer, showTimer, hideTimer] = useToggle(true);
  const [isLowTime, setLowTime] = useToggle(false);
  const [isCriticalTime, setCriticalTime] = useToggle(false);
  const [limitReached, setLimitReached] = useToggle(false);

  const getTimeString = () => Object.values(timeState).map(item => (item < 10 ? `0${item}` : item)).join(':');

  useEffect(() => {
    let secondsLeft = Math.floor(timeLeft);
    const interval = setInterval(() => {
      secondsLeft -= TICK;
      if (secondsLeft <= criticalLowTime) {
        setCriticalTime();
      } else if (secondsLeft <= lowTime) {
        setLowTime();
      }
      if (!limitReached && secondsLeft === 0) {
        setLimitReached();
        clearInterval(interval);
        return;
      }
      setTimeState(getTimeComponents(secondsLeft));
    }, 1000);
    return () => { clearInterval(interval); };
  }, []);

  useEffect(() => {
    if (isCriticalTime) { onCriticalLowTime(); }
  }, [isCriticalTime]);

  useEffect(() => {
    if (isLowTime) { onLowTime(); }
  }, [isLowTime]);

  useEffect(() => {
    if (limitReached) { onLimitReached(); }
  }, [limitReached]);

  return (
    <div className="d-flex justify-content-between" style={{ minWidth: '110px' }}>
      {isShowTimer && getTimeString()}
      <span className="pl-2 d-flex flex-column justify-content-center">
        {isShowTimer
          ? <Icon src={Visibility} onClick={hideTimer} />
          : <Icon src={VisibilityOff} onClick={showTimer} />}
      </span>
    </div>
  );
};

CountDownTimer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  onLimitReached: PropTypes.func.isRequired,
  lowTime: PropTypes.number.isRequired,
  criticalLowTime: PropTypes.number.isRequired,
  onLowTime: PropTypes.func,
  onCriticalLowTime: PropTypes.func,
};

CountDownTimer.defaultProps = {
  onLowTime: () => {},
  onCriticalLowTime: () => {},
};

export default CountDownTimer;
