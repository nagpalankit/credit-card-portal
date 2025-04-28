interface CreateCardFormProps {
  formData: {
    userName: string;
    cardNumber: string;
    cardLimit: string;
  };
  errorMessages: string[];
  submitCallback: (formEvent: React.FormEvent) => Promise<void>;
  changeCallback: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateCardForm: React.FC<CreateCardFormProps> = ({
  formData,
  errorMessages,
  submitCallback: submitHandler,
  changeCallback: changeHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="userName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={changeHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="cardNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={changeHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="cardLimit"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Limit
          </label>
          <input
            type="text"
            id="cardLimit"
            name="cardLimit"
            value={formData.cardLimit}
            onChange={changeHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      {errorMessages.length > 0 && (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {errorMessages.map((errorMessage, index) => 
                <div key={index}>{errorMessage}</div>
            )}
          </div>
        </div>
      )}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add
      </button>
    </form>
  );
};

export default CreateCardForm;
