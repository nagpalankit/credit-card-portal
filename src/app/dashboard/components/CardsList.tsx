import { CreditCardList, CreditCard } from '@/src/types/CreditCard';

interface CardsListProps {
  cardsState: CreditCardList;
  updateCards: (cards: CreditCardList) => void;
}

export default function CardsList({ cardsState }: CardsListProps) {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      {cardsState.length > 0 ? (
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Card Number
              </th>
              <th scope='col' className='px-6 py-3'>
                Balance
              </th>
              <th scope='col' className='px-6 py-3'>
                Limit
              </th>
            </tr>
          </thead>
          <tbody>
            {cardsState.map((card: CreditCard) => (
              <tr
                key={card.id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
              >
                <td className='px-6 py-4'>{card.userName}</td>
                <td className='px-6 py-4'>{card.cardNumber}</td>
                <td className='px-6 py-4'>{card.remainingBalance}</td>
                <td className='px-6 py-4'>{card.cardLimit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No cards available</div>
      )}
    </div>
  );
}
