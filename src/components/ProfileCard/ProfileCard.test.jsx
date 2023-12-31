import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import ProfileCard from ".";

describe("ProfileCard component", () => {
  const user = {
    profileImage: "https://via.placeholder.com/150",
    firstName: "Tim",
    lastName: "Rowe",
    email: "tim.row@example.com",
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProfileCard user={user} />
      </MemoryRouter>
    );
  });

  it("Displays the user profile details correctly", () => {
    const img = screen.getByRole("img", { name: /tim rowe/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", user.profileImage);

    const name = screen.getByText(/tim rowe/i);
    expect(name).toBeInTheDocument();

    const email = screen.getByText(/tim.row@example.com/i);
    expect(email).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /see completed tasks/i });
    expect(button).toBeInTheDocument();
  });

  it("Opens the popup when 'See Completed Tasks' button is clicked", () => {
    const button = screen.getByRole("button", { name: /see completed tasks/i });
    fireEvent.click(button);

    expect(screen.getByText(/popup content/i)).toBeInTheDocument();
    expect(
      screen.getByText(/this is where the tasks will be/i)
    ).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
