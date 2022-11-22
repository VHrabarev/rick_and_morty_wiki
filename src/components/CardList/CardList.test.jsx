import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from '.';

it("Component render", () => {
    render(<CardList />);
    expect(screen.getByText("Card list")).toBeInTheDocument();
});