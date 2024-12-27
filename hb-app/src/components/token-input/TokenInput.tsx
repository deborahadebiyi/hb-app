export default function TokenInput() {
  return (
    <form className="max-w-sm mx-auto">
      <p
        id="helper-text-prompt"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        Please provide the 6 digit code sent to your email to verify your
        account
      </p>
      <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
        <div>
          <label htmlFor="code-1" className="sr-only">
            First code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-next="code-2"
            id="code-1"
            className="block w-9 h-9 py-3 text-sm font-extrabold text-center  bg-white border border-gray-300 rounded-lg focus:ring-primary-700 focus:border-primary-500  placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
            // className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-2" className="sr-only">
            Second code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-1"
            data-focus-input-next="code-3"
            id="code-2"
            className="block w-9 h-9 py-3 text-sm font-extrabold text-center  bg-white border border-gray-300 rounded-lg focus:ring-primary-700 focus:border-primary-500  placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-3" className="sr-only">
            Third code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-2"
            data-focus-input-next="code-4"
            id="code-3"
            className="block w-9 h-9 py-3 text-sm font-extrabold text-center  bg-white border border-gray-300 rounded-lg focus:ring-primary-700 focus:border-primary-500  placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-4" className="sr-only">
            Fourth code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-3"
            data-focus-input-next="code-5"
            id="code-4"
            className="block w-9 h-9 py-3 text-sm font-extrabold text-center  bg-white border border-gray-300 rounded-lg focus:ring-primary-700 focus:border-primary-500  placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-5" className="sr-only">
            Fifth code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-4"
            data-focus-input-next="code-6"
            id="code-5"
            className="block w-9 h-9 py-3 text-sm font-extrabold text-center  bg-white border border-gray-300 rounded-lg focus:ring-primary-700 focus:border-primary-500  placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-6" className="sr-only">
            Sixth code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-5"
            id="code-6"
            className="block w-9 h-9 py-3 text-sm font-extrabold text-center  bg-white border border-gray-300 rounded-lg focus:ring-primary-700 focus:border-primary-500  placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white
                bg-gradient-to-r from-lightAqua via-papyrus to-darkpapyrus
                hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                focus:ring-lightGold dark:focus:ring-offset-lightAqua font-medium
                rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Submit
      </button>
      <p
        id="helper-text-explanation"
        className="mt-2 underline text-sm text-gray-500 dark:text-gray-400"
      >
        Didn't receive the code? Click to resend
      </p>
    </form>
  );
}
