<template>
  <section class="hero-section" ref="heroSection">
    <!-- 背景（動画または画像） -->
    <div class="hero-background" ref="heroBackground">
      <!-- 動画背景 -->
      <video
        v-if="storeConfig.videos?.hero"
        :src="storeConfig.videos.hero"
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
        ref="heroVideo"
      ></video>
      <!-- 画像背景（動画がない場合） -->
      <SafeImage
        v-else
        :src="storeConfig.images.hero"
        :alt="storeConfig.name"
        image-class="hero-image"
        loading="eager"
        format="webp"
        :quality="90"
        placeholder-icon="☕"
      />
      <div class="hero-overlay"></div>
    </div>

    <!-- コンテンツ -->
    <div class="hero-content" ref="heroContent">
      <div class="hero-label">WELCOME</div>
      <h1 class="hero-title">{{ storeConfig.name }}</h1>
      <p class="hero-description">{{ storeConfig.description }}</p>
      <div class="hero-buttons">
        <a href="#menu" class="hero-button">
          <span>MENU</span>
        </a>
        <a href="#access" class="hero-button-secondary">
          <span>ACCESS</span>
        </a>
      </div>
    </div>

    <!-- スクロールインジケーター -->
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <div class="scroll-text">SCROLL</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeConfig } from '~/config/store'
import { ref, onMounted } from 'vue'

const heroSection = ref<HTMLElement | null>(null)
const heroBackground = ref<HTMLElement | null>(null)
const heroContent = ref<HTMLElement | null>(null)
const heroVideo = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  // 動画の自動再生
  if (heroVideo.value) {
    heroVideo.value.play().catch(() => {})
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1a1a1a;
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  .hero-section {
    min-height: 700px;
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.hero-background :deep(.safe-image-wrapper) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-background :deep(.hero-image) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  min-width: 100%;
  min-height: 100%;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}


.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  animation: fadeInUp 1.2s ease-out;
}

@media (min-width: 768px) {
  .hero-content {
    padding: 2rem;
  }
}

.hero-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.hero-label::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: white;
  animation: fadeInUp 1.2s ease-out 0.2s both;
  word-break: keep-all;
  overflow-wrap: break-word;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 6.5rem;
  }
}

.hero-description {
  font-size: 0.875rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  animation: fadeInUp 1.2s ease-out 0.4s both;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .hero-description {
    font-size: 1rem;
    line-height: 2;
    padding: 0;
  }
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1.125rem;
    margin-bottom: 3.5rem;
  }
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 1.2s ease-out 0.6s both;
  width: 100%;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .hero-buttons {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 0;
  }
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #1a1a1a;
  font-weight: 500;
  font-size: 0.75rem;
  padding: 0.875rem 2rem;
  border: 1px solid white;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 280px;
}

@media (min-width: 640px) {
  .hero-button {
    font-size: 0.875rem;
    padding: 1rem 3rem;
    width: auto;
    max-width: none;
  }
}

.hero-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #1a1a1a;
  transition: width 0.3s ease;
  z-index: 0;
}

.hero-button span {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.hero-button:hover::before {
  width: 100%;
}

.hero-button:hover span {
  color: white;
}

.hero-button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: white;
  font-weight: 500;
  font-size: 0.75rem;
  padding: 0.875rem 2rem;
  border: 1px solid white;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 280px;
}

@media (min-width: 640px) {
  .hero-button-secondary {
    font-size: 0.875rem;
    padding: 1rem 3rem;
    width: auto;
    max-width: none;
  }
}

.hero-button-secondary:hover {
  background: white;
  color: #1a1a1a;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (min-width: 768px) {
  .scroll-indicator {
    bottom: 3rem;
  }
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.5);
  animation: scrollLine 2s ease-in-out infinite;
}

.scroll-text {
  font-size: 0.625rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 500;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollLine {
  0%, 100% {
    opacity: 0.3;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(10px);
  }
}
</style>
