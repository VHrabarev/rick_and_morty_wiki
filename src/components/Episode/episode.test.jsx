import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Episode from '.';

test("Episode component render", () => {
    render(<BrowserRouter><Episode /></BrowserRouter>);
    const titleText = screen.getByText("Episode");
    expect(titleText).toBeInTheDocument();
});