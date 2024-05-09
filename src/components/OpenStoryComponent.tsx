import { useCallback, useEffect, useState } from "react";
import { IOpenStoryComponent } from "../types/story";
import ProgressBar from "./ProgressBar";

let timer: any;
let interval: any;

function OpenStoryComponent(props: IOpenStoryComponent) {
  const { setOpenStoryData, stories, totalStoriesCount } = props;
  const { index } = props.openStoryData;
  const { url: imageUrl } = props.openStoryData.story;

  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoaded(true);
    };
    image.src = imageUrl;
  }, [imageUrl]);

  const handleLeftClick = () => {
    if (index !== 0) {
      setOpenStoryData({
        index: index - 1,
        story: stories[index - 1],
      });
      setProgress(0);
    }
  };

  const handleRightClick = useCallback(() => {
    if (index !== totalStoriesCount - 1) {
      setOpenStoryData({
        index: index + 1,
        story: stories[index + 1],
      });
      setProgress(0);
    } else {
      setOpenStoryData(null);
    }
  }, [index, setOpenStoryData, stories, totalStoriesCount]);

  useEffect(() => {
    timer = setTimeout(() => {
      handleRightClick();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [imageUrl, handleRightClick]);

  useEffect(() => {
    if (progress < 5000) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [index, progress]);

  return (
    <div className="story-container">
      {loaded && props.openStoryData && (
        <ProgressBar max={5000} value={progress} />
      )}
      {!loaded && <p>loading</p>}
      {loaded && (
        <div className="action-button-wrapper">
          <p className="count-text">Story: {index + 1}</p>
          <div
            className="leftButton"
            onClick={(e) => {
              e.stopPropagation();
              handleLeftClick();
            }}
          ></div>
          <div
            className="rightButton"
            onClick={(e) => {
              e.stopPropagation();
              handleRightClick();
            }}
          ></div>
        </div>
      )}
      {loaded && (
        <img
          src={imageUrl}
          alt="story"
          className="selected-image show-story-container"
        />
      )}
    </div>
  );
}

export default OpenStoryComponent;
