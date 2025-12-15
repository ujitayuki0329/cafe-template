<template>
  <section id="concept" class="concept-section">
    <div class="concept-container">
      <ScrollReveal>
        <div class="section-header">
          <div class="section-label">CONCEPT</div>
          <h2 class="concept-title">{{ storeConfig.name }}</h2>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div class="concept-content">
          <div class="concept-text-wrapper">
            <p class="concept-main-text">{{ storeConfig.description }}</p>
            <p class="concept-sub-text">{{ storeConfig.tagline }}</p>
          </div>
        </div>
      </ScrollReveal>

      <!-- 特徴 -->
      <div class="concept-features">
        <ScrollReveal
          v-for="(feature, index) in storeConfig.features"
          :key="index"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="feature-item">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
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
.concept-section {
  padding: 6rem 1.5rem;
  background: white;
  position: relative;
}

@media (min-width: 640px) {
  .concept-section {
    padding: 8rem 2rem;
  }
}

@media (min-width: 768px) {
  .concept-section {
    padding: 15rem 3rem;
  }
}

@media (min-width: 1024px) {
  .concept-section {
    padding: 20rem 4rem;
  }
}

.concept-container {
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

.concept-title {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #1a1a1a;
  line-height: 1.3;
}

@media (min-width: 640px) {
  .concept-title {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .concept-title {
    font-size: 4.5rem;
  }
}

@media (min-width: 1024px) {
  .concept-title {
    font-size: 6rem;
  }
}

.concept-content {
  margin-bottom: 5rem;
}

@media (min-width: 768px) {
  .concept-content {
    margin-bottom: 10rem;
  }
}

.concept-text-wrapper {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .concept-text-wrapper {
    padding: 0;
  }
}

.concept-main-text {
  font-size: 1.125rem;
  line-height: 2.5;
  color: #1a1a1a;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  font-weight: 400;
}

@media (min-width: 768px) {
  .concept-main-text {
    font-size: 1.25rem;
    line-height: 2.8;
  }
}

.concept-sub-text {
  font-size: 1rem;
  line-height: 2.2;
  color: #6b6b6b;
  letter-spacing: 0.03em;
  font-weight: 400;
}

@media (min-width: 768px) {
  .concept-sub-text {
    font-size: 1.125rem;
    line-height: 2.5;
  }
}

.concept-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 640px) {
  .concept-features {
    gap: 3rem;
  }
}

@media (min-width: 768px) {
  .concept-features {
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }
}

.feature-item {
  text-align: center;
  padding: 2rem 1.5rem;
  background: #faf9f7;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (min-width: 640px) {
  .feature-item {
    padding: 3rem 2rem;
  }
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 2rem;
  display: block;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .feature-title {
    font-size: 1.5rem;
  }
}

.feature-description {
  font-size: 0.9375rem;
  line-height: 2;
  color: #6b6b6b;
  letter-spacing: 0.03em;
  font-weight: 400;
}

@media (min-width: 768px) {
  .feature-description {
    font-size: 1rem;
    line-height: 2.2;
  }
}
</style>

