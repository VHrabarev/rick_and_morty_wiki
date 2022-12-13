import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Location from '.';

test("Location component render", () => {
    render(<BrowserRouter><Location /></BrowserRouter>);
    const titleText = screen.getByText("Location");
    expect(titleText).toBeInTheDocument();
});