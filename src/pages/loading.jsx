import Spinner from "../components/spinner";
const loading = () => {
  return (
    <div className="w-screen h-screen bg-white fixed top-0 flex items-center justify-center z-50 gap-3">
      <div className="rounded-full p-6 px-9 flex gap-2 input-entry">
        {/* <div className="bg-blue-500 w-2 h-12 loading-bar"></div> */}
        <Spinner height={"h-16"} width={"w-16"} />

        <div>
          <p className="text-xl flex items-center justify-center">
            LOADING CLOCKIT
          </p>
          <p className="text-sm text-gray-400 font-medium">Just a minute</p>
        </div>
      </div>
    </div>
  );
};

export default loading;
