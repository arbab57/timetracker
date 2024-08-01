import React from "react";
import InputForm from "../components/registration/inputForm";

const signup = () => {
  return (
    <InputForm
      form={"Sign Up"}
      subHeading={
        "Create a free account to start tracking time and supercharge your productivity."
      }
    />
  );
};

export default signup;
