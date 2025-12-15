<template>
  <section id="menu" class="menu-section">
    <div class="menu-container">
      <ScrollReveal>
        <div class="section-header">
          <div class="section-label">PRODUCT</div>
          <h2 class="menu-title">MENU</h2>
        </div>
      </ScrollReveal>

      <!-- メニューカテゴリー -->
      <div 
        v-for="(category, categoryIndex) in storeConfig.menu" 
        :key="categoryIndex"
        class="menu-category"
      >
        <ScrollReveal>
          <div class="category-header">
            <h3 class="category-title">{{ category.category }}</h3>
            <div class="category-line"></div>
          </div>
        </ScrollReveal>

        <div class="menu-items-grid">
          <ScrollReveal
            v-for="(item, itemIndex) in category.items"
            :key="itemIndex"
            :style="{ animationDelay: `${itemIndex * 0.1}s` }"
          >
            <div class="menu-item">
              <div class="menu-item-image-wrapper">
                <SafeImage
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.name"
                  image-class="menu-item-image"
                  format="webp"
                  placeholder-icon="☕"
                />
                <div v-else class="menu-item-placeholder">
                  <span class="placeholder-icon">☕</span>
                </div>
                <div class="menu-item-overlay">
                  <div class="overlay-content">
                    <span class="overlay-price">{{ item.price }}</span>
                  </div>
                </div>
              </div>
              
              <div class="menu-item-content">
                <h4 class="menu-item-name">{{ item.name }}</h4>
                <p class="menu-item-description">{{ item.description }}</p>
                <div class="menu-item-price">{{ item.price }}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeConfig } from '~/config/store'
</script>

<style scoped>
.menu-section {
  padding: 6rem 1.5rem;
  background: #faf9f7;
  position: relative;
}

@media (min-width: 640px) {
  .menu-section {
    padding: 8rem 2rem;
  }
}

@media (min-width: 768px) {
  .menu-section {
    padding: 15rem 3rem;
  }
}

@media (min-width: 1024px) {
  .menu-section {
    padding: 20rem 4rem;
  }
}

.menu-container {
  max-width: 1400px;
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
    margin-bottom: 8rem;
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

.menu-title {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #1a1a1a;
  line-height: 1.3;
}

@media (min-width: 640px) {
  .menu-title {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .menu-title {
    font-size: 4.5rem;
  }
}

@media (min-width: 1024px) {
  .menu-title {
    font-size: 6rem;
  }
}

.menu-category {
  margin-bottom: 5rem;
}

@media (min-width: 768px) {
  .menu-category {
    margin-bottom: 10rem;
  }
}

.menu-category:last-child {
  margin-bottom: 0;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 640px) {
  .category-header {
    gap: 2rem;
    margin-bottom: 4rem;
  }
}

.category-title {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #1a1a1a;
  white-space: nowrap;
}

@media (min-width: 640px) {
  .category-title {
    font-size: 1.5rem;
  }
}

@media (min-width: 768px) {
  .category-title {
    font-size: 2rem;
  }
}

.category-line {
  flex: 1;
  height: 1px;
  background: #e8e8e8;
}

.menu-items-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .menu-items-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

@media (min-width: 1024px) {
  .menu-items-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.menu-item {
  background: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.menu-item-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #f5f3f0;
}

.menu-item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.menu-item:hover .menu-item-image {
  transform: scale(1.08);
}

.menu-item-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f3f0;
}

.placeholder-icon {
  font-size: 3rem;
  opacity: 0.3;
}

.menu-item-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.menu-item:hover .menu-item-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
}

.overlay-price {
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  letter-spacing: 0.05em;
}

.menu-item-content {
  padding: 1.5rem;
}

@media (min-width: 640px) {
  .menu-item-content {
    padding: 2rem;
  }
}

.menu-item-name {
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .menu-item-name {
    font-size: 1.25rem;
  }
}

.menu-item-description {
  font-size: 0.875rem;
  line-height: 1.8;
  color: #6b6b6b;
  letter-spacing: 0.03em;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

@media (min-width: 768px) {
  .menu-item-description {
    font-size: 0.9375rem;
  }
}

.menu-item-price {
  font-size: 1.125rem;
  font-weight: 500;
  color: #c9a961;
  letter-spacing: 0.05em;
  text-align: right;
}

@media (min-width: 768px) {
  .menu-item-price {
    font-size: 1.25rem;
  }
}
</style>
