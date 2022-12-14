import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Character from '.';

test("Character component render", () => {
    render(<BrowserRouter><Character /></BrowserRouter>);
    const titleText = screen.getByText("Character");
    expect(titleText).toBeInTheDocument();
});