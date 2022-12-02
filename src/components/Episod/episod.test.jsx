import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Episod from '.';

test("Episod component render", () => {
    render(<Episod />);
    const titleText = screen.getByText("Episod");
    expect(titleText).toBeInTheDocument();
});