"use client";

import { useState } from "react";

export default function OpenAIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="p-4 border rounded bg-white text-black">
      <h2 className="text-lg font-bold mb-2">Ask CeloMind AI</h2>
      <textarea
        className="w-full p-2 border"
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something about Celo..."
      />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
        Send
      </button>
      {response && (
        <div className="mt-4 p-2 border bg-gray-100 rounded">
          <strong>Response:</strong> {response}
        </div>
      )}
    </div>
  );
}
