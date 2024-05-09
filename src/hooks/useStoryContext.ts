import { useContext } from "react";
import { StoryContext } from "../utils/context";

function useStoryContext() {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error("useStoryContext must be used within a StoryProvider");
  }
  return context;
}

export default useStoryContext;
