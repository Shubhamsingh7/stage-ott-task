import { useState } from "react";
import { StoryProvider } from "./utils/provider/StoryProvider";
import "./App.css";
import StoryList from "./components/StoryList";
import { OpenStoryData } from "./types/story";

const App = () => {
  const [openStoryData, setOpenStoryData] = useState<OpenStoryData | null>(
    null
  );

  return (
    <div
      className="app"
      onClick={() => {
        setOpenStoryData(null);
      }}
    >
      <h1 className="page-heading">Instagram Story Feature</h1>
      <StoryProvider>
        <StoryList
          setOpenStoryData={setOpenStoryData}
          openStoryData={openStoryData}
        />
      </StoryProvider>
    </div>
  );
};

export default App;
