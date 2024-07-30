import Navigation from "./navigation";
import ContainerEntries from "./containerEntries";

const mainContent = ({ isSideOpen, setIsSideOpen, isMobile, setIsMobile }) => {
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
      <ContainerEntries />
    </div>
  );
};

export default mainContent;
