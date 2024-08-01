import { BiPlusCircle } from "react-icons/bi";
const addProjectBtn = () => {
  return (
    <button className="flex gap-1 items-center text-lg text-blue-500 hover:bg-blue-500 hover:text-white transition p-2 sm:px-4 px-2">
      <BiPlusCircle className="text-lg" />

      <span>Project</span>
    </button>
  );
};

export default addProjectBtn;
