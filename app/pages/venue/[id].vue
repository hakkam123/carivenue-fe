<script setup>
import { ref, computed } from 'vue'

const isLiked = ref(false)

// Toast State
const toast = ref('')
const showToast = (message) => {
  toast.value = message
  setTimeout(() => toast.value = '', 3000)
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
  showToast(isLiked.value ? 'Venue saved to your wishlist!' : 'Venue removed from wishlist.')
}

const share = () => {
  showToast('Share link copied to clipboard!')
}

const viewGallery = () => {
  showToast('Opening full-screen gallery view...')
}

const seeReviews = () => {
  showToast('Loading all 124 reviews...')
}

// Gallery State
const mainImg = ref('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200')
const sideImgs = ref([
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=800'
])

const swapImage = (index) => {
  const oldMain = mainImg.value
  mainImg.value = sideImgs.value[index]
  sideImgs.value[index] = oldMain
}

const prevImage = () => {
  const lastSide = sideImgs.value.pop()
  sideImgs.value.unshift(mainImg.value)
  mainImg.value = lastSide
}

const nextImage = () => {
  const firstSide = sideImgs.value.shift()
  sideImgs.value.push(mainImg.value)
  mainImg.value = firstSide
}

// Calendar State
const selectedDates = ref([4, 5, 6])
const toggleDate = (day) => {
  if (selectedDates.value.length === 0 || selectedDates.value.length > 1) {
    selectedDates.value = [day]
  } else {
    const start = selectedDates.value[0]
    const end = Math.max(start, day)
    const begin = Math.min(start, day)
    const newDates = []
    for(let i = begin; i <= end; i++) newDates.push(i)
    selectedDates.value = newDates
  }
}

const isDark = (day) => selectedDates.value.length > 0 && selectedDates.value[0] === day
const isLight = (day) => selectedDates.value.includes(day) && selectedDates.value[0] !== day

// Computed Pricing
const checkInStr = computed(() => {
  if (selectedDates.value.length === 0) return '-'
  return `12.${String(selectedDates.value[0]).padStart(2, '0')}.2024`
})

const checkOutStr = computed(() => {
  if (selectedDates.value.length < 2) return '-'
  return `12.${String(selectedDates.value[selectedDates.value.length - 1]).padStart(2, '0')}.2024`
})

const totalDays = computed(() => {
  if (selectedDates.value.length < 2) return 0
  return selectedDates.value.length - 1
})

const totalCost = computed(() => {
  if (totalDays.value === 0) return 0
  return (1450 * totalDays.value) + 150 + 420
})

const bookNow = () => {
  navigateTo('/checkout/1')
}
</script>

