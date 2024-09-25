import { useEffect, useRef, useState } from "react";

// Custom hook to calculate and return the navbar height
export const useNavbarHeight = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Function to update navbar height
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.clientHeight);
      }
    };

    // Set initial height
    updateNavbarHeight();

    // Update height on window resize
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  // Return the ref and height to be used in components
  return { navbarRef, navbarHeight };
};
