import { useState, useEffect } from "react";
import { fakeSearch } from "./fakeApi.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);
    fakeSearch(query).then((data) => {
      setResults(data);
      setLoading(false);
    });
  }, [query]);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Fruit Search</h2>
      <input
        placeholder="Type a fruit name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 8, width: 250 }}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
