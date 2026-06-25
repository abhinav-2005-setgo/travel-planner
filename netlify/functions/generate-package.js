export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 })
  }

  try {
    const { destination } = await req.json()

    if (!destination || !destination.trim()) {
      return new Response(JSON.stringify({ error: 'Destination is required' }), { status: 400 })
    }

    const prompt = `You are a travel expert. Create a detailed travel package for: ${destination}

Respond ONLY in valid JSON, no markdown, no preamble, no code fences. Schema:
{
  "name": "Full destination name",
  "tagline": "One evocative line about the destination",
  "bestTime": "Best months to visit",
  "budget": "Estimated daily budget range with currency",
  "language": "Local language(s)",
  "hotels": [
    {"name":"Hotel name","type":"Budget","price":"Price per night","highlight":"One key feature"},
    {"name":"Hotel name","type":"Mid-range","price":"Price per night","highlight":"One key feature"},
    {"name":"Hotel name","type":"Luxury","price":"Price per night","highlight":"One key feature"}
  ],
  "foodSpots": [
    {"name":"Restaurant/spot name","specialty":"What it is known for","mustTry":"Dish name","priceRange":"$/$$/$$$"}
  ],
  "itinerary": [
    {"day":"Day 1","title":"Theme of day","activities":["Activity 1","Activity 2","Activity 3"]}
  ],
  "tips": ["Tip 1","Tip 2","Tip 3"]
}

Include exactly 3 hotels (Budget, Mid-range, Luxury), 4 food spots, a 3-day itinerary, and 3 travel tips. Be specific and realistic.`

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7 }
        }),
      }
    )

    if (!geminiRes.ok) {
      const errText = await geminiRes.text()
      console.error('Gemini API error:', errText)
      return new Response(JSON.stringify({ error: 'Failed to generate package' }), { status: 502 })
    }

    const data = await geminiRes.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
    const clean = text.replace(/```json|```/g, '').trim()
    const pkg = JSON.parse(clean)

    return new Response(JSON.stringify(pkg), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Function error:', err)
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
  }
}
