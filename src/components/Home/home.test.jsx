import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '.';

it("Render title text", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
});