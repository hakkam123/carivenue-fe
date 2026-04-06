<script setup>
definePageMeta({
  layout: 'admin'
})

const reviews = [
  { id: 1, user: 'Julian Deutch', venue: 'The Glass Pavilion', rating: 5, date: 'Jun 14, 2024', comment: 'Absolutely stunning architecture. The natural light is unmatched.', status: 'PENDING' },
  { id: 2, user: 'Alana Rossi', venue: 'Skyline Loft', rating: 4, date: 'Jun 13, 2024', comment: 'Great view, but the acoustics could be better for large presentations.', status: 'APPROVED' },
  { id: 3, user: 'Marcus Sterling', venue: 'The Grand Ballroom', rating: 5, date: 'Jun 13, 2024', comment: 'Professional staff and world-class facilities. Highly recommended.', status: 'APPROVED' },
  { id: 4, user: 'Elena Howe', venue: 'Emerald Garden', rating: 3, date: 'Jun 12, 2024', comment: 'Beautiful garden, but it rained and the backup plan was a bit cramped.', status: 'PENDING' }
]

const getStarRating = (rating) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
</script>

<template>
  <div class="reviews-page">
    <div class="page-header">
      <div class="header-left">
        <h1>Review Moderation</h1>
        <p>Curate and manage user feedback for architectural venues.</p>
      </div>
      <div class="header-right">
        <div class="review-stats">
          <div class="stat">
            <strong>4.8</strong>
            <span>AVG RATING</span>
          </div>
          <div class="stat">
            <strong>12</strong>
            <span>PENDING</span>
          </div>
        </div>
      </div>
    </div>

    <div class="reviews-list">
      <div v-for="review in reviews" :key="review.id" class="review-card card" v-motion-slide-visible-once-bottom>
        <div class="review-header">
          <div class="user-info">
            <div class="avatar-box">{{ review.user.charAt(0) }}</div>
            <div class="details">
              <strong>{{ review.user }}</strong>
              <span>on {{ review.venue }}</span>
            </div>
          </div>
          <div class="meta-info">
            <div class="stars">{{ getStarRating(review.rating) }}</div>
            <span class="date">{{ review.date }}</span>
          </div>
        </div>
        
        <div class="review-content">
          <p>"{{ review.comment }}"</p>
        </div>

        <div class="review-actions">
          <div class="status-indicator">
            <span class="badge" :class="review.status.toLowerCase()">{{ review.status }}</span>
          </div>
          <div class="action-btns">
            <button v-if="review.status === 'PENDING'" class="approve-btn">Approve</button>
            <button class="delete-btn">Delete</button>
            <button class="reply-btn">Reply</button>
          </div>
        </div>
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

.review-stats {
  display: flex;
  gap: 2rem;
  background: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: 1px solid #EEEEEE;
}

.stat {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.stat strong {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0B192C;
}

.stat span {
  font-size: 0.65rem;
  font-weight: 800;
  color: #B0B0B0;
  letter-spacing: 0.05em;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.review-card {
  padding: 2rem;
}

.card {
  background-color: white;
  border-radius: 20px;
  border: 1px solid #EEEEEE;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.avatar-box {
  width: 40px;
  height: 40px;
  background-color: #F8F9FA;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #3A7DE0;
}

.details {
  display: flex;
  flex-direction: column;
}

.details strong {
  font-size: 0.95rem;
  font-weight: 800;
  color: #0B192C;
}

.details span {
  font-size: 0.75rem;
  font-weight: 600;
  color: #B0B0B0;
}

.meta-info {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stars {
  color: #FBBD23;
  font-size: 1rem;
  letter-spacing: 2px;
}

.date {
  font-size: 0.7rem;
  font-weight: 700;
  color: #B0B0B0;
}

.review-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #0B192C;
  font-style: italic;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.review-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid #EEEEEE;
}

.badge {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
}

.badge.approved { background-color: #E6F8EF; color: #2DCE89; }
.badge.pending { background-color: #FFF9E6; color: #FBBD23; }

.action-btns {
  display: flex;
  gap: 1rem;
}

.action-btns button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.approve-btn {
  background-color: #3A7DE0;
  color: white;
  border: none;
}

.delete-btn {
  background-color: #F8F9FA;
  border: 1px solid #EEEEEE;
  color: #F5365C;
}

.reply-btn {
  background-color: #F8F9FA;
  border: 1px solid #EEEEEE;
  color: #0B192C;
}

.action-btns button:hover {
  transform: translateY(-2px);
}
</style>
