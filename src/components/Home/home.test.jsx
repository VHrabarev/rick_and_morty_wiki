import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '.';
import store from "../../store";

test("Home component render", () => {
    render(<Provider store={store}><Home /></Provider>);
    const titleText = screen.getByText("Home");
    expect(titleText).toBeInTheDocument();
});