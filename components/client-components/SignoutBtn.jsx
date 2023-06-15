"use client";

import { signOut } from "next-auth/react";

import React from "react";

const SignoutBtn = () => {
  return (
    <button className="button2" onClick={signOut}>
      Iesi din cont
    </button>
  );
};

export default SignoutBtn;
