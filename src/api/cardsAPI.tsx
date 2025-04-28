import {
  CreditCardDraft,
  CreditCardList,
  CreditCard,
} from "@/src/types/CreditCard";

const BASE_URL = "http://localhost:8080";

export const getAllCards = async (): Promise<CreditCardList> => {
  try {
    const response = await fetch(`${BASE_URL}/cards`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch cards: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch cards: ${error}`);
  }
};

export const createCard = async (
  card: CreditCardDraft
): Promise<CreditCard> => {
  try {
    const res = await fetch(`${BASE_URL}/cards`, {
      method: "POST",
      body: JSON.stringify(card),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status !== 201) {
      throw new Error(`Failed to create card: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    throw new Error(`Failed to create card: ${error}`);
  }
};
