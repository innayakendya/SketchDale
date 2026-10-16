// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SketchDale title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SketchDale/i);
    expect(titleElement).toBeInTheDocument();
});
