# React Search Race Condition Challenge

## Setup

```bash
npm install
npm run dev
```

## Task

This is a search box that fetches results as you type. It looks fine at
first glance, but has a real bug.

1. Open the app and type quickly, e.g.: `a` → `ap` → `app` → `apple`
   then quickly delete back down to just `a`.
2. Watch what ends up in the results list — it doesn't match what's
   currently in the input box.
3. Use AI to find why this happens and fix it.
4. Be ready to explain: which request "wins" right now, and why is it
   the wrong one?

## Hint (only if stuck)

Look at `fakeApi.js` — it simulates realistic network jitter, where
shorter queries can take *longer* to respond than longer ones.

## Bonus

- Would adding a debounce alone fix this, or does that just make the bug
  rarer instead of impossible?
- How would you solve this with an AbortController instead of a boolean
  flag?
- If you were using React Query / SWR, would this bug even be possible?
  Why?
