<script setup>
import { ref, reactive } from 'vue'

useHead({
  title: 'Add New Venue — CariVenue',
  meta: [{ name: 'description', content: 'List your venue on CariVenue and start hosting.' }]
})

const form = reactive({
  venue_name: '',
  venue_category: '',
  venue_location: '',
  city: '',
  price_per_day: '',
  capacity: '',
  description: '',
})

const categories = [
  'Gallery', 'Industrial', 'Historic', 'Rooftop', 'Modern', 'Garden',
  'Ballroom', 'Outdoor', 'Villa', 'Conference', 'Studio', 'Other'
]

const imagePreviewUrls = ref([])
const isSubmitting = ref(false)

const handleImageUpload = (event) => {
  const files = event.target.files
  for (let i = 0; i < files.length && imagePreviewUrls.value.length < 5; i++) {
    const url = URL.createObjectURL(files[i])
    imagePreviewUrls.value.push(url)
  }
}

const removeImage = (index) => {
  imagePreviewUrls.value.splice(index, 1)
}

const handleSubmit = async () => {
  isSubmitting.value = true
  // Mock submit
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  alert('Venue submitted successfully! (mock)')
  navigateTo('/profile')
}
</script>

<template>
  <div class="add-venue-page">
    <div class="page-container">
      <!-- Back Link -->
      <button class="back-link" @click="navigateTo('/profile')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
        Back to Profile
      </button>

      <!-- Page Header -->
      <div class="page-header">
        <h1 class="page-title">Add New Venue</h1>
        <p class="page-subtitle">List your space on CariVenue and start hosting extraordinary events.</p>
      </div>

      <form @submit.prevent="handleSubmit" class="venue-form">
        <!-- Basic Info -->
        <div class="form-section">
          <h2 class="form-section-title">Basic Information</h2>
          <div class="form-grid">
            <div class="form-field full">
              <label class="field-label">Venue Name</label>
              <input v-model="form.venue_name" type="text" class="field-input" placeholder="e.g. The Obsidian Pavilion" required />
            </div>
            <div class="form-field">
              <label class="field-label">Category</label>
              <select v-model="form.venue_category" class="field-input field-select" required>
                <option value="" disabled>Select category</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </div>
            <div class="form-field">
              <label class="field-label">Capacity (guests)</label>
              <input v-model="form.capacity" type="number" class="field-input" placeholder="e.g. 150" required />
            </div>
            <div class="form-field">
              <label class="field-label">Location</label>
              <input v-model="form.venue_location" type="text" class="field-input" placeholder="Street address" required />
            </div>
            <div class="form-field">
              <label class="field-label">City</label>
              <input v-model="form.city" type="text" class="field-input" placeholder="e.g. Jakarta" required />
            </div>
            <div class="form-field">
              <label class="field-label">Price per Day ($)</label>
              <input v-model="form.price_per_day" type="number" class="field-input" placeholder="e.g. 2500" required />
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="form-section">
          <h2 class="form-section-title">Description</h2>
          <div class="form-field full">
            <label class="field-label">Venue Description</label>
            <textarea v-model="form.description" class="field-input field-textarea" rows="5" placeholder="Describe what makes your venue special..." required></textarea>
          </div>
        </div>

        <!-- Images -->
        <div class="form-section">
          <h2 class="form-section-title">Venue Photos</h2>
          <p class="upload-hint">Upload up to 5 high-quality photos of your venue. The first image will be used as the cover.</p>
          <div class="image-upload-area">
            <div v-for="(url, index) in imagePreviewUrls" :key="index" class="preview-card">
              <img :src="url" alt="Preview" class="preview-img" />
              <button type="button" class="remove-img-btn" @click="removeImage(index)">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <span v-if="index === 0" class="cover-label">COVER</span>
            </div>

            <label v-if="imagePreviewUrls.length < 5" class="upload-card">
              <input type="file" accept="image/*" multiple @change="handleImageUpload" class="hidden-input" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <span>Add Photo</span>
            </label>
          </div>
        </div>

        <!-- Submit -->
        <div class="form-actions">
          <button type="button" class="btn-cancel" @click="navigateTo('/profile')">Cancel</button>
          <button type="submit" class="btn-submit" :disabled="isSubmitting">
            <svg v-if="isSubmitting" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            <span v-else>Submit Venue</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.add-venue-page {
  font-family: 'Manrope', sans-serif;
  background: white;
  min-height: 100vh;
  padding: 2rem 0 4rem;
}

.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: none;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748B;
  cursor: pointer;
  padding: 0;
  margin-bottom: 2rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #8B6E00;
}

.page-header {
  margin-bottom: 2.5rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 800;
  color: #0B192C;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem;
}

.page-subtitle {
  font-size: 0.95rem;
  color: #94A3B8;
  font-weight: 500;
  margin: 0;
}

.venue-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-section {
  background: #F8FAFC;
  border: 1px solid #F0F0F5;
  border-radius: 16px;
  padding: 1.75rem;
}

.form-section-title {
  font-size: 1rem;
  font-weight: 800;
  color: #0B192C;
  margin: 0 0 1.25rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-field.full {
  grid-column: 1 / -1;
}

.field-label {
  display: block;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94A3B8;
  margin-bottom: 0.5rem;
}

.field-input {
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1.5px solid #E2E8F0;
  border-radius: 10px;
  background: white;
  font-family: 'Manrope', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #0B192C;
  transition: all 0.2s ease;
}

.field-input:focus {
  outline: none;
  border-color: #8B6E00;
  box-shadow: 0 0 0 3px rgba(139, 110, 0, 0.08);
}

.field-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

.field-textarea {
  resize: vertical;
  min-height: 120px;
}

.upload-hint {
  font-size: 0.82rem;
  color: #94A3B8;
  font-weight: 500;
  margin: -0.5rem 0 1rem;
}

.image-upload-area {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.preview-card {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-img-btn {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
}

.cover-label {
  position: absolute;
  bottom: 0.4rem;
  left: 0.4rem;
  padding: 0.15rem 0.5rem;
  background: #8B6E00;
  color: white;
  border-radius: 4px;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.upload-card {
  width: 120px;
  height: 120px;
  border: 2px dashed #E2E8F0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.upload-card span {
  font-size: 0.72rem;
  font-weight: 700;
  color: #94A3B8;
}

.upload-card:hover {
  border-color: #8B6E00;
  background: #FFFBEB;
}

.hidden-input {
  display: none;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.btn-cancel {
  padding: 0.75rem 1.5rem;
  background: white;
  border: 1.5px solid #E2E8F0;
  border-radius: 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748B;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-cancel:hover {
  border-color: #CBD5E1;
  color: #0B192C;
}

.btn-submit {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #8B6E00 0%, #A67C00 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(139, 110, 0, 0.25);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column;
  }

  .btn-cancel, .btn-submit {
    width: 100%;
    justify-content: center;
  }
}
</style>