<template>
  <div class="venue-page">
    <div class="venue-container">
      
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <span>Venues</span>
        <span class="separator">›</span>
        <span>Brutalist Estates</span>
        <span class="separator">›</span>
        <span class="current">The Concrete Sanctuary</span>
      </nav>
      
      <!-- Image Gallery Content -->
      <div class="gallery-grid">
        <div class="main-image">
          <button class="nav-img-btn prev-btn" @click="prevImage">&lt;</button>
          <img :src="mainImg" alt="Main Venue Image" />
          <button class="nav-img-btn next-btn" @click="nextImage">&gt;</button>
          
          <button class="view-gallery-btn" @click="viewGallery">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            VIEW GALLERY
          </button>
        </div>
        <div class="side-images">
          <div class="side-img-wrapper" v-for="(img, index) in sideImgs" :key="index" @click="swapImage(index)" style="cursor: pointer;">
            <img :src="img" alt="Side Detail" />
          </div>
        </div>
      </div>
      
      <div class="content-layout">
        <!-- Main Content (Left) -->
        <div class="main-content">
          
          <div class="venue-header">
            <div class="title-section">
              <h1>The Concrete Sanctuary</h1>
              <div class="meta-row">
                <div class="location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Oslo, Norway
                </div>
                <div class="rating">
                  <span class="star">★</span>
                  <strong>4.98</strong>
                  <span class="reviews">(124 reviews)</span>
                </div>
              </div>
            </div>
            <div class="actions">
              <button class="icon-btn" @click="share">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              </button>
              <button class="icon-btn heart" :class="{ liked: isLiked }" @click="toggleLike">
                <svg width="18" height="18" viewBox="0 0 24 24" :fill="isLiked ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </div>
          </div>
          
          <section class="about-section">
            <h3>About this Curator's Choice</h3>
            <p>Designed by Sverre Fehn in 1974 and meticulously restored, The Concrete Sanctuary represents the pinnacle of Nordic Brutalism. This light-filled estate blends raw architectural strength with the delicate serenity of the surrounding fjords. Every corner has been curated to provide an immersive experience of space, material, and silence.</p>
            <a href="#" class="read-more">Read more about the history</a>
          </section>
          
          <section class="features-section">
            <h3>Venue Features</h3>
            <div class="features-grid">
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A67C00" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <div class="feat-text">
                  <span>CAPACITY</span>
                  <strong>12 Guests</strong>
                </div>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A67C00" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
                <div class="feat-text">
                  <span>CONNECTIVITY</span>
                  <strong>Giga Fiber</strong>
                </div>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A67C00" stroke-width="2"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>
                <div class="feat-text">
                  <span>CATERING</span>
                  <strong>Chef's Kitchen</strong>
                </div>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A67C00" stroke-width="2"><path d="M4 4h6a4 4 0 0 1 0 8H4Z"/><path d="M4 2v20"/></svg>
                <div class="feat-text">
                  <span>PARKING</span>
                  <strong>8 Spaces</strong>
                </div>
              </div>
            </div>
          </section>
          
          <section class="availability-section">
            <h3>Availability</h3>
            <div class="calendar-card">
              <div class="cal-header">
                <strong>December 2024</strong>
                <div class="cal-nav">
                  <button class="nav-arrow">&lt;</button>
                  <button class="nav-arrow">&gt;</button>
                </div>
              </div>
              <div class="cal-grid">
                <div class="cal-day-name">SU</div>
                <div class="cal-day-name">MO</div>
                <div class="cal-day-name">TU</div>
                <div class="cal-day-name">WE</div>
                <div class="cal-day-name">TH</div>
                <div class="cal-day-name">FR</div>
                <div class="cal-day-name">SA</div>
                
                <div class="cal-day faded" v-for="d in [24,25,26,27,28,29]" :key="'prev'+d">{{ d }}</div>
                <div class="cal-day" @click="toggleDate(1)" :class="{ 'selected-dark': isDark(1), 'selected-light': isLight(1) }">1</div>
                
                <div class="cal-day" v-for="day in 14" :key="'curr'+(day+1)" @click="toggleDate(day+1)" :class="{ 'selected-dark': isDark(day+1), 'selected-light': isLight(day+1) }" style="cursor: pointer;">
                  {{ day + 1 }}
                </div>
              </div>
            </div>
          </section>
          
          <section class="feedback-section">
            <div class="feedback-header">
              <h3>Member Feedback</h3>
              <div class="rating-badge">
                <span class="star">★</span>
                <span>4.98 Rating</span>
              </div>
            </div>
            
            <div class="review-item">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Alexander" class="avatar" />
              <div class="review-content">
                <div class="reviewer-meta">
                  <strong>Alexander Vance</strong>
                  <span>Architectural Designer • Nov 2024</span>
                </div>
                <p>"The way light interacts with the exposed aggregate here is breathtaking. It's not just a venue; it's a profound study in architecture. The host was exceptionally accommodating of our production crew."</p>
              </div>
            </div>
            
            <div class="review-item">
              <img src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="Elena" class="avatar" />
              <div class="review-content">
                <div class="reviewer-meta">
                  <strong>Elena Soros</strong>
                  <span>Event Curator • Oct 2024</span>
                </div>
                <p>"Incredible acoustics for our intimate gallery launch. The flow between the indoor studio and the outdoor terrace is seamless. Highly recommended for elite corporate gatherings."</p>
              </div>
            </div>
            
            <button class="outline-btn" @click="seeReviews">See all 124 reviews</button>
          </section>
          
        </div>
        
        <!-- Sidebar Content (Right) -->
        <div class="sidebar-wrapper">
          <div class="sticky-sidebar">
            <div class="booking-card">
              
              <div class="booking-header">
                <div class="price">
                  <strong>$1,450</strong><span>/ day</span>
                </div>
                <div class="rating">
                  <span class="star">★</span>
                  <strong>4.98</strong>
                </div>
              </div>
              
              <div class="booking-inputs">
                <div class="date-inputs">
                  <div class="date-box border-r">
                    <label>CHECK-IN</label>
                    <div class="val">{{ checkInStr }}</div>
                  </div>
                  <div class="date-box">
                    <label>CHECK-OUT</label>
                    <div class="val">{{ checkOutStr }}</div>
                  </div>
                </div>
                <div class="guests-box border-t">
                  <label>GUESTS</label>
                  <div class="val">4 Guests, 2 Children</div>
                </div>
              </div>
              
              <div v-if="totalDays > 0" class="price-breakdown">
                <div class="price-row">
                  <span>$1,450 x {{ totalDays }} days</span>
                  <span>${{ (1450 * totalDays).toLocaleString() }}</span>
                </div>
                <div class="price-row">
                  <span>Cleaning fee</span>
                  <span>$150</span>
                </div>
                <div class="price-row">
                  <span>Architectural Curator fee</span>
                  <span>$420</span>
                </div>
              </div>
              
              <div class="total-row">
                <span>Total</span>
                <strong>${{ totalCost.toLocaleString() }}</strong>
              </div>
              
              <button class="book-btn" @click="bookNow" :disabled="totalDays === 0" :style="{ opacity: totalDays === 0 ? 0.5 : 1 }">Book Your Stay</button>
              <div class="no-charge-text">You won't be charged yet.</div>
              
            </div>
            
            <div class="guarantee-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B192C" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <p>Our <strong>Curator Guarantee</strong> ensures this venue matches our architectural standards. Fully refundable 48 hours prior to booking.</p>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>

    <!-- Toast Notification -->
    <transition name="toast-fade">
      <div v-if="toast" class="custom-toast">
        {{ toast }}
      </div>
    </transition>

  </div>
