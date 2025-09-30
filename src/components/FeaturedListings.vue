<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">City Listings</h1>

    <div v-if="loading" class="text-gray-500">Loading listings...</div>

    <div v-else>
      <div v-for="cityBlock in cityListings" :key="cityBlock.city" class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">{{ cityBlock.city }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="listing in cityBlock.listings"
            :key="listing.id"
            class="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <div class="font-semibold text-lg">{{ listing.formattedAddress }}</div>
            <div class="text-gray-600">{{ listing.city }}, {{ listing.state }} {{ listing.zipCode }}</div>
            <div class="mt-2 flex flex-wrap gap-4 text-gray-700">
              <span>🏠 {{ listing.bedrooms }} bd / {{ listing.bathrooms }} ba</span>
              <span>📐 {{ listing.squareFootage }} sqft</span>
              <span class="font-bold">${{ listing.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
  </div>
</template>

<script>
import { fetchHomepageCityListings } from '../services/listings'

export default {
  data() {
    return {
      cityListings: [],
      loading: true,
      error: null
    }
  },
  async mounted() {
    try {
      // Example: fetch listings for Miami and Orlando
      this.cityListings = await fetchHomepageCityListings(['Miami', 'Orlando'])
    } catch (e) {
      console.error(e)
      this.error = 'Failed to load listings. Please try again.'
    } finally {
      this.loading = false
    }
  }
}
</script>
