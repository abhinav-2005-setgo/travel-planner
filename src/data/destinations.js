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
      { name: "Britto's, Baga", specialty: 'Goan seafood thali', mustTry: 'Prawn curry rice', priceRange: '₹₹' },
      { name: 'Gunpowder, Assagao', specialty: 'South Indian-Goan fusion', mustTry: 'Appam with stew', priceRange: '₹₹₹' },
      { name: 'Vinayak Family Restaurant', specialty: 'No-frills local thali', mustTry: 'Fish curry thali', priceRange: '₹' },
      { name: "Curlies, Anjuna", specialty: 'Beach shack classics', mustTry: 'Grilled kingfish', priceRange: '₹₹' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'North Goa beaches', activities: ['Sunrise at Baga Beach', 'Flea market at Anjuna', 'Sunset at Vagator cliffs'] },
      { day: 'Day 2', title: 'Heritage & food', activities: ['Old Goa churches tour', 'Lunch at a Panjim café', 'Fontainhas walking trail'] },
      { day: 'Day 3', title: 'South Goa calm', activities: ['Palolem Beach morning', 'Dudhsagar Falls day trip', 'Seafood dinner in Margao'] },
    ],
    tips: ['Rent a scooter — public transport is sparse.', 'Carry cash; many beach shacks don\'t take cards.', 'Book North Goa for nightlife, South Goa for peace.'],
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
      { name: 'Punnamada Houseboat', type: 'Mid-range', price: '₹7,000/night', highlight: 'Overnight houseboat with meals included' },
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
    tips: ['Book houseboats a week ahead in peak season.', 'Mosquito repellent essential at dusk.', 'Most sadya meals are vegetarian — flag ahead for fish/meat.'],
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan, India',
    tagline: 'Forts, deserts, and royal grandeur',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed68a?q=80&w=800',
    bestTime: 'Oct – Mar',
    budget: '₹3,000 – ₹7,000 / day',
    language: 'Hindi, Rajasthani',
    hotels: [
      { name: 'Zostel Jaipur', type: 'Budget', price: '₹600/night', highlight: 'Central location, great rooftop views' },
      { name: 'Alsisar Haveli', type: 'Mid-range', price: '₹5,500/night', highlight: 'Heritage haveli in the heart of Jaipur' },
      { name: 'Rambagh Palace', type: 'Luxury', price: '₹35,000/night', highlight: 'Former royal residence, Taj Hotels' },
    ],
    foodSpots: [
      { name: 'Laxmi Mishthan Bhandar, Jaipur', specialty: 'Rajasthani sweets & thali', mustTry: 'Dal baati churma', priceRange: '₹' },
      { name: 'Spice Court, Jaipur', specialty: 'Traditional Rajasthani cuisine', mustTry: 'Laal maas', priceRange: '₹₹' },
      { name: '1135 AD, Amber Fort', specialty: 'Royal Rajput recipes', mustTry: 'Safed maas', priceRange: '₹₹₹' },
      { name: 'Trio Restaurant, Jodhpur', specialty: 'Rooftop Jodhpur views', mustTry: 'Mirchi bada', priceRange: '₹₹' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Pink City Jaipur', activities: ['Amber Fort morning visit', 'City Palace tour', 'Hawa Mahal and bazaar shopping'] },
      { day: 'Day 2', title: 'Blue City Jodhpur', activities: ['Mehrangarh Fort', 'Clock Tower market lunch', 'Rooftop sunset view'] },
      { day: 'Day 3', title: 'Thar Desert', activities: ['Camel safari at Sam Sand Dunes', 'Desert camp sunset', 'Folk music evening under stars'] },
    ],
    tips: ['Book palace hotels 2-3 months ahead in peak season.', 'Bargain politely at bazaars — it\'s expected.', 'Carry a scarf for temple visits and desert wind.'],
  },
  {
    id: 'munnar',
    name: 'Munnar, Kerala',
    tagline: 'Tea gardens, mist, and mountain silence',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
    bestTime: 'Sep – May',
    budget: '₹1,500 – ₹4,000 / day',
    language: 'Malayalam, Tamil, English',
    hotels: [
      { name: 'Westwood Inn', type: 'Budget', price: '₹1,000/night', highlight: 'Cozy rooms with garden views' },
      { name: 'Blanket Hotel & Spa', type: 'Mid-range', price: '₹6,000/night', highlight: 'Mountain views, in-house spa' },
      { name: 'Windermere Estate', type: 'Luxury', price: '₹15,000/night', highlight: 'Colonial planter bungalow in tea estate' },
    ],
    foodSpots: [
      { name: 'Rapsy Restaurant', specialty: 'Kerala breakfast classics', mustTry: 'Puttu and kadala curry', priceRange: '₹' },
      { name: 'Saravana Bhavan', specialty: 'South Indian vegetarian', mustTry: 'Masala dosa', priceRange: '₹' },
      { name: 'The Tall Trees', specialty: 'Multi-cuisine resort dining', mustTry: 'Grilled trout', priceRange: '₹₹₹' },
      { name: 'Tea Valley Restaurant', specialty: 'Local Kerala food', mustTry: 'Kerala fish curry', priceRange: '₹₹' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Tea estate walks', activities: ['Kolukkumalai tea estate sunrise', 'Tea museum visit', 'Mattupetty Dam lake walk'] },
      { day: 'Day 2', title: 'Hills & wildlife', activities: ['Eravikulam National Park', 'Nilgiri tahr spotting', 'Attukal Waterfalls trek'] },
      { day: 'Day 3', title: 'Markets & spices', activities: ['Munnar town spice market', 'Echo Point visit', 'Top Station viewpoint'] },
    ],
    tips: ['Carry warm clothes — nights dip to 10°C even in summer.', 'Buy fresh tea directly from estates, much cheaper.', 'Leeches during monsoon — wear covered shoes on trails.'],
  },
  {
    id: 'varanasi',
    name: 'Varanasi, India',
    tagline: 'The eternal city where the Ganges never sleeps',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=800',
    bestTime: 'Oct – Mar',
    budget: '₹1,500 – ₹3,500 / day',
    language: 'Hindi, Bhojpuri',
    hotels: [
      { name: 'Stops Hostel', type: 'Budget', price: '₹500/night', highlight: 'Ghat-view rooftop, backpacker favourite' },
      { name: 'Brijrama Palace', type: 'Mid-range', price: '₹8,000/night', highlight: '250-year-old palace converted to boutique hotel' },
      { name: 'Taj Nadesar Palace', type: 'Luxury', price: '₹28,000/night', highlight: 'Former maharaja estate with heritage gardens' },
    ],
    foodSpots: [
      { name: 'Kashi Chaat Bhandar', specialty: 'Varanasi street chaat', mustTry: 'Tamatar chaat', priceRange: '₹' },
      { name: 'Deena Lassi', specialty: 'Famous thick lassi', mustTry: 'Special malai lassi', priceRange: '₹' },
      { name: 'Aadha-Aadha', specialty: 'Fusion café near ghats', mustTry: 'Banarasi paan ice cream', priceRange: '₹₹' },
      { name: 'Pizzeria Vaatika Café', specialty: 'Rooftop Ganges view dining', mustTry: 'Thandai', priceRange: '₹₹' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Ghats & Ganga Aarti', activities: ['Dawn boat ride on the Ganges', 'Dashashwamedh Ghat exploration', 'Evening Ganga Aarti ceremony'] },
      { day: 'Day 2', title: 'Temples & lanes', activities: ['Kashi Vishwanath Temple', 'Narrow lanes of old Varanasi', 'Silk weaving workshop'] },
      { day: 'Day 3', title: 'Sarnath excursion', activities: ['Sarnath Buddhist ruins', 'Sarnath museum', 'Sunset at Assi Ghat'] },
    ],
    tips: ['Sunrise boat rides are the single best experience here — don\'t skip it.', 'Dress modestly near temples.', 'Avoid plastic on or near the ghats — be mindful of the river.'],
  },
  {
    id: 'ladakh',
    name: 'Ladakh, India',
    tagline: 'High passes, blue lakes, and monk country',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    bestTime: 'Jun – Sep',
    budget: '₹3,000 – ₹6,000 / day',
    language: 'Ladakhi, Hindi, English',
    hotels: [
      { name: 'Stok Palace Heritage Hotel', type: 'Budget', price: '₹1,800/night', highlight: 'Royal family heritage stay' },
      { name: 'The Grand Dragon Ladakh', type: 'Mid-range', price: '₹7,500/night', highlight: 'Panoramic Zanskar range views' },
      { name: 'Chamba Camp Thiksey', type: 'Luxury', price: '₹22,000/night', highlight: 'Luxury tented camp by a monastery' },
    ],
    foodSpots: [
      { name: 'Chopsticks, Leh', specialty: 'Tibetan-Ladakhi cuisine', mustTry: 'Thukpa noodle soup', priceRange: '₹₹' },
      { name: 'Bon Appetit, Leh', specialty: 'Multi-cuisine café', mustTry: 'Skyu (Ladakhi pasta)', priceRange: '₹₹' },
      { name: 'Gesmo Restaurant', specialty: 'Local Ladakhi food', mustTry: 'Butter tea and tsampa', priceRange: '₹' },
      { name: 'Lamayuru Restaurant', specialty: 'Tibetan specialties', mustTry: 'Momos with chutney', priceRange: '₹' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Acclimatise in Leh', activities: ['Leh Palace and Shanti Stupa', 'Light walk through Leh market', 'Rest — altitude is real'] },
      { day: 'Day 2', title: 'Monasteries trail', activities: ['Thiksey Monastery at sunrise', 'Hemis Monastery visit', 'Shey Palace ruins'] },
      { day: 'Day 3', title: 'Pangong Lake', activities: ['Drive to Pangong Tso via Chang La pass', 'Lake shore walk', 'Overnight camp by the lake'] },
    ],
    tips: ['Spend 2 full days acclimatising before any high-altitude activity.', 'Carry cash — ATMs are unreliable in remote areas.', 'Inner Line Permit required for Pangong and Nubra — get it in Leh.'],
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
      { name: "L'As du Fallafel", specialty: 'Marais street food', mustTry: 'Falafel special', priceRange: '€' },
      { name: 'Septime', specialty: 'Modern French tasting menu', mustTry: 'Seasonal tasting menu', priceRange: '€€€€' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Classic Paris', activities: ['Louvre morning visit', 'Seine riverside walk', 'Eiffel Tower at sunset'] },
      { day: 'Day 2', title: 'Montmartre & art', activities: ['Sacré-Cœur and Montmartre streets', "Musée d'Orsay afternoon", 'Wine bar in Le Marais'] },
      { day: 'Day 3', title: 'Local Paris', activities: ['Canal Saint-Martin morning coffee', 'Le Marais boutique browsing', 'Picnic at Champ de Mars'] },
    ],
    tips: ['Buy a Navigo Easy card for cheaper metro travel.', 'Many museums free on first Sunday mornings.', 'Restaurants close between lunch and dinner — check hours.'],
  },
]

export function getPackage(query) {
  const q = query.trim().toLowerCase()
  return destinations.find(
    (d) => d.name.toLowerCase().includes(q) || d.id.includes(q)
  )
}

export async function generatePackage(query) {
  const res = await fetch('/.netlify/functions/generate-package', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ destination: query }),
  })
  if (!res.ok) throw new Error('Failed to generate package')
  return res.json()
}
