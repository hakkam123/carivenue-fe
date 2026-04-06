<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  initialFilters: {
    type: Object,
    default: () => ({
      location: '',
      capacity: '150-500',
      eventTypes: ['Corporate Gala']
    })
  }
})

const emit = defineEmits(['update:filters'])

const form = ref({
  location: props.initialFilters.location,
  capacity: props.initialFilters.capacity,
  eventTypes: [...props.initialFilters.eventTypes]
})

const eventTypeOptions = [
  'Corporate Gala',
  'Private Wedding',
  'Art Exhibition',
  'Film Production'
]

const capacityOptions = [
  '1-50',
  '50-150',
  '150-500',
  '500+'
]

const clearAll = () => {
  form.value = {
    location: '',
    capacity: '',
    eventTypes: []
  }
}

watch(form, (newVal) => {
  emit('update:filters', newVal)
}, { deep: true })
</script>

<template>
  <aside class="sidebar-filter">
    <div class="filter-header">
      <h2>Refine Search</h2>
      <button class="clear-btn" @click="clearAll">CLEAR ALL</button>
    </div>
    
    <div class="filter-group">
      <label>LOCATION</label>
      <div class="input-with-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <input type="text" placeholder="City or Region" class="filter-input" v-model="form.location" />
      </div>
    </div>
    
    <div class="filter-group">
      <label>PRICE PER EVENT</label>
      <div class="slider-container">
        <div class="slider-track">
          <div class="slider-range"></div>
        </div>
        <div class="slider-labels">
          <span>$500</span>
          <span>$15,000+</span>
        </div>
      </div>
    </div>
    
    <div class="filter-group">
      <label>CAPACITY</label>
      <div class="capacity-grid">
        <button 
          v-for="cap in capacityOptions" 
          :key="cap"
          class="cap-btn" 
          :class="{ active: form.capacity === cap }"
          @click="form.capacity = cap"
        >
          {{ cap }}
        </button>
      </div>
    </div>
    
    <div class="filter-group">
      <label>EVENT TYPE</label>
      <div class="checkbox-list">
        <label 
          v-for="type in eventTypeOptions" 
          :key="type" 
          class="checkbox-item"
        >
          <input 
            type="checkbox" 
            :value="type" 
            v-model="form.eventTypes" 
          />
          <span class="checkbox-box"></span>
          {{ type }}
        </label>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-filter {
  font-family: 'Manrope', sans-serif;
  width: 100%;
  padding-right: 2rem;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.filter-header h2 {
  font-size: 1rem;
  font-weight: 800;
  color: #0B192C;
}

.clear-btn {
  background: none;
  border: none;
  color: #A67C00;
  font-size: 0.75rem;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: 0.05em;
}

.filter-group {
  margin-bottom: 2.5rem;
}

.filter-group label {
  display: block;
  font-size: 0.75rem;
  font-weight: 800;
  color: #0B192C;
  opacity: 0.5;
  margin-bottom: 1.25rem;
  letter-spacing: 0.05em;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  color: #0B192C;
  opacity: 0.4;
}

.filter-input {
  width: 100%;
  background: #f8f8fb;
  border: 1px solid #f0f0f0;
  padding: 0.85rem 1rem 0.85rem 2.8rem;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  color: #0B192C;
  outline: none;
  transition: border-color 0.3s ease;
}

.filter-input:focus {
  border-color: #A67C00;
}

/* Price Slider Mock */
.slider-container {
  padding: 0 0.5rem;
}

.slider-track {
  height: 2px;
  background: #e0e0e0;
  position: relative;
  margin-bottom: 1rem;
}

.slider-range {
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  background: #A67C00;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 700;
  color: #0B192C;
  opacity: 0.9;
}

/* Capacity Grid */
.capacity-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.cap-btn {
  background: white;
  border: 1px solid #f0f0f0;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #0B192C;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cap-btn:hover {
  border-color: #A67C00;
}

.cap-btn.active {
  background: #0B192C;
  color: white;
  border-color: #0B192C;
}

/* Checkboxes */
.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #0B192C;
  cursor: pointer;
  opacity: 0.8;
}

.checkbox-item input {
  display: none;
}

.checkbox-box {
  display: inline-block;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border: 1.5px solid #d0d0d0;
  border-radius: 4px;
  position: relative;
  transition: all 0.2s ease;
}

.checkbox-item input:checked + .checkbox-box {
  background: #A67C00;
  border-color: #A67C00;
}

.checkbox-item input:checked + .checkbox-box::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
