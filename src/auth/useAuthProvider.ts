import { useState } from "react";

const useAuthProvider = () => {
  const [checkAuth, setcheckAuth] = useState<null | string>(null);

  const signIn = () => {
    setcheckAuth("auth");
  };

  return {
    checkAuth,
    signIn,
  };
};

export default useAuthProvider;
