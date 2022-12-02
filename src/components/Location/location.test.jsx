import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Location from '.';

test("Location component render", () => {
    render(<Location />);
    const titleText = screen.getByText("Location");
    expect(titleText).toBeInTheDocument();
});