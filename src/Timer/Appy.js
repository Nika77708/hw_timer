import css from "./Appy.module.css";
import { FcCalendar } from "react-icons/fc";
import React, { useState, useRef, useEffect } from "react";

export const Appy = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");


  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("September 30, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distanse = countdownDate - now;

      const days = Math.floor(distanse / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distanse % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distanse % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distanse % (1000 * 60)) / 1000);

      if (distanse < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)       
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
        clearInterval(interval.current)
    }
  })

  return (
    <section className={css.timer_container}>
      <section className={css.timer}>
        <div className={css.wrapper}>
          <FcCalendar className={css.mdi} />
          <div className={css.wrap}>
            <h2 className={css.h2}>Countdown Timer</h2>
            <p>
              Countdown to a really spesial date. One you could or would never
              imagine
            </p>
          </div>
        </div>

        <div className={css.time}>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};
