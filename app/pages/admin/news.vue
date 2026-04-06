<script setup>
definePageMeta({
  layout: 'admin'
})

const posts = [
  { id: 1, title: 'Summer Solstice Architecture Trends', date: 'Jun 14, 2024', status: 'PUBLISHED', author: 'Architectural Digest' },
  { id: 2, title: 'Top 10 Ballroom Venues in Jakarta', date: 'Jun 10, 2024', status: 'DRAFT', author: 'CariVenue Team' },
  { id: 3, title: 'Sustainable Meeting Spaces for 2025', date: 'May 28, 2024', status: 'PUBLISHED', author: 'Green Horizon' }
]

const isComposing = ref(false)
const editorContent = ref('')

onMounted(() => {
  if (process.client && window.tinymce) {
    window.tinymce.init({
      selector: '#news-editor',
      height: 400,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace vertical scroll wordcount visualblocks code fullscreen',
        'insertdatetime media table paste code help'
      ],
      toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
      content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 16px; color: #0B192C; }',
      setup: (editor) => {
        editor.on('change', () => {
          editorContent.value = editor.getContent()
        })
      }
    })
  }
})

onUnmounted(() => {
  if (process.client && window.tinymce) {
    window.tinymce.remove('#news-editor')
  }
})

const startCompose = () => {
  isComposing.value = true
}

const cancelCompose = () => {
  isComposing.value = false
}

const savePost = () => {
  alert('Post saved to draft successfully!')
  isComposing.value = false
}
</script>

<template>
  <div class="news-page">
    <div class="page-header">
      <div class="header-left">
        <h1>Newsroom</h1>
        <p>Publish architectural stories and industry insights.</p>
      </div>
      <div class="header-right">
        <button v-if="!isComposing" class="compose-btn" @click="startCompose">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          Compose Post
        </button>
        <div v-else class="compose-actions">
           <button class="secondary-btn" @click="cancelCompose">Cancel</button>
           <button class="primary-btn" @click="savePost">Save Draft</button>
           <button class="publish-btn">Publish Now</button>
        </div>
      </div>
    </div>

    <div v-if="!isComposing" class="news-list card" v-motion-fade-visible-once>
      <table class="news-table">
        <thead>
          <tr>
            <th>TITLE</th>
            <th>DATE</th>
            <th>AUTHOR</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td class="title-cell">{{ post.title }}</td>
            <td class="date-cell">{{ post.date }}</td>
            <td class="author-cell">{{ post.author }}</td>
            <td>
              <span class="status-badge" :class="post.status.toLowerCase()">{{ post.status }}</span>
            </td>
            <td>
              <button class="icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-show="isComposing" class="compose-view card" v-motion-slide-visible-once-bottom>
      <div class="compose-header">
        <input type="text" placeholder="Enter article title..." class="title-input" />
        <div class="category-select">
            <span>Category:</span>
            <select>
                <option>Architecture</option>
                <option>Venues</option>
                <option>Corporate</option>
                <option>Interiors</option>
            </select>
        </div>
      </div>
      <div class="editor-wrapper">
        <textarea id="news-editor"></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.header-left h1 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0B192C;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.header-left p {
  font-size: 1rem;
  font-weight: 600;
  color: #B0B0B0;
}

.compose-btn {
  background-color: #3A7DE0;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(58, 125, 224, 0.2);
  transition: all 0.2s ease;
}

.compose-actions {
    display: flex;
    gap: 1rem;
}

.compose-actions button {
    padding: 0.65rem 1.25rem;
    border-radius: 10px;
    font-family: inherit;
    font-size: 0.85rem;
    font-weight: 800;
    cursor: pointer;
}

.secondary-btn {
    background: transparent;
    border: 1px solid #EEEEEE;
    color: #B0B0B0;
}

.primary-btn {
    background: #F8F9FA;
    border: 1px solid #EEEEEE;
    color: #0B192C;
}

.publish-btn {
    background: #0B192C;
    color: white;
    border: none;
}

.card {
  background-color: white;
  border-radius: 20px;
  border: 1px solid #EEEEEE;
  padding: 2rem;
}

.news-table {
  width: 100%;
  border-collapse: collapse;
}

.news-table th {
  text-align: left;
  font-size: 0.75rem;
  font-weight: 800;
  color: #B0B0B0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #EEEEEE;
}

.news-table td {
  padding: 1.5rem 0;
  border-bottom: 1px solid #EEEEEE;
  font-size: 0.95rem;
  font-weight: 600;
  color: #0B192C;
}

.title-cell {
    font-weight: 800;
}

.status-badge {
    font-size: 0.65rem;
    font-weight: 800;
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
}

.status-published { background-color: #E6F8EF; color: #2DCE89; }
.status-draft { background-color: #F8F9FA; color: #B0B0B0; border: 1px solid #EEEEEE; }

.icon-btn {
    background: none;
    border: none;
    color: #3A7DE0;
    cursor: pointer;
}

.compose-view {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.compose-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.title-input {
    flex: 1;
    border: none;
    font-size: 1.5rem;
    font-weight: 800;
    color: #0B192C;
    outline: none;
}

.title-input::placeholder {
    color: #EEEEEE;
}

.category-select {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
    font-weight: 700;
    color: #B0B0B0;
}

.category-select select {
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #EEEEEE;
    font-family: inherit;
    font-weight: 700;
}

.editor-wrapper {
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #EEEEEE;
}
</style>
