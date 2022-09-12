import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { shadows } from "@mui/system";
const ButtonOnTop = () => {
  const [showButtonOnTop, setShowButtonOnTop] = useState(false);
  useEffect(() => {
    const handleEvenScroll = () => {
      if (window.scrollY > 100) {
        setShowButtonOnTop(true);
      } else {
        setShowButtonOnTop(false);
      }
    };
    window.addEventListener("scroll", handleEvenScroll);
    return window.removeEventListener("scroll", handleEvenScroll);
  });
  return <>{showButtonOnTop && <button>ontop</button>}</>;
};

export default ButtonOnTop;
