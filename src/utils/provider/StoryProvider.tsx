import { useEffect, useState } from "react";
import { StoryContext } from "../context";
import useFetchData from "../../hooks/useFetchData";
import { preloadImages } from "../cacheImage";
import { Shimmer } from "react-shimmer";

const StoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, loading, error } = useFetchData("/photos?_limit=8");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!loading && data && !imageLoaded) {
      preloadImages(data)
        .then((res) => {
          setImageLoaded(true);
        })
        .catch((error) => {
          console.log("some images dont get loaded");
        });
    }
  }, [data, imageLoaded, loading]);

  if (!imageLoaded || loading) {
    return <Shimmer width={600} height={800} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StoryContext.Provider value={{ stories: data }}>
      {children}
    </StoryContext.Provider>
  );
};

export { StoryProvider };
