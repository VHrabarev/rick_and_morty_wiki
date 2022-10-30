import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '.';

let pageListMock = [
    {name: "test1", link: "test1"},
    {name: "test2", link: "test2"},
    {name: "test3", link: "test3"},
];

it("Render pages list", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route index element={<Header pages={pageListMock} />} />
            </Routes>
        </BrowserRouter>
    );
    expect(screen.getByText("test1")).toBeInTheDocument();
});