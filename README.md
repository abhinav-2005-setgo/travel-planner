# Wayfare — AI travel planner (UI phase)

React + Vite + Tailwind frontend for a travel package planner. Currently runs on
dummy data shaped exactly like the future AI response — swapping in the real
backend later won't require touching any component.

## Run locally

```
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```
npm run build
```

Output goes to `dist/` — that's the folder you deploy.

## Deploy to Netlify

1. Push this folder to a GitHub repo.
2. On Netlify: "Add new site" → "Import an existing project" → pick the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

## Project structure

```
src/
  components/
    SearchBar.jsx          search input + quick suggestion chips
    DestinationCard.jsx     browse-grid card (image, tagline, CTA)
    HotelList.jsx           3-tier hotel cards (budget/mid/luxury)
    FoodList.jsx             food spot cards (specialty + must-try dish)
    ItineraryTimeline.jsx    day-by-day vertical timeline
    PackageDetail.jsx        assembles all of the above into one result view
  data/
    destinations.js          dummy data + getPackage(query) lookup
  App.jsx                     state: query, active package, not-found
```

## Next step — wiring real AI

Replace `getPackage(query)` in `src/data/destinations.js` with a fetch to your
backend (Netlify Function calling the Claude API). Keep the same return shape
(destination, tagline, bestTime, budget, language, hotels[], foodSpots[],
itinerary[], tips[]) and every component keeps working with zero changes.
