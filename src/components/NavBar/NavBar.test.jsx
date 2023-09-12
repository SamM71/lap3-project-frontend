import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import NavBar from ".";

describe("NavBar component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });

  it("Displays a nav bar with four children", () => {
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
    expect(nav.childNodes.length).toBe(5);
  });

  afterEach(() => {
    cleanup();
  });
});
