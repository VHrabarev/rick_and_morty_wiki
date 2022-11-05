import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '.';

it("Render title text", () => {
    render(<Register />);
    expect(screen.getByText("Register form")).toBeInTheDocument();
});