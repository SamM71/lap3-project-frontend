import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import SessionForm from ".";

describe("SessionForm component", () => {
    beforeEach(() => {
      render(<SessionForm />);
    })

    afterEach(() => {
      cleanup();
    })

    it("Displays a form", () => {
      const form = screen.getByRole("form");
      expect(form).toBeInTheDocument();
    });

    it("Displays a title input", () => {
      const titleInput = screen.getByLabelText("Title of session: ");
      expect(titleInput).toBeInTheDocument()
    })

    it("Displays a desc input", () => {
      const descInput = screen.getByLabelText(/Description:/i)
      expect(descInput).toBeInTheDocument()
    })

    it("Displays a button", () => {
      const submitButton = screen.getByRole("button")
      expect(submitButton).toBeInTheDocument()
    } )

  });
  
