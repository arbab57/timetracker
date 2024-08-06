import Logo from "./logo";
import Menus from "./menus";
import UseFetch from "../hooks/useFetch";
const header = () => {
  const [data, error, loading] = UseFetch("http://localhost:8000/users/data");

  return (
    <header className="flex justify-between items-center border-b border-gray-300 sm:px-5 px-2 py-2 h-16 fixed top-0 z-50 bg-white shadow-sm w-full">
      <Logo email={data} />
      <Menus />
    </header>
  );
};
export default header;
