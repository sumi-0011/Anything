import { describe, expect, it, test } from "@jest/globals";

const sum = (a: number, b: number): number => a + b;

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

import { render, screen } from "@testing-library/react";
import React from "react";

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
