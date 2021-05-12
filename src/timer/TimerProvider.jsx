import React, { useEffect, useState } from "react";
import { useToggle } from "@edx/paragon";
import { Emitter } from "../data";
import {
  TIMER_IS_CRITICALLY_LOW,
  TIMER_IS_LOW,
  TIMER_LIMIT_REACHED
} from "./events";
import { ExamStatus } from "../constants";

/* give an extra 5 seconds where the timer holds at 00:00 before page refreshes */
const GRACE_PERIOD_SECS = 5;
const POLL_INTERVAL = 60;

export const TimerContext = React.createContext({});

const getFormattedRemainingTime = (timeLeft) => ({
  hours: Math.floor(timeLeft / (60 * 60)),
  minutes: Math.floor((timeLeft / 60) % 60),
  seconds: Math.floor(timeLeft % 60),
});

const TimerServiceProvider = ({ children, attempt, pollHandler }) => {
  const [timeState, setTimeState] = useState({});
  const [timer, setTimer] = useState();
  const [limitReached, setLimitReached] = useToggle(false);
  const {
    time_remaining_seconds,
    critically_low_threshold_sec: criticalLowTime,
    low_threshold_sec: lowTime,
  } = attempt;
  const startValue = Math.floor(time_remaining_seconds);
  const LIMIT = GRACE_PERIOD_SECS ? 0 - GRACE_PERIOD_SECS : 0;

  const getTimeString = () => Object.values(timeState).map(
    item => {
      // Do not show timer negative value.
      // User will see 00:00:00 during grace period if any.
      const value = item < 0 ? 0 : item;
      return (value < 10 ? `0${value}` : value);
    }
  ).join(':');

  const pollExam = () => {
    if (attempt.attempt_status === ExamStatus.READY_TO_SUBMIT) {
      return;
    }
    const url = attempt.exam_started_poll_url;
    const queryString = '?sourceid=in_exam&proctored=' + attempt.taking_as_proctored;
    pollHandler(url + queryString);
  };

  const processTimeLeft = (secondsLeft) => {
    switch (true) {
      case secondsLeft <= criticalLowTime:
        Emitter.emit(TIMER_IS_CRITICALLY_LOW);
        break;
      case secondsLeft <= lowTime:
        Emitter.emit(TIMER_IS_LOW);
        break;
      case !limitReached && secondsLeft < LIMIT:
        clearInterval(timer);
        Emitter.emit(TIMER_LIMIT_REACHED);
        setLimitReached();
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    let secondsLeft = startValue;
    let timerTick = 0;
    const interval = setInterval(() => {
      setTimeState(getFormattedRemainingTime(secondsLeft));
      secondsLeft -= 1;
      timerTick += 1;
      processTimeLeft(secondsLeft);
      if (timerTick % POLL_INTERVAL === 0) {
        pollExam();
      }
    }, 1000);
    setTimer(interval);

    return () => { clearInterval(timer); };
  }, []);

  return <TimerContext.Provider value={{
    timeState,
    getTimeString,
  }}>
    {children}
  </TimerContext.Provider>;
};

export default TimerServiceProvider;

//
// const timeoutPromise = (timeoutMilliseconds) => {
//     const message = 'worker failed to respond after ' + timeoutMilliseconds + 'ms';
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(Error(message));
//         }, timeoutMilliseconds);
//     });
//   };
//
//   const pollPromise = () => {
//     return new Promise((resolve) => {
//       pollExamAttempt(activeAttempt.exam_started_poll_url).then(() => {
//         resolve();
//       });
//     });
//   };
//
//   const ping = (timeoutInSeconds) => {
//     return Promise.race([
//         pollPromise(),
//         timeoutPromise(timeoutInSeconds * 1000)
//     ]);
//   };
//
//   useEffect(() => {
//     ping(10);
//   }, []);
