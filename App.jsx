import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleSearch() {
    setAnswer("Placeholder: connect this UI to your RAG API endpoint.");
  }

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", fontFamily: "Arial" }}>
      <h1>AI Web Knowledge Assistant</h1>
      <p>Enterprise-ready search and knowledge retrieval interface.</p>
      <textarea
        rows="5"
        style={{ width: "100%" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a question..."
      />
      <br />
      <button onClick={handleSearch}>Search</button>
      <section>
        <h2>Answer</h2>
        <p>{answer}</p>
      </section>
    </main>
  );
}
