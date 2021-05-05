import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Icon, useToggle } from '@edx/paragon';
import { Visibility, VisibilityOff } from '@edx/paragon/icons';

const TICK = 1;
const LOW_TIME = 60;

const getTimeComponents = (timeLeft) => {
    return {
      hours: Math.floor((timeLeft / (60 * 60)) % 24),
      minutes: Math.floor((timeLeft / 60) % 60),
      seconds: Math.floor(timeLeft % 60),
    };
};

const CountDownTimer = ({timeLeft, onLimitReached, onLowTime}) => {
  const [timeState, setTimeState] = useState(getTimeComponents(timeLeft));
  const [isShowTimer, showTimer, hideTimer] = useToggle(true);
  const [isLowTime, setLowTime] = useToggle(false);
  const [limitReached, setLimitReached] = useToggle(false);

  const getTimeString = () => {
    return Object.values(timeState).map(item => item < 10 ? '0' + item : item).join(':');
  };

  useEffect(() => {
    let secondsLeft = timeLeft;
    const interval = setInterval(() => {
      secondsLeft -= TICK;
      if (secondsLeft <= LOW_TIME) {
        setLowTime();
      }
      if (!limitReached && secondsLeft === 0) {
        setLimitReached();
        clearInterval(interval);
      }
      setTimeState(getTimeComponents(secondsLeft));
    }, 1000);
    return () => { clearInterval(interval); };
  }, []);

  useEffect(() => {
    if (isLowTime) onLowTime();
  }, [isLowTime]);

  useEffect(() => {
    if (limitReached) onLimitReached();
  }, [limitReached]);

  return <div className='d-flex justify-content-between'>
    {isShowTimer && getTimeString()}
    <span className='pl-2 d-flex flex-column justify-content-center'>
      {isShowTimer
        ? <Icon src={Visibility} onClick={hideTimer}/>
        : <Icon src={VisibilityOff} onClick={showTimer}/>
      }
    </span>
  </div>;
};

CountDownTimer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  onLimitReached: PropTypes.func.isRequired,
  onLowTime: PropTypes.func,
};

CountDownTimer.defaultProps = {
  onLowTime: () => {},
};

export { CountDownTimer };
