export interface CreditCardDraft {
  userName: string;
  cardNumber: string;
  cardLimit: number;
}

export interface CreditCard extends CreditCardDraft {
  id: number;
  remainingBalance: number;
}

export type CreditCardList = CreditCard[];
