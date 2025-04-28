"use client";

import { useEffect, useState } from "react";
import { createCard, getAllCards } from "@/src/api/cardsAPI";
import { CreditCard, CreditCardList } from "@/src/types/CreditCard";
import { creditCardDraftSchema } from "@/src/validation/CreditCardDraftSchema";
import { formatErrorMessages } from "@/src/utils/utils";
import CardsList from "./components/CardsList";
import CreateCardForm from "./components/CreateCardForm";
import Section from "./components/Section";

export default function DashboardPage() {
  const [formData, setFormData] = useState({
    userName: "",
    cardNumber: "",
    cardLimit: "",
  });
  const [cards, setCards] = useState<CreditCardList>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    const validatedFields = creditCardDraftSchema.safeParse({
      userName: formData.userName,
      cardNumber: formData.cardNumber,
      cardLimit: formData.cardLimit,
    });

    if (!validatedFields.success) {
      setErrorMessages(formatErrorMessages(validatedFields.error.flatten().fieldErrors));
      return;
    }
    try {
      const newCard: CreditCard = await createCard({
        userName: formData.userName,
        cardNumber: formData.cardNumber,
        cardLimit: parseInt(formData.cardLimit),
      });
      setFormData({ userName: "", cardNumber: "", cardLimit: "" });
      setErrorMessages([]);
      setCards((prevCards) => [...(prevCards || []), newCard]);
    } catch (error) {
      setErrorMessages([error instanceof Error ? error.message : "An unknown error occurred"]);
    }
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const result = await getAllCards();
        setCards(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <>
      <div className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white align-content-center">
        Credit Card System
      </div>
      <Section heading="Add Card">
        <CreateCardForm
          formData={formData}
          errorMessages={errorMessages}
          submitCallback={handleSubmit}
          changeCallback={handleChange}
        />
      </Section>
      <Section heading="Existing Cards">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <CardsList cardsState={cards} updateCards={setCards} />
        )}
      </Section>
    </>
  );
}
