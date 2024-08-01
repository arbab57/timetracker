const inputForm = (props) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen ">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Get Started with ClockIt</h2>
        <p className="text-gray-400 text-lg mt-4">{props.subHeading}</p>
      </div>

      <div className="bg-white input-entry p-7 outline-none flex flex-col log-sign-con rounded-sm">
        <h2 className="font-medium text-lg text-center mb-6">{props.form}</h2>
        <input
          placeholder="Enter Email"
          className="w-full border border-gray-300 px-2 py-2 mb-2"
          type="email"
        />
        <input
          placeholder="Enter Password"
          className="w-full border border-gray-300 px-2 py-2 mb-5"
          type="password"
        />
        <div className="flex gap-2 mb-5">
          <input type="checkbox" />
          <p>
            I agree to <span className="text-blue-500">Terms of Use</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button className="w-full text-white bg-blue-500 py-2 text-center hover:bg-blue-600 transition">
            {props.form.toUpperCase()}
          </button>

          <div className="flex items-center justify-center gap-4 w-full">
            <div className=" w-full border-t border-gray-300"></div>
            <span>OR</span>
            <div className=" w-full border-t border-gray-300"></div>
          </div>
          <button className="w-full border border-blue-500 text-blue-500 bg-white py-2 text-center hover:bg-gray-100 transition">
            Continure with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default inputForm;
