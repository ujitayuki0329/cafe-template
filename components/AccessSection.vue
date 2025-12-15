<template>
  <section id="access" class="access-section">
    <div class="access-container">
      <ScrollReveal>
        <div class="section-header">
          <div class="section-label">ACCESS</div>
          <h2 class="access-title">CONTACT</h2>
        </div>
      </ScrollReveal>

      <div class="access-content">
        <!-- 営業時間 -->
        <ScrollReveal>
          <div class="info-block">
            <h3 class="info-block-title">OPEN</h3>
            <div class="info-block-content">
              <div class="info-row">
                <span class="info-label">平日</span>
                <span class="info-value">{{ storeConfig.hours.weekdays }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">週末</span>
                <span class="info-value">{{ storeConfig.hours.weekend }}</span>
              </div>
              <div v-if="storeConfig.hours.closed.length > 0" class="info-row">
                <span class="info-label">定休日</span>
                <span class="info-value">{{ storeConfig.hours.closed.join('・') }}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <!-- 住所 -->
        <ScrollReveal>
          <div class="info-block">
            <h3 class="info-block-title">ADDRESS</h3>
            <div class="info-block-content">
              <p class="info-address">{{ storeConfig.address }}</p>
              <a 
                :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeConfig.address)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="info-link"
              >
                <span>Google Maps</span>
                <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>

        <!-- 連絡先 -->
        <ScrollReveal>
          <div class="info-block">
            <h3 class="info-block-title">CONTACT</h3>
            <div class="info-block-content">
              <div class="info-row">
                <span class="info-label">TEL</span>
                <a :href="`tel:${storeConfig.phone}`" class="info-link-inline">{{ storeConfig.phone }}</a>
              </div>
              <div class="info-row">
                <span class="info-label">MAIL</span>
                <a :href="`mailto:${storeConfig.email}`" class="info-link-inline">{{ storeConfig.email }}</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeConfig } from '~/config/store'
</script>

<style scoped>
.access-section {
  padding: 6rem 1.5rem;
  background: #faf9f7;
  position: relative;
}

@media (min-width: 640px) {
  .access-section {
    padding: 8rem 2rem;
  }
}

@media (min-width: 768px) {
  .access-section {
    padding: 15rem 3rem;
  }
}

@media (min-width: 1024px) {
  .access-section {
    padding: 20rem 4rem;
  }
}

.access-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .section-header {
    margin-bottom: 6rem;
  }
}

.section-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #6b6b6b;
  margin-bottom: 1.5rem;
}

.access-title {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #1a1a1a;
  line-height: 1.3;
}

@media (min-width: 640px) {
  .access-title {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .access-title {
    font-size: 4.5rem;
  }
}

@media (min-width: 1024px) {
  .access-title {
    font-size: 6rem;
  }
}

.access-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .access-content {
    gap: 2.5rem;
  }
}

@media (min-width: 768px) {
  .access-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

@media (min-width: 1024px) {
  .access-content {
    grid-template-columns: repeat(3, 1fr);
  }
}

.info-block {
  background: white;
  padding: 2rem 1.5rem;
  border: 1px solid #e8e8e8;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (min-width: 640px) {
  .info-block {
    padding: 2.5rem 2rem;
  }
}

@media (min-width: 768px) {
  .info-block {
    padding: 3rem 2.5rem;
  }
}

.info-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.info-block-title {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1a1a1a;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e8e8e8;
}

.info-block-content {
  font-size: 0.9375rem;
  line-height: 2;
  color: #1a1a1a;
  letter-spacing: 0.03em;
  font-weight: 400;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.info-row:last-child {
  margin-bottom: 0;
}

.info-label {
  font-weight: 500;
  color: #6b6b6b;
  min-width: 80px;
}

.info-value {
  text-align: right;
  flex: 1;
}

.info-address {
  margin-bottom: 1.5rem;
  line-height: 2;
}

.info-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
}

.info-link:hover {
  color: #c9a961;
  border-bottom-color: #c9a961;
}

.link-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.info-link:hover .link-icon {
  transform: translate(2px, -2px);
}

.info-link-inline {
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-link-inline:hover {
  color: #c9a961;
}
</style>
