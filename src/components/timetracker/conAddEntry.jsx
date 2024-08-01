import AddEntry from "./addEntry";

const addEntry = ({ isSideOpen }) => {
  // let x = isSideOpen ? "w-48 h-1" : "w-16 h-1";
  let x2 =
    "w-full sm:px-5 px-3 sticky top-16 lg:h-24 h-32 bg-main flex flex-col justify-end ";

  return (
    <div className={x2}>
      <AddEntry />
    </div>
  );
};

export default addEntry;
