import AddEntry from "./addEntry";

const addEntry = ({
  projects,
  tagSuggest,
  setTagSuggest,
  setEntries,
  inProgressEntry,
  setInProgressEntry,
  loading,
}) => {
  let x2 =
    "w-full sm:px-5 px-3 sticky top-16 lg:h-24 h-32 bg-main flex flex-col justify-end z-30";

  return (
    <div className={x2}>
      <AddEntry
        projects={projects}
        tagSuggest={tagSuggest}
        setTagSuggest={setTagSuggest}
        setEntries={setEntries}
        inProgressEntry={inProgressEntry}
        setInProgressEntry={setInProgressEntry}
        loading={loading}
      />
    </div>
  );
};

export default addEntry;
