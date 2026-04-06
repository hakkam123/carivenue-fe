<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  venues: {
    type: Array,
    default: () => []
  }
})

const mapContainer = ref(null)
let map = null
let markers = []

onMounted(async () => {
  // Dynamically import leaflet to avoid SSR issues
  const L = (await import('leaflet')).default
  import('leaflet/dist/leaflet.css')
  
  if (!mapContainer.value) return
  
  // Default location: London (as per the design) or get user location
  const defaultPos = [51.505, -0.09]
  
  map = L.map(mapContainer.value).setView(defaultPos, 12)
  
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map)

  // Custom Icon for Venues
  const venueIcon = L.divIcon({
    className: 'custom-venue-marker',
    html: `<div style="background-color: #0B192C; color: white; padding: 4px 8px; border-radius: 8px; font-weight: bold; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); font-size: 12px; white-space: nowrap;">VENUE</div>`,
    iconSize: [60, 30],
    iconAnchor: [30, 30]
  })
  
  const myLocIcon = L.divIcon({
    className: 'custom-myloc-marker',
    html: `<div style="background-color: #A67C00; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11]
  })

  // Try getting user location (Lokasi Saya)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        map.setView([latitude, longitude], 13)
        L.marker([latitude, longitude], { icon: myLocIcon })
          .addTo(map)
          .bindPopup('<b>Lokasi Saya</b>')
          .openPopup()
      },
      () => {
        // Handle error quietly
      }
    )
  }

  updateMarkers(L, venueIcon)
})

watch(() => props.venues, () => {
  if (map) {
    import('leaflet').then((leafletModule) => {
      const L = leafletModule.default
      const venueIcon = L.divIcon({
        className: 'custom-venue-marker',
        html: `<div style="background-color: #0B192C; color: white; padding: 4px 8px; border-radius: 8px; font-weight: bold; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); font-size: 12px; white-space: nowrap;">VENUE</div>`,
        iconSize: [60, 30],
        iconAnchor: [30, 30]
      })
      updateMarkers(L, venueIcon)
    })
  }
}, { deep: true })

function updateMarkers(L, icon) {
  // Clear old markers
  markers.forEach(m => map.removeLayer(m))
  markers = []
  
  // Base coordinates mapping for mockup since we don't have lat/long in data
  const mockCoords = {
    1: [51.5714, -0.1448], // Highgate
    2: [51.5229, -0.0777], // Shoreditch
    3: [51.5101, -0.1442], // Mayfair
    4: [51.5033, -0.1195]  // Southbank
  }

  props.venues.forEach(venue => {
    const coords = mockCoords[venue.id] || [51.505 + (Math.random()-0.5)*0.1, -0.09 + (Math.random()-0.5)*0.1]
    const marker = L.marker(coords, { icon })
      .addTo(map)
      .bindPopup(`<b>${venue.title}</b><br/>${venue.price}`)
    markers.push(marker)
  })
}
</script>

<template>
  <div class="map-wrapper" ref="mapContainer"></div>
</template>

<style scoped>
.map-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  z-index: 1; /* Keep map below navbar */
}
</style>
