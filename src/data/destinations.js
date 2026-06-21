// Dummy data shaped to match the future AI-generated response.
// When the real backend is wired in, getPackage(query) swaps to a fetch call
// and every component below keeps working unchanged.

export const destinations = [
  {
    id: 'goa',
    name: 'Goa, India',
    tagline: 'Beaches by day, shacks by night',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800',
    bestTime: 'Nov – Feb',
    budget: '₹2,500 – ₹5,000 / day',
    language: 'Konkani, Hindi, English',
    hotels: [
      { name: 'Zostel Goa', type: 'Budget', price: '₹900/night', highlight: 'Backpacker hub with rooftop common area' },
      { name: 'Caravela Beach Resort', type: 'Mid-range', price: '₹6,500/night', highlight: 'Beachfront pool villas in South Goa' },
      { name: 'Taj Fort Aguada', type: 'Luxury', price: '₹18,000/night', highlight: 'Historic fort-side resort, private beach' },
    ],
    foodSpots: [
      { name: 'Britto\'s, Baga', specialty: 'Goan seafood thali', mustTry: 'Prawn curry rice', priceRange: '₹₹' },
      { name: 'Gunpowder, Assagao', specialty: 'South Indian-Goan fusion', mustTry: 'Appam with stew', priceRange: '₹₹₹' },
      { name: 'Vinayak Family Restaurant', specialty: 'No-frills local thali', mustTry: 'Fish curry thali', priceRange: '₹' },
      { name: 'Curlies, Anjuna', specialty: 'Beach shack classics', mustTry: 'Grilled kingfish', priceRange: '₹₹' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'North Goa beaches', activities: ['Sunrise at Baga Beach', 'Flea market at Anjuna', 'Sunset at Vagator cliffs'] },
      { day: 'Day 2', title: 'Heritage & food', activities: ['Old Goa churches tour', 'Lunch at a Panjim café', 'Fontainhas walking trail'] },
      { day: 'Day 3', title: 'South Goa calm', activities: ['Palolem Beach morning', 'Dudhsagar Falls day trip', 'Seafood dinner in Margao'] },
    ],
    tips: [
      'Rent a scooter — public transport is sparse outside main towns.',
      'Carry cash; many beach shacks don\'t take cards.',
      'Book North Goa stays if nightlife matters, South Goa for quiet.',
    ],
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters, India',
    tagline: 'Houseboats, coconut groves, slow mornings',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
    bestTime: 'Sep – Mar',
    budget: '₹2,000 – ₹4,500 / day',
    language: 'Malayalam, English',
    hotels: [
      { name: 'Backwater Ripples Homestay', type: 'Budget', price: '₹1,200/night', highlight: 'Family-run, canal-side rooms' },
      { name: 'Punnamada Houseboat Stay', type: 'Mid-range', price: '₹7,000/night', highlight: 'Overnight houseboat with meals included' },
      { name: 'Kumarakom Lake Resort', type: 'Luxury', price: '₹22,000/night', highlight: 'Private pool villas on the lake' },
    ],
    foodSpots: [
      { name: 'Kream Korner, Alleppey', specialty: 'Kerala home-style meals', mustTry: 'Karimeen pollichathu', priceRange: '₹₹' },
      { name: 'Vembanad Restaurant', specialty: 'Backwater seafood', mustTry: 'Prawn moilee', priceRange: '₹₹' },
      { name: 'Chakara Restaurant', specialty: 'Traditional sadya', mustTry: 'Sadya on banana leaf', priceRange: '₹' },
      { name: 'Salt and Pepper, Kumarakom', specialty: 'Toddy shop classics', mustTry: 'Duck roast', priceRange: '₹₹' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Houseboat cruise', activities: ['Board houseboat at Alleppey', 'Cruise through paddy fields', 'Sunset on the backwaters'] },
      { day: 'Day 2', title: 'Village life', activities: ['Coir-making village visit', 'Canoe ride through narrow canals', 'Toddy shop lunch stop'] },
      { day: 'Day 3', title: 'Kumarakom & birds', activities: ['Kumarakom Bird Sanctuary', 'Lakeside cycling', 'Ayurvedic massage session'] },
    ],
    tips: [
      'Book houseboats a week ahead in peak season (Dec–Jan).',
      'Mosquito repellent is essential near the backwaters at dusk.',
      'Most sadya meals are vegetarian — flag ahead if you want fish/meat add-ons.',
    ],
  },
  {
    id: 'paris',
    name: 'Paris, France',
    tagline: 'Cafés, galleries, golden-hour bridges',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800',
    bestTime: 'Apr – Jun, Sep – Oct',
    budget: '€90 – €180 / day',
    language: 'French',
    hotels: [
      { name: 'Generator Paris', type: 'Budget', price: '€45/night', highlight: 'Design hostel near Canal Saint-Martin' },
      { name: 'Hotel Henriette', type: 'Mid-range', price: '€160/night', highlight: 'Boutique stay near the Latin Quarter' },
      { name: 'Le Meurice', type: 'Luxury', price: '€950/night', highlight: 'Palace hotel facing the Tuileries' },
    ],
    foodSpots: [
      { name: 'Du Pain et des Idées', specialty: 'Bakery, pastries', mustTry: 'Pain des amis', priceRange: '€' },
      { name: 'Le Comptoir du Relais', specialty: 'Classic French bistro', mustTry: 'Steak frites', priceRange: '€€€' },
      { name: 'L\'As du Fallafel', specialty: 'Marais street food', mustTry: 'Falafel special', priceRange: '€' },
      { name: 'Septime', specialty: 'Modern French tasting menu', mustTry: 'Seasonal tasting menu', priceRange: '€€€€' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Classic Paris', activities: ['Louvre morning visit', 'Seine riverside walk', 'Eiffel Tower at sunset'] },
      { day: 'Day 2', title: 'Montmartre & art', activities: ['Sacré-Cœur and Montmartre streets', 'Musée d\'Orsay afternoon', 'Wine bar in Le Marais'] },
      { day: 'Day 3', title: 'Local Paris', activities: ['Canal Saint-Martin morning coffee', 'Le Marais boutique browsing', 'Picnic at Champ de Mars'] },
    ],
    tips: [
      'Buy a Navigo Easy card for cheaper, easier metro travel.',
      'Many museums are free or discounted on first Sunday mornings.',
      'Restaurants often close between lunch and dinner — check hours ahead.',
    ],
  },
]

export function getPackage(query) {
  const q = query.trim().toLowerCase()
  return destinations.find(
    (d) => d.name.toLowerCase().includes(q) || d.id.includes(q)
  )
}

// Calls the Netlify Function for any destination not in the dummy set above.
export async function generatePackage(query) {
  const res = await fetch('/.netlify/functions/generate-package', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ destination: query }),
  })

  if (!res.ok) {
    throw new Error('Failed to generate package')
  }

  return res.json()
}
