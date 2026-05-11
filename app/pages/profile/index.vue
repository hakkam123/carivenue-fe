<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'My Profile — CariVenue',
  meta: [{ name: 'description', content: 'Manage your CariVenue profile, bookings, and venues.' }]
})

// Read user data from cookie (matches existing auth pattern)
const userCookie = useCookie('user')
const parsedUser = (() => {
  try { return JSON.parse(userCookie.value || '{}') }
  catch { return {} }
})()

// Determine role: 'host' or 'user'
const userRole = computed(() => parsedUser.role || demoMode.value)

// Demo mode toggle for testing without login
const demoMode = ref('user')
const isLoggedIn = computed(() => !!parsedUser.role)

// --- MOCK DATA ---
const buyerUser = {
  id: 'u-001',
  full_name: 'Sarah Anderson',
  email: 'sarah.anderson@email.com',
  phone: '+62 812 3456 7890',
  avatar: 'https://i.pravatar.cc/300?u=sarah-anderson',
  address: 'Jl. Sudirman No. 42',
  city: 'Jakarta',
  role: 'user',
  created_at: '2024-03-15',
}

const sellerUser = {
  id: 'u-002',
  full_name: 'Marcus Chen',
  email: 'marcus@premiumvenues.co',
  phone: '+62 821 9876 5432',
  avatar: 'https://i.pravatar.cc/300?u=marcus-chen',
  address: 'Jl. Gatot Subroto No. 88',
  city: 'Bandung',
  role: 'host',
  business_name: 'Premium Venues Co.',
  bio: 'Curating extraordinary event spaces across Indonesia since 2019. We specialize in heritage buildings and modern architectural masterpieces.',
  total_venues: 5,
  total_bookings: 127,
  rating: 4.9,
  created_at: '2023-08-20',
}

const buyerOrders = [
  { booking_id: 'B-1001', venue_name: 'The Obsidian Pavilion', venue_image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400', check_in: 'Jun 15, 2025', check_out: 'Jun 17, 2025', guests: 80, total_price: 5200, status: 'confirmed', booked_at: 'May 28, 2025' },
  { booking_id: 'B-1002', venue_name: 'Somerset Hall', venue_image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400', check_in: 'Apr 10, 2025', check_out: 'Apr 10, 2025', guests: 50, total_price: 5200, status: 'completed', booked_at: 'Mar 20, 2025' },
  { booking_id: 'B-1003', venue_name: 'Skyline Atrium', venue_image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400', check_in: 'Jul 1, 2025', check_out: 'Jul 2, 2025', guests: 150, total_price: 8150, status: 'pending', booked_at: 'Jun 8, 2025' },
]

const sellerOrders = [
  { booking_id: 'B-2001', venue_name: 'The Concrete Sanctuary', venue_image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400', check_in: 'Jun 20, 2025', check_out: 'Jun 22, 2025', guests: 12, total_price: 3470, status: 'confirmed', booked_at: 'Jun 1, 2025', customer_name: 'Elena Soros' },
  { booking_id: 'B-2002', venue_name: 'Brick & Beam Loft', venue_image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400', check_in: 'May 15, 2025', check_out: 'May 15, 2025', guests: 200, total_price: 1800, status: 'completed', booked_at: 'Apr 28, 2025', customer_name: 'James Park' },
  { booking_id: 'B-2003', venue_name: 'The Concrete Sanctuary', venue_image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400', check_in: 'Jul 8, 2025', check_out: 'Jul 10, 2025', guests: 8, total_price: 4340, status: 'pending', booked_at: 'Jun 10, 2025', customer_name: 'Sarah Anderson' },
  { booking_id: 'B-2004', venue_name: 'Brick & Beam Loft', venue_image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400', check_in: 'Mar 1, 2025', check_out: 'Mar 1, 2025', guests: 100, total_price: 1800, status: 'cancelled', booked_at: 'Feb 15, 2025', customer_name: 'Alex Kim' },
]

const wishlistVenues = [
  { id: 1, title: 'The Obsidian Pavilion', price: '$2,500', rating: 4.9, location: 'Highgate, London', tags: ['GALLERY', '150 CAP'], image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Somerset Hall', price: '$5,200', rating: 5.0, location: 'Mayfair, London', tags: ['HISTORIC', '100 CAP'], image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'The Glasshouse', price: '$4,100', rating: 4.6, location: 'Kensington, London', tags: ['MODERN', '120 CAP'], image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
]

const sellerVenues = [
  { venue_id: 'v-001', venue_name: 'The Concrete Sanctuary', venue_category: 'Brutalist Estate', venue_location: 'Oslo, Norway', price_per_day: 1450, capacity: 12, status: 'active', images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'] },
  { venue_id: 'v-002', venue_name: 'Brick & Beam Loft', venue_category: 'Industrial', venue_location: 'Shoreditch, London', price_per_day: 1800, capacity: 300, status: 'active', images: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800'] },
  { venue_id: 'v-003', venue_name: 'Heritage Ballroom', venue_category: 'Historic', venue_location: 'Menteng, Jakarta', price_per_day: 2200, capacity: 200, status: 'inactive', images: ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800'] },
]

// --- STATE ---
const activeTab = ref('profile')
const currentUser = computed(() => userRole.value === 'host' ? sellerUser : buyerUser)
const currentOrders = computed(() => userRole.value === 'host' ? sellerOrders : buyerOrders)

const handleSaveProfile = (data) => {
  console.log('Profile save:', data)
  alert('Profile updated successfully! (mock)')
}

const handleEditFromHeader = () => {
  activeTab.value = 'profile'
}
</script>

<template>
  <div class="profile-page">
    <!-- Demo Mode Switcher (for testing) -->
    <div v-if="!isLoggedIn" class="demo-bar">
      <span class="demo-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Demo Mode
      </span>
      <div class="demo-pills">
        <button :class="['demo-pill', { active: demoMode === 'user' }]" @click="demoMode = 'user'">Buyer</button>
        <button :class="['demo-pill', { active: demoMode === 'host' }]" @click="demoMode = 'host'">Seller / Host</button>
      </div>
    </div>

    <!-- Profile Header -->
    <ProfileHeader :user="currentUser" @edit="handleEditFromHeader" />

    <!-- Profile Tabs -->
    <ProfileTabs :role="userRole" :activeTab="activeTab" @tab-change="activeTab = $event" />

    <!-- Tab Content -->
    <div class="tab-content">
      <ProfileMyProfileSection v-if="activeTab === 'profile'" :user="currentUser" @save="handleSaveProfile" />
      <ProfileMyOrdersSection v-else-if="activeTab === 'orders'" :orders="currentOrders" :role="userRole" />
      <ProfileWishlistSection v-else-if="activeTab === 'wishlist'" :venues="wishlistVenues" />
      <ProfileMyVenuesSection v-else-if="activeTab === 'venues'" :venues="sellerVenues" />
      <ProfileAccountSettingsSection v-else-if="activeTab === 'settings'" />
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  font-family: 'Manrope', sans-serif;
  background: white;
  min-height: 100vh;
  padding-bottom: 4rem;
}

/* Demo Mode Bar */
.demo-bar {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.demo-label {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  font-weight: 800;
  color: #A67C00;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.demo-pills {
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  background: #F1F5F9;
  border-radius: 10px;
}

.demo-pill {
  padding: 0.45rem 1rem;
  border: none;
  background: transparent;
  font-family: 'Manrope', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: #64748B;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.demo-pill.active {
  background: white;
  color: #8B6E00;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

/* Tab Content Area */
.tab-content {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
