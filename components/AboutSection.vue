<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <ScrollReveal>
        <div class="section-header">
          <div class="section-label">ABOUT</div>
          <h2 class="section-title">{{ storeConfig.name }}</h2>
        </div>
      </ScrollReveal>

      <div class="about-content">
        <!-- 画像 -->
        <ScrollReveal>
          <div class="about-image-wrapper">
            <div class="image-frame">
              <SafeImage
                :src="storeConfig.images.about"
                alt="カフェの雰囲気"
                image-class="about-image"
                format="webp"
                placeholder-icon="🏪"
              />
              <div class="image-shine"></div>
            </div>
          </div>
        </ScrollReveal>

        <!-- テキストコンテンツ -->
        <ScrollReveal>
          <div class="about-text">
            <h3 class="about-subtitle">CAFEとは？</h3>
            <div class="about-description">
              <p>{{ storeConfig.description }}</p>
              <p>
                何気ない毎日の中で、心安らぐひと時を。<br>
                {{ storeConfig.name }}はお客様ひとりひとりに寄り添う、心地よい空間とお食事を提供する憩いの場です。<br>
                ともだちと語らうランチ、1人でゆっくり過ごすアフタヌーン。<br>
                少し"とくべつ"で、ささやかな幸せを感じられる、あなただけの時間をお過ごしください。
              </p>
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
.about-section {
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
}

@media (min-width: 768px) {
  .about-section {
    padding: 12rem 3rem;
  }
}

@media (min-width: 1024px) {
  .about-section {
    padding: 15rem 4rem;
  }
}

.about-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 6rem;
}

.section-label {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

.section-title {
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: 0.1em;
  color: #1a1a1a;
  line-height: 1.2;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 4.5rem;
  }
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 6rem;
  }
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
  }
}

.about-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: visible;
}

.image-frame {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-image-wrapper:hover .image-frame {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-image-wrapper:hover .about-image {
  transform: scale(1.1);
}

.image-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.6s;
}

.about-image-wrapper:hover .image-shine {
  left: 100%;
}

.about-text {
  padding: 2rem 0;
}

.about-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 2.5rem;
  letter-spacing: 0.05em;
  position: relative;
  padding-bottom: 1rem;
}

.about-subtitle::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 1px;
  background: #1a1a1a;
}

@media (min-width: 768px) {
  .about-subtitle {
    font-size: 2rem;
  }
}

.about-description {
  font-size: 1rem;
  line-height: 2.2;
  color: #333;
  letter-spacing: 0.02em;
}

.about-description p {
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .about-description {
    font-size: 1.125rem;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
