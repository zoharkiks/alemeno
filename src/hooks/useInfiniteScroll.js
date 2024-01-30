// useInfiniteScroll.js
import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = (startCount, increment) => {
  const [itemCount, setItemCount] = useState(startCount);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setItemCount((prevCount) => prevCount + increment);
        }
      },
      { threshold: 0.01 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [increment]);

  return [itemCount, loaderRef];
};

export default useInfiniteScroll;