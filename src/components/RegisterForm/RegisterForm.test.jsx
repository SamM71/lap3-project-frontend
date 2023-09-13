import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import RegisterForm from '.';

describe("RegisterForm component", () => {
    beforeEach(() => {
      render(<RegisterForm />);
    });
  
    it("Displays name input", () => {
      const nameInput = screen.getByLabelText(/Your Name/i);
      expect(nameInput).toBeInTheDocument();
    });
  
    it("Displays username input", () => {
      const usernameInput = screen.getByLabelText(/Username/i);
      expect(usernameInput).toBeInTheDocument();
    });
  
    it("Displays email input", () => {
      const emailInput = screen.getByLabelText(/Email/i);
      expect(emailInput).toBeInTheDocument();
    });
  
    it("Displays new password input", () => {
      const firstPasswordInput = screen.getByLabelText(/New Password/i);
      expect(firstPasswordInput).toBeInTheDocument();
    });
  
    it("Displays confirm password input", () => {
      const secondPasswordInput = screen.getByLabelText(/Confirm Password/i);
      expect(secondPasswordInput).toBeInTheDocument();
    });
  
    it("Displays submit button", () => {
      const submitButton = screen.getByText(/Submit/i);
      expect(submitButton).toBeInTheDocument();
    });
  
    afterEach(() => {
      cleanup(); 
    });
  });
