
import React, { useState } from "react";

const GeminiPrompt = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      console.log(data, "data response");
      if (data && typeof data === "object" && "text_content" in data) {
        setResponse(data.text_content);
      }
      else if (data && typeof data === "object" && "error" in data)
        {
          setResponse(data.error);
        }
      else {
        setResponse("An invalid response was received from the API");
      }
    } catch (error) {
      console.error(error);
      setResponse("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Ask Gemini anything!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default GeminiPrompt;