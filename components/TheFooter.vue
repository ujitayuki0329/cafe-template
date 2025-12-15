<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <ScrollReveal>
          <h2 class="footer-title">{{ storeConfig.name }}</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p class="footer-address">{{ storeConfig.address }}</p>
        </ScrollReveal>
      </div>
      
      <div class="footer-middle">
        <ScrollReveal>
          <div class="footer-links">
            <a href="#concept" class="footer-link">CONCEPT</a>
            <a href="#menu" class="footer-link">MENU</a>
            <a href="#gallery" class="footer-link">GALLERY</a>
            <a href="#access" class="footer-link">ACCESS</a>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div class="footer-social">
            <a 
              v-if="storeConfig.social.instagram"
              :href="storeConfig.social.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Instagram"
            >
              <span>Instagram</span>
              <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              v-if="storeConfig.social.facebook"
              :href="storeConfig.social.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Facebook"
            >
              <span>Facebook</span>
              <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              v-if="storeConfig.social.twitter"
              :href="storeConfig.social.twitter"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Twitter"
            >
              <span>Twitter</span>
              <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <ScrollReveal>
          <div class="footer-copyright">
            <p>&copy; {{ new Date().getFullYear() }} {{ storeConfig.name }}. All rights reserved.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { storeConfig } from '~/config/store'
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: white;
  padding: 8rem 2rem 3rem;
  position: relative;
}

@media (min-width: 768px) {
  .footer {
    padding: 10rem 3rem 4rem;
  }
}

@media (min-width: 1024px) {
  .footer {
    padding: 12rem 4rem 5rem;
  }
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.footer-top {
  text-align: center;
  margin-bottom: 6rem;
  padding-bottom: 6rem;
  position: relative;
}

.footer-top::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.footer-title {
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  color: white;
}

@media (min-width: 768px) {
  .footer-title {
    font-size: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .footer-title {
    font-size: 4.5rem;
  }
}

.footer-address {
  font-size: 0.9375rem;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.7);
  line-height: 2;
  font-weight: 400;
}

.footer-middle {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 5rem;
}

@media (min-width: 768px) {
  .footer-middle {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .footer-links {
    justify-content: flex-start;
  }
}

.footer-link {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
}

.footer-link:hover {
  color: white;
  border-bottom-color: white;
}

.footer-social {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .footer-social {
    justify-content: flex-end;
  }
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
}

.social-link:hover {
  color: white;
  border-bottom-color: white;
}

.social-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
  transform: translate(2px, -2px);
}

.footer-bottom {
  position: relative;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 3rem;
}

.footer-copyright {
  text-align: center;
}

.footer-copyright p {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.05em;
  font-weight: 400;
}
</style>
