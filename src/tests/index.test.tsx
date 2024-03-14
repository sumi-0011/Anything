const sum = (a: number, b: number): number => a + b;

import { render, screen } from "@testing-library/react";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

const App = () => {
  return <div>Hello world! I am using React</div>;
};

describe("App tests", () => {
  it("should contains the heading 1", () => {
    render(<App />);
    const heading = screen.getByText(/Hello world! I am using React/i);
    expect(heading).toBeInTheDocument();
  });
});
