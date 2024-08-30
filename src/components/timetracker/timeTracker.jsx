import { useState, useEffect } from "react";
import ConAddEntry from "./conAddEntry";
import Entries from "./entries";
import UseAccessToken from "../hooks/useAccessToken";
import UseFetch from "../hooks/useFetch";

const Timetracker = ({ isSideOpen }) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [projects, setProjects] = useState([]);
  const [tagSuggest, setTagSuggest] = useState([]);
  const [inProgressEntry, setInProgressEntry] = useState(null);
  const [reRun, setReRun] = useState(false);
  const timeTrackerAPI = import.meta.env.VITE_timeTracker_api;


  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")) || [])

  }, [])

  useEffect(() => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].project === "" ||
          data[i].project === undefined ||
          projects.includes(data[i].project)
        ) {
          continue;
        }
        projects.push(data[i].project);
      }

      const newTags = data.flatMap((entry) => {
        return entry.tags;
      });

      for (let i = 0; i < newTags.length; i++) {
        if (tagSuggest.includes(newTags[i])) {
          continue;
        }
        tagSuggest.push(newTags[i]);
      }
    }
  }, [data]);


  return (
    <div className="w-full flex flex-col gap-40">
      <ConAddEntry
        projects={projects}
        tagSuggest={tagSuggest}
        setTagSuggest={setTagSuggest}
        setEntries={setData}
        entries={data ? data : []}
        inProgressEntry={inProgressEntry}
        setInProgressEntry={setInProgressEntry}
        setReRun={setReRun}
        reRun={reRun}
      />
      <Entries
        isSideOpen={isSideOpen}
        entries={data ? data : []}
        projects={projects}
        tagSuggest={tagSuggest}
        setTagSuggest={setTagSuggest}
        setReRun={setReRun}
        setData={setData}

        
      />
      <div className=""></div>
    </div>
  );
};

export default Timetracker;
