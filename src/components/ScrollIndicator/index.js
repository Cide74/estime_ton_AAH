import React, { useEffect, useState } from "react";

import "./style.scss";

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const windScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (windScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="Scrollbar_warpper">
      <div
        className="Scrollbar_warpper_style"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
