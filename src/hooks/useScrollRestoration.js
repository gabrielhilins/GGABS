import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    
    const scrollPosition = sessionStorage.getItem(`scrollPosition-${location.pathname}`);
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    
    const handleScroll = () => {
      sessionStorage.setItem(`scrollPosition-${location.pathname}`, window.scrollY.toString());
    };

    
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scrollPosition-${location.pathname}`, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location.pathname]); 
};

export default useScrollRestoration;