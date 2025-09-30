import axios from 'axios'

// Base URL of your Rails API
const API_BASE = 'https://midnighthaven-api-5.onrender.com'

/**
 * Fetch rental listings from Rails API
 * @param {Object} params - Query params like city, state, zipCode, min/max filters
 * @returns {Promise<Array>} - Array of listing objects
 */
export async function fetchListings(params = {}) {
  try {
    const response = await axios.get(`${API_BASE}/search/listings`, { params })
    return response.data
  } catch (error) {
    console.error('Error fetching listings:', error)
    throw error
  }
}

export async function fetchHomepageCityListings(cities = ['Miami'], state = 'FL', limit = 10) {
  try {
    const requests = cities.map(city =>
      axios.get(`${API_BASE}/listings/homepage_city_listings`, {
        params: { city, state, limit }
      })
    )

    const responses = await Promise.all(requests)
    return responses.map(res => res.data)  // each entry: { city, listings }
  } catch (error) {
    console.error('Error fetching homepage city listings:', error)
    throw error
  }
}

export async function fetchHomepageFeaturedListings() {
  try {
    const response = await axios.get(`${API_BASE}/listings/homepage_featured`)
    return response.data  // { type: 'featured', listings: [...] }
  } catch (error) {
    console.error('Error fetching featured listings:', error)
    throw error
  }
}

export async function fetchSingleListing(id) {
  if (!id) throw new Error('Listing ID is required')
  try {
    const response = await axios.get(`${API_BASE}/listings/rentals/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching single listing:', error)
    throw error
  }
}