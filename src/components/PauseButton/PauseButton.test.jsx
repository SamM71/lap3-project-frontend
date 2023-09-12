import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import PauseButton from ".";

describe("PauseButton component", () => {
  beforeEach(() => {
    render(
      <PauseButton />
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
