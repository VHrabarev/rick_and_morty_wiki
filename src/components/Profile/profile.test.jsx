import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '.';

it("Render title text", () => {
    render(<Profile />);
    expect(screen.getByText('Profile')).toBeInTheDocument();
});