interface Story {
  id: number;
  thumbnailUrl: string;
  url: string;
}

interface StoryContextType {
  stories: Story[];
}

interface OpenStoryData {
  story: Story;
  index: number;
}

interface IOpenStoryComponent {
  openStoryData: OpenStoryData;
  setOpenStoryData: React.Dispatch<React.SetStateAction<OpenStoryData | null>>;
  totalStoriesCount: number;
  stories:Story[]
}

interface IStoryItem {
  key: number;
  story: Story;
  onClick: (story: Story, index: number) => void;
  storyIndex: number;
}

export {
  Story,
  StoryContextType,
  OpenStoryData,
  IOpenStoryComponent,
  IStoryItem,
};
