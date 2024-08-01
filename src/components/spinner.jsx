const Spinner = ({ height, width }) => {
  return (
    <div
      className={`border-8 border-t-8 border-gray-200 border-t-blue-500 rounded-full animate-spin ${height} ${width}`}
    ></div>
  );
};

export default Spinner;
