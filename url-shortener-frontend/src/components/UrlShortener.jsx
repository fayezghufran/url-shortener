import React, { useState } from "react";
import { FiClipboard } from "react-icons/fi";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    setError("");
    if (!originalUrl) {
      setError("Please enter a URL.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl }),
      });

      if (!response.ok) {
        setError("Failed to shorten URL.");
        return;
      }

      const data = await response.json();
      setShortUrl(`http://localhost:8080/${data.shortUrl}`);
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="shortener-container">
      <input
        type="url"
        placeholder="Enter your long URL here"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten URL</button>
      {error && <p className="error">{error}</p>}

      {shortUrl && (
        <div className="short-url-card">
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
          <button onClick={copyToClipboard}>
            <FiClipboard size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
