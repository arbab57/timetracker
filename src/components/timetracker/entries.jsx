import DayEntries from "./dayEntries";
import { convertMsToTime } from "../hooks/time";

const entries = ({ isSideOpen, entries }) => {
  let duplicatEntries = [...entries];
  let newArr = [];
  let currentDate;
  let done = false;
  let objNum = -1;

  while (!done) {
    objNum++;
    done = true;
    currentDate = duplicatEntries[0].showDate;
    const obj = { date: currentDate, entries: [] };
    obj.entries.push(duplicatEntries.shift());
    newArr.push(obj);
    if (duplicatEntries.length === 0) {
      break;
    }
    if (duplicatEntries[0].showDate !== currentDate) {
      done = false;
      continue;
    }

    for (let j = 0; j < duplicatEntries.length; j++) {
      if (duplicatEntries[0].showDate === currentDate) {
        newArr[objNum].entries.push(duplicatEntries.shift());
        done = false;
        continue;
      }
      break;
    }
  }

  let x2 = isSideOpen
    ? "w-full px-9 flex flex-col gap-8"
    : "w-full sm:px-5 px-3 flex flex-col gap-8";
  return (
    <div className={x2}>
      {newArr.map((item, index) => {
        return <DayEntries allEntriesInDay={item} key={index} />;
      })}
    </div>
  );
};

export default entries;
