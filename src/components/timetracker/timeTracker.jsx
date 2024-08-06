import { useState, useEffect } from "react";
import ConAddEntry from "./conAddEntry";
import Entries from "./entries";
import { useNavigate } from "react-router-dom";
import UseAccessToken from "../hooks/useAccessToken";
import UseFetch from "../hooks/useFetch";

const Timetracker = ({ isSideOpen }) => {
  const [entries, setEntries] = useState([]);
  const navigateTo = useNavigate();
  const [accessToken] = UseAccessToken();
  const [projects, setProjects] = useState([]);
  const [tagSuggest, setTagSuggest] = useState([]);
  const [inProgressEntry, setInProgressEntry] = useState(null);
  const timeTrackerAPI = import.meta.env.VITE_timeTracker_api;

  const [data, error, loading] = UseFetch(timeTrackerAPI, []);

  useEffect(() => {
    if (!loading) {
      setEntries(data.data);
      for (let i = 0; i < data.data.length; i++) {
        if (
          data.data[i].project === undefined ||
          projects.includes(data.data[i].project)
        ) {
          continue;
        }
        projects.push(data.data[i].project);
      }
      const newTags = data.data.flatMap((entry) => {
        return entry.tags;
      });
      for (let i = 0; i < newTags.length; i++) {
        if (tagSuggest.includes(newTags[i])) {
          continue;
        }
        tagSuggest.push(newTags[i]);
      }
    }
    // console.log(entries);
    // console.log(projects);
    // console.log(tagSuggest);
    // console.log(inProgressEntry);
  }, [data]);

  return (
    <div className="w-full flex flex-col gap-40">
      <ConAddEntry
        projects={projects}
        tagSuggest={tagSuggest}
        // setTagSuggest={setTagSuggest
        setEntries={setEntries}
        entries={entries}
        inProgressEntry={inProgressEntry}
        setInProgressEntry={setInProgressEntry}
        loading={loading}
      />
      <Entries
        isSideOpen={isSideOpen}
        entries={entries}
        projects={projects}
        tagSuggest={tagSuggest}
        // setTagSuggest={setTagSuggest}
      />
      <div className=""></div>
    </div>
  );
};

export default Timetracker;
