<template>
  <section id="gallery" class="gallery-section">
    <div class="gallery-container">
      <ScrollReveal>
        <div class="section-header">
          <div class="section-label">GALLERY</div>
          <h2 class="gallery-title">GALLERY</h2>
        </div>
      </ScrollReveal>

      <div class="gallery-grid">
        <ScrollReveal
          v-for="(image, index) in storeConfig.images.gallery" 
          :key="index"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <div 
            class="gallery-item"
            @click="openLightbox(index)"
          >
            <SafeImage
              :src="image"
              :alt="`ギャラリー画像 ${index + 1}`"
              image-class="gallery-image"
              format="webp"
              placeholder-icon="📷"
            />
            <div class="gallery-overlay">
              <div class="overlay-icon">+</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>

    <!-- ライトボックス（モーダル） -->
    <Transition name="lightbox">
      <div 
        v-if="lightboxOpen"
        class="lightbox"
        @click="closeLightbox"
      >
        <button 
          @click="closeLightbox"
          class="lightbox-close"
          aria-label="閉じる"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button 
          v-if="currentImageIndex > 0"
          @click.stop="previousImage"
          class="lightbox-nav lightbox-prev"
          aria-label="前の画像"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          v-if="currentImageIndex < storeConfig.images.gallery.length - 1"
          @click.stop="nextImage"
          class="lightbox-nav lightbox-next"
          aria-label="次の画像"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div @click.stop class="lightbox-content">
          <Transition name="image-fade" mode="out-in">
            <SafeImage
              :key="currentImageIndex"
              :src="storeConfig.images.gallery[currentImageIndex]"
              :alt="`ギャラリー画像 ${currentImageIndex + 1}`"
              image-class="lightbox-image"
              format="webp"
              placeholder-icon="📷"
            />
          </Transition>
          <div class="lightbox-counter">
            {{ currentImageIndex + 1 }} / {{ storeConfig.images.gallery.length }}
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { storeConfig } from '~/config/store'
import { ref, onMounted, onUnmounted } from 'vue'

const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  if (currentImageIndex.value < storeConfig.images.gallery.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') previousImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.gallery-section {
  padding: 6rem 1.5rem;
  background: white;
  position: relative;
}

@media (min-width: 640px) {
  .gallery-section {
    padding: 8rem 2rem;
  }
}

@media (min-width: 768px) {
  .gallery-section {
    padding: 15rem 3rem;
  }
}

@media (min-width: 1024px) {
  .gallery-section {
    padding: 20rem 4rem;
  }
}

.gallery-container {
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

.gallery-title {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #1a1a1a;
  line-height: 1.3;
}

@media (min-width: 640px) {
  .gallery-title {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .gallery-title {
    font-size: 4.5rem;
  }
}

@media (min-width: 1024px) {
  .gallery-title {
    font-size: 6rem;
  }
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-item {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f5f3f0;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-icon {
  font-size: 3rem;
  color: white;
  font-weight: 300;
}

/* ライトボックス */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-close svg {
  width: 1.5rem;
  height: 1.5rem;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav svg {
  width: 1.5rem;
  height: 1.5rem;
}

.lightbox-prev {
  left: 2rem;
}

.lightbox-next {
  right: 2rem;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.lightbox-counter {
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
}

/* トランジション */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.image-fade-enter-active,
.image-fade-leave-active {
  transition: opacity 0.3s ease;
}

.image-fade-enter-from,
.image-fade-leave-to {
  opacity: 0;
}
</style>
