import { useState } from "react";

const RandomNumberGenerator = () => {
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const generateRandomNumber = () => {
    if (min !== "" && max !== "" && parseInt(min) < parseInt(max)) {
      const randomNumber =
        Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) +
        parseInt(min);
      setResult(randomNumber);
      setHistory([randomNumber, ...history]);
    } else {
      alert("Please enter valid numbers (min < max).");
    }
  };

  const clearHistory = () => {
    setHistory([]);
    setResult(null);
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
<div className="absolute top-4 right-4">
  <button
    onClick={toggleDarkMode}
    className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition ${
      darkMode
        ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }`}
  >
    {darkMode ? (
      <>
        {/* Sun Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.364 7.364l-1.414-1.414M6.343 6.343L4.929 4.929m12.728 12.728l1.414-1.414M6.343 17.657l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
        Light Mode
      </>
    ) : (
      <>
        {/* Moon Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          />
        </svg>
        Dark Mode
      </>
    )}
  </button>
</div>

      <div
        className={`p-8 rounded-lg shadow-lg w-11/12 max-w-md ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-2xl font-bold text-center mb-6">🎲 Random Number Generator</h1>
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Min Value</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className={`w-full p-3 border rounded-md focus:ring-2 outline-none ${
                darkMode
                  ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                  : "bg-gray-100 border-gray-300 focus:ring-blue-400"
              }`}
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Max Value</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className={`w-full p-3 border rounded-md focus:ring-2 outline-none ${
                darkMode
                  ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                  : "bg-gray-100 border-gray-300 focus:ring-blue-400"
              }`}
            />
          </div>
          <div className="flex justify-between items-center space-x-2">
            <button
              onClick={generateRandomNumber}
              className="w-full px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Generate
            </button>
            <button
              onClick={clearHistory}
              className="w-full px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Clear
            </button>
          </div>
          {result !== null && (
            <div className="text-center mt-4">
              <p className="text-lg">Generated Number:</p>
              <p className="text-3xl font-bold animate-pulse">{result}</p>
            </div>
          )}
        </div>
        {history.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">History</h2>
            <ul className="list-disc list-inside space-y-1">
              {history.map((num, index) => (
                <li key={index}>{num}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
