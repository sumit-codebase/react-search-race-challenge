// Simulates a real search API where response time varies (network jitter,
// server load, etc). Shorter queries intentionally respond slower to make
// the race condition easy to reproduce.
const DATA = [
  "apple", "apricot", "avocado",
  "banana", "blueberry", "blackberry",
  "cherry", "coconut", "cranberry",
  "date", "dragonfruit",
  "elderberry",
  "fig",
  "grape", "grapefruit", "guava",
];

export async function fakeSearch(query) {
  const delay = query.length <= 2 ? 800 : 150; // short queries = slow response
  await new Promise((resolve) => setTimeout(resolve, delay));

  if (!query) return [];
  return DATA.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
}
