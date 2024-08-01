import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import TimeTracker from "./pages/timetracker";
import Login from "./pages/login";
import Signup from "./pages/signup";
import LogSign from "./layouts/logSign";
import NotFound from "./pages/notFound";
import Loading from "./pages/loading";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<TimeTracker />} />
        <Route path="/load" element={<Loading />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/users" element={<LogSign />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
