// CLIENTSIDE SESSION PROVIDER
"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;

// to use
// import { useSession } from "next-auth/react";
// const session = useSession();
