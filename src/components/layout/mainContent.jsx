import Navigation from "./navigation";

const mainContent = ({
  isSideOpen,
  setIsSideOpen,
  isMobile,
  setIsMobile,
  Outlet,
}) => {
  return (
    <div className="flex">
      <span
        id="checker"
        className="fixed top-0 left-0 opacity-0 md:text-xs text-sm"
      >
        f
      </span>
      <Navigation
        isSideOpen={isSideOpen}
        setIsSideOpen={setIsSideOpen}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
      <Outlet />
    </div>
  );
};

export default mainContent;
