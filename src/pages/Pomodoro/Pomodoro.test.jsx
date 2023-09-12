import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
vi.mock('canvas')
import Pomodoro from '.';

describe('Pomodoro Component', () => {
  beforeEach(() => {
    render(<Pomodoro />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should display a button', () => {
    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()
  })
})