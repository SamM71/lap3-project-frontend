import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import TaskPopUp from ".";

describe("TaskPopUp component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Displays the popup when the trigger is true", () => {
    render(
      <TaskPopUp trigger={true}>
        <p>Test Content</p>
      </TaskPopUp>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByText("Exit")).toBeInTheDocument();
  });

  it("Does not display the popup when the trigger is false", () => {
    render(
      <TaskPopUp trigger={false}>
        <p>Test Content</p>
      </TaskPopUp>
    );

    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
    expect(screen.queryByText("Exit")).not.toBeInTheDocument();
  });
});
