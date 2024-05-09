import { createContext} from "react";
import { StoryContextType } from "../types/story";


const StoryContext = createContext<StoryContextType | undefined>(undefined);

export {
    StoryContext
}