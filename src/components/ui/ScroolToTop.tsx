import React, { useEffect } from "react";

const ScroolToTop = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);
  return <></>;
};

export default ScroolToTop;
