import React, { useState } from "react";
import { FaLink } from "react-icons/fa";

const Main = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!originalUrl) {
      alert("Please enter a URL!");
      return;
    }

    setLoading(true);
    setShortUrl("");

    try {
      const response = await fetch("http://localhost:8080/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl }),
      });

      if (!response.ok) {
        alert("Failed to shorten URL. Please try again.");
        return;
      }

      const data = await response.json();
      setShortUrl(`http://localhost:8080/${data.shortUrl}`);
    } catch (err) {
      console.error(err);
      alert("Server error. Please ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <main className="bg-[#F7F6F2] py-8">
  {/* Hero Section */}
  <section className="flex flex-col items-center justify-center gap-8 px-4 py-10 text-center">
    <h1 className="text-[#2F3E1F] text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-[800px]">
      Shorten Your Long Links in Seconds
    </h1>
    <p className="text-[#4B5563] text-base md:text-lg max-w-[700px]">
      Paste your long URL below and get a neat, shareable short link instantly.
    </p>

    <div className="w-full max-w-2xl">
  <div className="flex shadow-lg rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#D6CDA4] focus-within:ring-2 focus-within:ring-[#829460] transition-all flex-wrap sm:flex-nowrap">
    <input
      type="url"
      placeholder="Enter your long URL here..."
      className="flex-1 min-w-0 px-5 py-3 text-base text-[#2F3E1F] placeholder-[#9ca3af] focus:outline-none"
      value={originalUrl}
      onChange={(e) => setOriginalUrl(e.target.value)}
    />
    <button
      onClick={handleShorten}
      disabled={loading || !originalUrl}
      className={`flex-shrink-0 px-4 sm:px-6 md:px-8 py-3 font-semibold transition-all duration-200 ${
        loading || !originalUrl
          ? "bg-[#B7C4A1] cursor-not-allowed text-white"
          : "bg-[#829460] hover:bg-[#6E8250] text-white"
      }`}
    >
      {loading ? "Shortening..." : "Shorten"}
    </button>
  </div>
</div>

  </section>

  {/* Shortened URL Section */}
  {shortUrl && (
    <section className="flex flex-col items-center gap-5 px-4 pb-10">
      <h4 className="text-[#4B5563] text-sm font-semibold uppercase tracking-wide">
        Your Shortened Link
      </h4>

      <div className="flex items-center justify-between gap-4 w-full max-w-2xl bg-[#FFFFFF] rounded-2xl shadow-md border border-[#D6CDA4] px-5 py-2">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#E8E6DC] text-[#829460] shrink-0">
            <FaLink className="text-lg" />
          </div>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2F3E1F] text-base font-medium truncate flex-1"
          >
            {shortUrl}
          </a>
        </div>
        <button
          onClick={copyToClipboard}
          className="bg-[#D6CDA4] hover:bg-[#C9C395] text-[#2F3E1F] text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm"
        >
          Copy
        </button>
      </div>
    </section>
  )}
</main>

  );
};

export default Main;
