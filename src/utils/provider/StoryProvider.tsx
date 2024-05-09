import { StoryContext } from "../context";
import useFetchData from "../../hooks/useFetchData";

const StoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, loading, error } = useFetchData("/stories");

  if (loading) {
    return <div>Loading...</div>;
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
