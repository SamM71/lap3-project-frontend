import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import StartButton from ".";

describe("StartButton component", () => {
  beforeEach(() => {
    render(
      <StartButton />
    );
  });

  it("Displays a button", () => {
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
