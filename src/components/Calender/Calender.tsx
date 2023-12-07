import { css } from "@emotion/react";
import React, { useState } from "react";

const INIT_MONTH = 12;
const INIT_YEAR = 2023;

function Calender() {
  const [currentYear, setCurrentYear] = useState(INIT_YEAR);
  const [currentMonth, setCurrentMonth] = useState(INIT_MONTH);

  const { prevBlankCount, nextBlankCount, totalDate } = getCalenderInfo(
    currentMonth,
    INIT_YEAR,
  );

  const onPrev = () => {
    if (currentMonth === 1) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(() => 12);
      return;
    }

    setCurrentMonth((prev) => prev - 1);
  };

  const onNext = () => {
    if (currentMonth === 12) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(() => 1);
      return;
    }
    setCurrentMonth((prev) => prev + 1);
  };

  const prefix = `${currentYear}-${currentMonth}-`;

  return (
    <div>
      <h1>
        현재는 {currentYear}년 {currentMonth}월입니다.{" "}
      </h1>
      <br />
      <div>
        <button onClick={onPrev}>이전 달</button>
        <button onClick={onNext}>다음 달</button>
      </div>
      <br />
      <div css={calenderWrapper}>
        {[...Array(prevBlankCount)].map((_, col) => (
          <div css={itemWrapperCss} key={`${prefix}prev-blank-${col}`} />
        ))}
        {[...Array(totalDate)].map((_, col) => {
          const currentIndex = col + 1;
          return <CalenderItem id={currentIndex} key={prefix + currentIndex} />;
        })}
        {[...Array(nextBlankCount)].map((_, col) => (
          <div css={itemWrapperCss} key={`${prefix}next-blank-${col}`} />
        ))}
      </div>
    </div>
  );
}

const calenderWrapper = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
`;

function CalenderItem({ id }: { id: number }) {
  return <div css={itemWrapperCss}>{id}</div>;
}

export default Calender;

const itemWrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 14px;
  background: #e5e8eb;
`;

const getCalenderInfo = (_currentMonth: number, _currentYear: number) => {
  // const currentDate = new Date();

  // currentDate.setMonth(_currentMonth + 1);
  // currentDate.setFullYear(_currentYear + 1);

  const currentMonth = _currentMonth - 1;
  const currentYear = _currentYear;

  // 이번달 1일
  const firstDate = new Date(currentYear, currentMonth, 1);
  console.log("firstDate: ", firstDate);

  // 이번달 마지막날
  const lastDate = new Date(currentYear, currentMonth + 1, 0);
  console.log("lastDate: ", lastDate);

  // getDay() : 일요일 0 ~ 토요일 6
  const prevBlankCount = firstDate.getDay();
  const nextBlankCount = 6 - lastDate.getDay();

  const rows = Math.ceil(lastDate.getDate() / 6);

  const totalDate = lastDate.getDate();
  console.log(
    " prevBlankCount, nextBlankCount, rows : ",
    prevBlankCount,
    nextBlankCount,
    rows,
  );
  return { prevBlankCount, nextBlankCount, totalDate };
};
