import { IStoryItem } from "../types/story";

function StoryItem(props: IStoryItem) {
  const { thumbnailUrl } = props.story;
  return (
    <img
      src={thumbnailUrl}
      alt="Story Thumbnail"
      className="story-thumbnail"
      height="80px"
      width="80px"
      loading="eager"
      onClick={(e) => {
        e.stopPropagation();
        props.onClick(props.story, props.storyIndex);
      }}
    />
  );
}

export default StoryItem;
