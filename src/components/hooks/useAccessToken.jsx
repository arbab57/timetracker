import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseAccessToken = () => {
  const [accessToken, setAccessToken] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    const accessTokenCheck = localStorage.getItem("accessToken");
    if (!accessTokenCheck) {
      navigateTo("/users/login", { replace: true });
      return;
    }
    const confirm = async () => {
      const res = await fetch("http://localhost:8000/users/check", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authentication: `Bearer ${accessTokenCheck}`,
        },
      });
      if (res.status !== 200) {
        navigateTo("/users/login", { replace: true });
        // const msg = await res.json();
        // console.log(msg);
        return;
      }
      setAccessToken(accessTokenCheck);
    };

    confirm();
  }, [navigateTo]);

  return [accessToken];
};

export default UseAccessToken;