</template>

<style scoped>
/* Toast Animation */
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s ease;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) translateX(-50%);
}

.custom-toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #0B192C;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  z-index: 1000;
}

.venue-page {
  font-family: 'Manrope', sans-serif;
  background-color: #ffffff;
  min-height: 100vh;
  padding: 2rem 0 6rem;
  color: #0B192C;
}

.venue-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Breadcrumbs */
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0.6;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
}

.current {
  opacity: 1;
  color: #0B192C;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  height: 480px;
  margin-bottom: 3rem;
  border-radius: 16px;
  overflow: hidden;
}

.main-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-img-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: none;
  font-size: 1.25rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0B192C;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.2s ease;
  z-index: 10;
}

.nav-img-btn:hover {
  transform: translateY(-50%) scale(1.1);
}

.prev-btn { left: 1rem; }
.next-btn { right: 1rem; }

.view-gallery-btn {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  background: white;
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: 100px;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0B192C;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  letter-spacing: 0.05em;
}

.view-gallery-btn:hover {
  transform: translateY(-2px);
}

.side-images {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}

.side-img-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden;
  height: 50%;
}

.side-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Content Layout */
.content-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
}

@media (max-width: 900px) {
  .content-layout {
    grid-template-columns: 1fr;
  }
}

/* Venue Header */
.venue-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #f0f0f5;
}

.title-section h1 {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  font-weight: 500;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  color: #A67C00;
  font-size: 1rem;
}

.reviews {
  opacity: 0.5;
  margin-left: 0.25rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #f0f0f5;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #0B192C;
  transition: all 0.2s ease;
}

.icon-btn:hover {
  background: #f8f8fb;
  border-color: #d0d0df;
}

.icon-btn.heart.liked {
  color: #ff4757;
  border-color: #ff4757;
  background: #fff0f1;
}

