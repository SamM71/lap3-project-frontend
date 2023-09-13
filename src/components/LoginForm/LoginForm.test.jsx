import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import LoginForm from '.';

describe("LoginForm component", () => {
    beforeEach(() => {
      render(<LoginForm />);
    });
  
    it("Displays email input", () => {
      const emailInput = screen.getByLabelText(/Email/i);
      expect(emailInput).toBeInTheDocument();
    });
  
    it("Displays password input", () => {
      const passwordInput = screen.getByLabelText(/New Password/i);
      expect(passwordInput).toBeInTheDocument();
    });
  
    
    it("Displays submit button", () => {
      const submitButton = screen.getByText(/Submit/i);
      expect(submitButton).toBeInTheDocument();
    });
  
    afterEach(() => {
      cleanup(); 
    });
  });
