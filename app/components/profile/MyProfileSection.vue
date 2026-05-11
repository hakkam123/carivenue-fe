<template>
  <div class="my-profile-section">
    <div class="section-header">
      <h2 class="section-title">Personal Information</h2>
      <button class="toggle-edit-btn" @click="isEditing = !isEditing">
        <template v-if="!isEditing">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit
        </template>
        <template v-else>Cancel</template>
      </button>
    </div>

    <div class="info-grid">
      <div class="info-card" v-for="field in personalFields" :key="field.key">
        <label class="field-label">{{ field.label }}</label>
        <template v-if="isEditing && field.editable">
          <input
            v-model="editData[field.key]"
            :type="field.type || 'text'"
            class="field-input"
            :placeholder="field.placeholder"
          />
        </template>
        <template v-else>
          <p class="field-value">{{ user[field.key] || '—' }}</p>
        </template>
      </div>
    </div>

    <div v-if="isEditing" class="save-bar">
      <button class="btn-save" @click="handleSave">Save Changes</button>
    </div>

    <!-- Seller: Business Information -->
    <template v-if="user.role === 'host'">
      <div class="section-header" style="margin-top: 2.5rem;">
        <h2 class="section-title">Business Information</h2>
      </div>
      <div class="info-grid">
        <div class="info-card" v-for="field in businessFields" :key="field.key">
          <label class="field-label">{{ field.label }}</label>
          <template v-if="isEditing && field.editable">
            <textarea
              v-if="field.type === 'textarea'"
              v-model="editData[field.key]"
              class="field-input field-textarea"
              :placeholder="field.placeholder"
              rows="3"
            ></textarea>
            <input
              v-else
              v-model="editData[field.key]"
              :type="field.type || 'text'"
              class="field-input"
              :placeholder="field.placeholder"
            />
          </template>
          <template v-else>
            <p class="field-value">{{ user[field.key] || '—' }}</p>
          </template>
        </div>
      </div>
      <div v-if="isEditing" class="save-bar">
        <button class="btn-save" @click="handleSave">Save Changes</button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const props = defineProps({
  user: { type: Object, required: true }
})

const emit = defineEmits(['save'])
const isEditing = ref(false)

const editData = reactive({ ...props.user })

watch(() => props.user, (newVal) => {
  Object.assign(editData, newVal)
}, { deep: true })

const personalFields = [
  { key: 'full_name', label: 'Full Name', editable: true, placeholder: 'Your full name' },
  { key: 'email', label: 'Email Address', editable: false },
  { key: 'phone', label: 'Phone Number', editable: true, type: 'tel', placeholder: '+62 xxx' },
  { key: 'address', label: 'Address', editable: true, placeholder: 'Street address' },
  { key: 'city', label: 'City', editable: true, placeholder: 'City name' },
]

const businessFields = [
  { key: 'business_name', label: 'Business Name', editable: true, placeholder: 'Your business name' },
  { key: 'bio', label: 'Business Bio', editable: true, type: 'textarea', placeholder: 'Tell us about your venue business...' },
]

const handleSave = () => {
  emit('save', { ...editData })
  isEditing.value = false
}
</script>

<style scoped>
.my-profile-section {
  animation: fadeInUp 0.4s ease forwards;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0B192C;
}

.toggle-edit-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border: 1.5px solid #E2E8F0;
  background: white;
  border-radius: 10px;
  font-family: 'Manrope', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748B;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toggle-edit-btn:hover {
  border-color: #8B6E00;
  color: #8B6E00;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.info-card {
  background: #F8FAFC;
  border: 1px solid #F0F0F5;
  border-radius: 14px;
  padding: 1.25rem;
  transition: all 0.2s ease;
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

.field-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #0B192C;
  margin: 0;
}

.field-input {
  width: 100%;
  padding: 0.65rem 0.85rem;
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

.field-textarea {
  resize: vertical;
  min-height: 80px;
}

.save-bar {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.25rem;
}

.btn-save {
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
}

.btn-save:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(139, 110, 0, 0.25);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
