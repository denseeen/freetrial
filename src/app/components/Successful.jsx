export default function FreeTrialSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex justify-center">
      <div className="text-center py-10 px-6 w-full max-w-xl">
        <div className="bg-white p-6 rounded shadow border mb-4 flex flex-col relative">
          {/* Logo and dividers */}
          <div className="flex items-center mb-6 w-full">
            <div className="flex-grow border-t border-black"></div>
            <img
              src="/images/final-logo.png"
              alt="Logo"
              className="h-16 border border-black mx-4"
            />
            <div className="flex-grow border-t border-black"></div>
          </div>

          {/* Success message */}
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            Free Trial Submitted Successfully!
          </h2>
          <p className="text-gray-700 mb-8">
            You will receive an email confirming your submission shortly.
          </p>

          {/* Go Back button in bottom right */}
          <div className="flex justify-end mt-auto">
            <a
              href="/"
              className=" text-black text-xs py-2 px-4 rounded space-x-1"
            >
              <span className="text-black">🡠</span>
              <span className="text-blue-500 hover:text-blue-700">Back</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}