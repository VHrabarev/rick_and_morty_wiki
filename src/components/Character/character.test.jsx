import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Character from '.';

test("Character component render", () => {
    render(<Character />);
    const titleText = screen.getByText("Character");
    expect(titleText).toBeInTheDocument();
});