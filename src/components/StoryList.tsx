import { useCallback } from "react";
import useStoryContext from "../hooks/useStoryContext";
import StoryItem from "./StoryItem";
import { OpenStoryData, Story } from "../types/story";
import OpenStoryComponent from "./OpenStoryComponent";

interface IStoryList {
  openStoryData: OpenStoryData | null;
  setOpenStoryData: React.Dispatch<React.SetStateAction<OpenStoryData | null>>;
}
function StoryList(props: IStoryList) {
  const { stories } = useStoryContext();
  const { openStoryData, setOpenStoryData } = props;
  const handleThumnailClick = useCallback(
    (story: Story, index: number) => {
      setOpenStoryData({ story, index });
    },
    [setOpenStoryData]
  );

  return (
    <div
      className="story-wrapper"
      onClick={() => {
        setOpenStoryData(null);
      }}
    >
      {!openStoryData && (
        <div className="thumbnail-list">
          {stories.map((story, index) => (
            <StoryItem
              key={story.id}
              story={story}
              onClick={handleThumnailClick}
              storyIndex={index}
            />
          ))}
        </div>
      )}
      {openStoryData && (
        <OpenStoryComponent
          openStoryData={openStoryData}
          setOpenStoryData={setOpenStoryData}
          totalStoriesCount={stories.length}
          stories={stories}
        />
      )}
    </div>
  );
}

export default StoryList;
