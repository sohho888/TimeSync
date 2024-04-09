import { useState, useEffect } from 'react';
import styles from './Clock.module.scss';
// import { canvasJS } from 'canvasjs';

//Создание циферблата

// function displayCanvas() {
//   let canvas:any = document.getElementById('myCanvas');
//   let ctx = canvas.getContext('2d');

//   //Расчет координат центра и радиуса часов
//   var radiusClock = canvas.width / 2 - 10;
//   var xCenterClock = canvas.width / 2;
//   var yCenterClock = canvas.height / 2;

//   //Очистка экрана
//   ctx.fillStyle = '#fff';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   //Рисуем контур часов
//   ctx.strokeStyle = '#808080';
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   ctx.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);
//   ctx.moveTo(xCenterClock, yCenterClock);
//   ctx.stroke();
//   ctx.closePath();

//   //Рисуем риски часов
//   var radiusNum = radiusClock - 10; //Радиус расположения рисочек
//   var radiusPoint;
//   for (let tm = 0; tm < 60; tm++) {
//     ctx.beginPath();
//     if (tm % 5 == 0) {
//       radiusPoint = 5;
//     } else {
//       radiusPoint = 2;
//     } //для выделения часовых рисочек

//     let xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
//     let yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
//     ctx.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);

//     ctx.stroke();
//     ctx.closePath();
//   }

//   //Оцифровка циферблата часов
//   for (let th = 1; th <= 12; th++) {
//     ctx.beginPath();
//     ctx.font = '25px "Helvetica"';
//     ctx.strokeStyle = '#e9750f';
//     let xText =
//       xCenterClock + (radiusNum - 30) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
//     let yText =
//       yCenterClock - (radiusNum - 30) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
//     if (th <= 9) {
//       ctx.strokeText(th, xText - 5, yText + 10);
//     } else {
//       ctx.strokeText(th, xText - 15, yText + 10);
//     }
//     ctx.stroke();
//     ctx.closePath();

//     console.log(xText);
//   }
//   //Рисуем стрелки
//   var lengthSeconds = radiusNum - 10;
//   var lengthMinutes = radiusNum - 25;
//   var lengthHour = lengthMinutes / 1.5;
//   var d = new Date(); //Получаем экземпляр даты
//   var t_sec = 6 * d.getSeconds(); //Определяем угол для секунд
//   var t_min = 6 * (d.getMinutes() + (1 / 60) * d.getSeconds()); //Определяем угол для минут
//   var t_hour = 30 * (d.getHours() + (1 / 60) * d.getMinutes()); //Определяем угол для часов

//   //Рисуем секунды
//   ctx.beginPath();
//   ctx.strokeStyle = '#FF0000';
//   ctx.moveTo(xCenterClock, yCenterClock);
//   ctx.lineTo(
//     xCenterClock + lengthSeconds * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)),
//     yCenterClock - lengthSeconds * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180)),
//   );
//   ctx.stroke();
//   ctx.closePath();

//   //Рисуем минуты
//   ctx.beginPath();
//   ctx.strokeStyle = '#000000';
//   ctx.lineWidth = 3;
//   ctx.moveTo(xCenterClock, yCenterClock);
//   ctx.lineTo(
//     xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)),
//     yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180)),
//   );
//   ctx.stroke();
//   ctx.closePath();

//   //Рисуем часы
//   ctx.beginPath();
//   ctx.lineWidth = 5;
//   ctx.moveTo(xCenterClock, yCenterClock);
//   ctx.lineTo(
//     xCenterClock + lengthHour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)),
//     yCenterClock - lengthHour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180)),
//   );
//   ctx.stroke();
//   ctx.closePath();

//   //Рисуем центр часов
//   ctx.beginPath();
//   ctx.strokeStyle = '#808080';
//   ctx.fillStyle = '#ffffff';
//   ctx.lineWidth = 4;
//   ctx.arc(xCenterClock, yCenterClock, 3, 0, 2 * Math.PI, true);
//   ctx.stroke();
//   ctx.fill();
//   ctx.closePath();

//   return;
// }

interface ClockProps {
  time: Date;
}

enum ClockHand {
  hh,
  mm,
  ss,
}

const getDegreeByDate = (time: Date, hande: ClockHand): number => {
  if (hande === ClockHand.hh) {
    return 30 * (time.getHours() + (1 / 60) * time.getMinutes());
  }
  if (hande === ClockHand.mm) {
    return 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
  }
  if (hande === ClockHand.ss) {
    return time.getSeconds() * 6;
  }
  return 0;
};

export default function Clock(props: ClockProps) {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    setTimeout(() => {
      document.title = `You clicked ${time} times`;

      setTime((t) => {
        // displayCanvas();
        let t2 = t.setSeconds(t.getSeconds() + 1);
        return new Date(t2);
      });
    }, 1000);
  }, [time]);

  return (
    <>
      <div className={styles.clockwrapper}>
        <div className={styles.clock}>
          <ClockFace />
          <div
            style={{ transform: `rotate(${getDegreeByDate(time, ClockHand.hh)}deg)` }}
            className={styles.hour}
          ></div>
          <div
            style={{ transform: `rotate(${getDegreeByDate(time, ClockHand.mm)}deg)` }}
            className={styles.min}
          ></div>
          <div
            style={{ transform: `rotate(${getDegreeByDate(time, ClockHand.ss)}deg)` }}
            className={styles.sec}
          ></div>
        </div>
        {/* <div className={styles.time}>{props.time}</div> */}
      </div>
    </>
  );
}

function ClockFace() {
  return (
    <div className={styles.face}>
      {Array.from({ length: 60 }).map((_, index) => {
        return (
          <div key={index} className={styles.mark} style={{ transform: `rotate(${index * 6}deg)` }}>
            <div className={`${styles.body} ${styles.minuteBody}`}></div>
          </div>
        );
      })}
      {Array.from({ length: 12 }).map((_, index) => {
        return (
          <div className={styles.mark} style={{ transform: `rotate(${index * 30}deg)` }}>
            <div className={`${styles.body} ${styles.hourBody}`}></div>
          </div>
        );
      })}
    </div>
  );
}
