import { useEffect } from "react";

export const useBodyOverflowHidden = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
};
