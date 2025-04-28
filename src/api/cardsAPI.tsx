import {
  CreditCardDraft,
  CreditCardList,
  CreditCard,
} from "@/src/types/CreditCard";
import { ApiError } from "../types/ApiError";

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
      throw new Error("Unexpected issue in fetching cards. Please try later.");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Unexpected issue in fetching cards. Please try later.");
  }
};

export const createCard = async (
  card: CreditCardDraft
): Promise<CreditCard | string[]> => {
  try {
    const res = await fetch(`${BASE_URL}/cards`, {
      method: "POST",
      body: JSON.stringify(card),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 400) {
      return ((await res.json()) as ApiError).errors;
    } else if (res.status !== 201) {
      throw new Error("Unexpected issue in creating card. Please try later.");
    }

    return (await res.json()) as CreditCard;
  } catch (error) {
    throw new Error("Unexpected issue in creating card. Please try later.");
  }
};
