import { render, screen } from "@testing-library/react";
import CardsList from "@/src/app/dashboard/components/CardsList";
import { CreditCardList } from "@/src/types/CreditCard";

const mockCards: CreditCardList = [
  {
    id: 1,
    userName: "John Doe",
    cardNumber: "1234-5678-9012-3456",
    remainingBalance: 1000,
    cardLimit: 5000,
  },
  {
    id: 2,
    userName: "Jane Smith",
    cardNumber: "9876-5432-1098-7654",
    remainingBalance: 2000,
    cardLimit: 3000,
  },
];

describe("CardsList", () => {
  it("renders a table with four columns and one header row and two data rows", () => {
    render(<CardsList cardsState={mockCards} updateCards={() => {}} />);

    const columnHeaders = screen.getAllByRole("columnheader");
    const rows = screen.getAllByRole("row")
    const noCardsMessage = screen.queryByText(/no cards available/i);

    expect(columnHeaders).toHaveLength(4);
    expect(rows).toHaveLength(mockCards.length + 1);
    expect(columnHeaders[0]).toHaveTextContent(/name/i);
    expect(columnHeaders[1]).toHaveTextContent(/card number/i);
    expect(columnHeaders[2]).toHaveTextContent(/balance/i);
    expect(columnHeaders[3]).toHaveTextContent(/limit/i);
    expect(noCardsMessage).not.toBeInTheDocument();
  });

  it("renders information message when when there are no saved cards", () => {
    render(<CardsList cardsState={[]} updateCards={() => {}} />);

    const noCardsMessage = screen.getByText(/no cards available/i);
    const cardsTable = screen.queryByRole("table");

    expect(noCardsMessage).toBeInTheDocument();
    expect(cardsTable).not.toBeInTheDocument();
  });
});
