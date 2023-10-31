import React from 'react';
import { screen, render, cleanup } from '@testing-library/react'
import App from './App';


describe('App component', () => {

  it('should have the right message in the dom', () => {
      const message = 'Hello Worlds';
      
      render(<App />);
    expect(screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
})