/* About Section */
h3 {
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.about-section p {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.7;
  font-weight: 500;
  margin-bottom: 1rem;
}

.read-more {
  font-size: 0.85rem;
  font-weight: 800;
  text-decoration: underline;
  color: #0B192C;
}

section {
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #f0f0f5;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.feature-item {
  background: #f8f8fc;
  padding: 1.25rem;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.feat-text {
  display: flex;
  flex-direction: column;
}

.feat-text span {
  font-size: 0.65rem;
  font-weight: 800;
  opacity: 0.5;
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}

.feat-text strong {
  font-size: 0.95rem;
  font-weight: 700;
}

/* Calendar Card */
.calendar-card {
  border: 1px solid #f0f0f5;
  border-radius: 16px;
  padding: 1.5rem;
  background: white;
}

.cal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.cal-nav {
  display: flex;
  gap: 0.5rem;
}

.nav-arrow {
  background: none;
  border: none;
  font-size: 1.2rem;
  opacity: 0.4;
  cursor: pointer;
}

.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  text-align: center;
}

.cal-day-name {
  font-size: 0.65rem;
  font-weight: 800;
  opacity: 0.4;
  margin-bottom: 0.5rem;
}

.cal-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 8px;
}

.cal-day.faded {
  opacity: 0.2;
}

.cal-day.selected-dark {
  background: #8B6E00;
  color: white;
}

.cal-day.selected-light {
  background: #EAE6D1;
  color: #0B192C;
}

/* Feedback Section */
.feedback-section {
  border-bottom: none;
}

.feedback-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.rating-badge {
  background: #fdf6cc;
  color: #8B6E00;
  padding: 0.3rem 0.6rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.review-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.reviewer-meta {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.reviewer-meta strong {
  font-size: 0.95rem;
  font-weight: 800;
}

.reviewer-meta span {
  font-size: 0.75rem;
  opacity: 0.5;
  font-weight: 500;
}

.review-content p {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.8;
  font-weight: 500;
}

.outline-btn {
  background: white;
  border: 1px solid #0B192C;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
}

.outline-btn:hover {
  background: #0B192C;
  color: white;
}

/* Sidebar Wrapper */
.sidebar-wrapper {
  position: relative;
}

.sticky-sidebar {
  position: sticky;
  top: 100px; /* offset from top */
}

/* Booking Card */
.booking-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
  border: 1px solid #f0f0f5;
  margin-bottom: 1.5rem;
}

.booking-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.5rem;
}

.price strong {
  font-size: 1.75rem;
  font-weight: 800;
}

.price span {
  font-size: 0.9rem;
  opacity: 0.6;
  font-weight: 500;
}

.booking-inputs {
  border: 1px solid #e0e0e5;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.date-inputs {
  display: flex;
}

.date-box {
  flex: 1;
  padding: 0.75rem 1rem;
}

.border-r {
  border-right: 1px solid #e0e0e5;
}

.border-t {
  border-top: 1px solid #e0e0e5;
}

.guests-box {
  padding: 0.75rem 1rem;
}

.booking-inputs label {
  display: block;
  font-size: 0.6rem;
  font-weight: 800;
  opacity: 0.5;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.booking-inputs .val {
  font-size: 0.85rem;
  font-weight: 700;
}

/* Breakdown */
.price-breakdown {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f5;
}

.price-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #0B192C;
}

.price-row span:first-child {
  opacity: 0.7;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.total-row strong {
  font-size: 1.25rem;
  font-weight: 800;
}

/* Book Button */
.book-btn {
  background: linear-gradient(135deg, #8B6E00 0%, #A67C00 100%);
  color: white;
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  font-family: inherit;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 1rem;
}

.book-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(139, 110, 0, 0.3);
}

.no-charge-text {
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.5;
  font-weight: 600;
}

/* Guarantee Box */
.guarantee-box {
  background: #f8f8fb;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.guarantee-box svg {
  flex-shrink: 0;
  opacity: 0.4;
  margin-top: 2px;
}

.guarantee-box p {
  font-size: 0.75rem;
  line-height: 1.5;
  opacity: 0.7;
  font-weight: 500;
}

.guarantee-box strong {
  color: #0B192C;
  font-weight: 800;
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    height: auto;
  }
  .side-images {
    flex-direction: row;
    height: 150px;
  }
}
</style>
