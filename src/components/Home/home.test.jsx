import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '.';
import store from "../../store";

it("Render title text", () => {
    render(<Provider store={store}><Home /></Provider>);
    expect(screen.getByText("Main")).toBeInTheDocument();
});