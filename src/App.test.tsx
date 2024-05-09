import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("axios");
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/story/i);
  expect(linkElement).toBeInTheDocument();
});
