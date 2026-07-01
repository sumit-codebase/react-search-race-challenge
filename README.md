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

