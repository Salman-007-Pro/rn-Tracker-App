//main
import React, { useContext, useEffect } from "react";

//contextApi
import { Context } from "../globalContextApi/globalContext";

const ResolveAuthScreen = () => {
  const { checkAuthentication } = useContext(Context);
  useEffect(() => {
    checkAuthentication();
  }, []);
  return null;
};

export default ResolveAuthScreen;
