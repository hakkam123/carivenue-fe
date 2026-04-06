<script setup>
// Revenue Distribution Chart (SVG-based for exact visual match)
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
const activeTab = ref('Month')
</script>

<template>
  <div class="chart-container card">
    <div class="chart-header">
      <div class="header-left">
        <h3>Revenue Distribution</h3>
        <p>Monthly fiscal trajectory analysis</p>
      </div>
      <div class="header-right">
        <div class="tab-switcher">
          <button v-for="tab in ['Week', 'Month', 'Year']" :key="tab" class="tab-btn" :class="{ active: activeTab === tab }" @click="activeTab = tab">
            {{ tab }}
          </button>
        </div>
      </div>
    </div>

    <div class="chart-body">
      <svg viewBox="0 0 800 300" class="revenue-svg">
        <!-- Grid horizontal lines -->
        <line x1="0" y1="50" x2="800" y2="50" stroke="#F0F0F0" stroke-width="1" />
        <line x1="0" y1="150" x2="800" y2="150" stroke="#F0F0F0" stroke-width="1" />
        <line x1="0" y1="250" x2="800" y2="250" stroke="#F0F0F0" stroke-width="1" />
        
        <!-- Curved Path -->
        <path d="M0,200 C100,210 150,180 200,195 C300,230 350,150 400,190 C500,240 550,120 650,160 C750,200 800,180 800,180" 
              fill="none" stroke="#3A7DE0" stroke-width="4" stroke-linecap="round" />
        
        <!-- Gradient Area -->
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3A7DE0" stop-opacity="0.2" />
            <stop offset="100%" stop-color="#3A7DE0" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,200 C100,210 150,180 200,195 C300,230 350,150 400,190 C500,240 550,120 650,160 C750,200 800,180 800,180 L800,300 L0,300 Z" 
              fill="url(#chartGradient)" />
              
        <!-- Data Points -->
        <circle cx="200" cy="195" r="4" fill="white" stroke="#3A7DE0" stroke-width="2" />
        <circle cx="400" cy="190" r="4" fill="white" stroke="#3A7DE0" stroke-width="2" />
        <circle cx="650" cy="160" r="4" fill="white" stroke="#3A7DE0" stroke-width="2" />
      </svg>
    </div>

    <div class="chart-footer">
      <div v-for="month in months" :key="month" class="month-label">{{ month }}</div>
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  padding: 2rem;
  flex: 1;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;
}

.header-left h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0B192C;
  margin-bottom: 0.25rem;
}

.header-left p {
  font-size: 0.8rem;
  font-weight: 600;
  color: #B0B0B0;
}

.tab-switcher {
  display: flex;
  background-color: #F8F9FA;
  padding: 0.3rem;
  border-radius: 10px;
  border: 1px solid #EEEEEE;
}

.tab-btn {
  padding: 0.4rem 1rem;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  color: #B0B0B0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn.active {
  background-color: #3A7DE0;
  color: white;
  box-shadow: 0 4px 10px rgba(58, 125, 224, 0.2);
}

.chart-body {
  margin-bottom: 1rem;
}

.revenue-svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

.chart-footer {
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
}

.month-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #B0B0B0;
  letter-spacing: 0.05em;
}

.card {
  background-color: white;
  border-radius: 20px;
  border: 1px solid #EEEEEE;
}
</style>
