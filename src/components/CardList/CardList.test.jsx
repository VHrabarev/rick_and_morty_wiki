import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import CardList from '.';

const cards = [
    {
        name: "name_1",
        created: "created_1",
        image: "image_1",
        id: 1,
    },
    {
        name: "name_2",
        created: "created_2",
        image: "image_2",
        id: 2,
    },
];

test("CardList component render", () => {
    render(<CardList/>);
    const titleText = screen.getByText("Card list");
    expect(titleText).toBeInTheDocument();
});

test("Data display", () => {
    render(<BrowserRouter><CardList cards={cards}/></BrowserRouter>);
    const cardsElement = screen.getByText(cards[0].name);
    expect(cardsElement).toBeInTheDocument();
});