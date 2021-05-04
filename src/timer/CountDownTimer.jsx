import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Icon, useToggle } from '@edx/paragon';
import { Visibility, VisibilityOff } from '@edx/paragon/icons';

const TICK = 1;
const LIMIT = [0, 0, 0];
const LOW_TIME = [0, 0, 59];

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

  const getTimeString = () => {
    return Object.values(timeState).map(item => item < 10 ? '0' + item : item).join(':');
  };

  const isTimeLow = () => {
      const actualTimeArr = Object.values(timeState);
      return LOW_TIME.filter((item, idx) => {
          const actualItemValue = actualTimeArr[idx];
          return actualItemValue <= item;
      }).length === LOW_TIME.length;
  };

  useEffect(() => {
    let secondsLeft = timeLeft;

    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      secondsLeft -= TICK;
      setTimeState(getTimeComponents(secondsLeft));
    }, 1000);
    return () => { clearInterval(interval); };
  }, []);

  useEffect(() => {
    if (Object.values(timeState) === LIMIT) onLimitReached();
    const lowTime = isTimeLow();
    if (isLowTime !== lowTime) setLowTime();
  }, [...Object.values(timeState)]);

  useEffect(() => {
    if (isLowTime) onLowTime();
  }, [isLowTime]);

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
  onLimitReached: PropTypes.func,
  onLowTime: PropTypes.func,
};

CountDownTimer.defaultProps = {
  onLimitReached: () => {},
  onLowTime: () => {},
};

export { CountDownTimer };
