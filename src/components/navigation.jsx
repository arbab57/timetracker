import Sidebar from "./sidebar";
import ShortSideBar from "./shortSideBar";
import SidebarMobile from "./sidebarMobile";
import ShortsideBarMobile from "./shortsideBarMobile";

const navigation = ({ isSideOpen, setIsSideOpen, isMobile }) => {
  let nav;
  let sidebarToUse;
  let shortsideBarToUse;
  shortsideBarToUse = isMobile ? (
    <ShortsideBarMobile setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} />
  ) : (
    <ShortSideBar setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} />
  );
  sidebarToUse = isMobile ? (
    <SidebarMobile setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} />
  ) : (
    <Sidebar setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} />
  );

  nav = isSideOpen ? sidebarToUse : shortsideBarToUse;
  return nav;
};

export default navigation;
