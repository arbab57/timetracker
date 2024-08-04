import { useState, useEffect } from "react";
import ConAddEntry from "./conAddEntry";
import Entries from "./entries";
import { useNavigate } from "react-router-dom";
import UseAccessToken from "../hooks/useAccessToken";

const Timetracker = ({ isSideOpen }) => {
  const [entries, setEntries] = useState([]);
  const navigateTo = useNavigate();
  const [accessToken] = UseAccessToken();
  const [inProgressEntry, setInProgressEntry] = useState(null);
  const timeTrackerAPI = import.meta.env.VITE_timeTracker_api;

  useEffect(() => {
    const AccessToken = localStorage.getItem("accessToken");
    const fetchData = async () => {
      const response = await fetch(timeTrackerAPI, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authentication: `Bearer ${AccessToken}`,
        },
      });
      const data = await response.json();
      console.log(data.data);
      setEntries(data.data);
    };

    fetchData();
  }, []);

  let projects;
  let tagSuggest;
  if (entries.length > 0) {
    projects = [...new Set(entries.map((entry) => entry.project))];

    tagSuggest = [...new Set(entries.flatMap((entries) => entries.tags))];
  }

  console.log("tags", tagSuggest);
  console.log("maps", projects);

  return (
    <div className="w-full flex flex-col gap-40">
      <ConAddEntry
        projects={projects}
        tagSuggest={tagSuggest}
        setTagSuggest={setTagSuggest}
        setEntries={setEntries}
        entries={entries}
        inProgressEntry={inProgressEntry}
        setInProgressEntry={setInProgressEntry}
      />
      <Entries
        isSideOpen={isSideOpen}
        entries={entries}
        projects={projects}
        tagSuggest={tagSuggest}
        setTagSuggest={setTagSuggest}
      />
      <div className=""></div>
    </div>
  );
};

export default Timetracker;
