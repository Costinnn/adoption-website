"use client";

import { useEffect, useRef } from "react";

const BottomScroll = () => {
  const bottonRef = useRef(null);

  useEffect(() => {
    bottonRef.current.scrollIntoView();
  }, []);
  return <div ref={bottonRef}></div>;
};

export default BottomScroll;
