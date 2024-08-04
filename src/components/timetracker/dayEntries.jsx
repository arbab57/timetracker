import Entry from "./entry";
import { convertMsToTime } from "../hooks/time";

const dayEntries = ({
  allEntriesInDay,
  projects,
  tagSuggest,
  setTagSuggest,
}) => {
  let totalTime = 0;
  for (let i = 0; i < allEntriesInDay.entries.length; i++) {
    totalTime +=
      allEntriesInDay.entries[i].endTime - allEntriesInDay.entries[i].startTime;
  }

  return (
    <div className="border-b-4 border-gray-300 sm:border-x">
      <div className="flex justify-between items-center bg-gray-300 py-2 sm:px-7 px-3">
        <div className="text-gray-500">{allEntriesInDay.date}</div>
        <div className="text-gray-500">{`Total: ${convertMsToTime(
          totalTime
        )}`}</div>
      </div>
      <div className="flex flex-col sm:gap-0 gap-3">
        {allEntriesInDay.entries.map((item, index) => {
          return (
            <Entry
              entry={item}
              projects={projects}
              tagSuggest={tagSuggest}
              setTagSuggest={setTagSuggest}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default dayEntries;
