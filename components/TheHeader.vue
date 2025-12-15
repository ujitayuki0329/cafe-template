<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <nav class="header-nav">
      <div class="header-container">
        <!-- ロゴ -->
        <NuxtLink to="/" class="header-logo">
          <span class="logo-text">{{ storeConfig.name }}</span>
        </NuxtLink>

        <!-- ナビゲーションメニュー（デスクトップ） -->
        <div class="header-menu">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.to"
            :to="item.to"
            class="nav-link"
          >
            <span>{{ item.label }}</span>
            <span class="nav-underline"></span>
          </NuxtLink>
        </div>

        <!-- モバイルメニューボタン -->
        <button 
          @click="toggleMobileMenu"
          class="mobile-menu-button"
          :class="{ 'active': isMobileMenuOpen }"
          aria-label="メニュー"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>

      <!-- モバイルメニュー -->
      <Transition name="mobile-menu">
        <div 
          v-if="isMobileMenuOpen"
          class="mobile-menu"
        >
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.to"
            :to="item.to"
            @click="closeMobileMenu"
            class="mobile-nav-link"
          >
            <span>{{ item.label }}</span>
            <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { storeConfig } from '~/config/store'
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { label: 'TOP', to: '/' },
  { label: 'CONCEPT', to: '#concept' },
  { label: 'MENU', to: '#menu' },
  { label: 'GALLERY', to: '#gallery' },
  { label: 'ACCESS', to: '#access' }
]

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.98);
  border-bottom-color: #e8e8e8;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header-nav {
  padding: 1.5rem 0;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .header-container {
    padding: 0 3rem;
  }
}

@media (min-width: 1024px) {
  .header-container {
    padding: 0 4rem;
  }
}

.header-logo {
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.header-logo:hover {
  opacity: 0.7;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #1a1a1a;
}

@media (min-width: 768px) {
  .logo-text {
    font-size: 1.5rem;
  }
}

.header-menu {
  display: none;
  align-items: center;
  gap: 3rem;
}

@media (min-width: 768px) {
  .header-menu {
    display: flex;
  }
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: #1a1a1a;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  overflow: hidden;
}

.nav-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #1a1a1a;
  transition: width 0.3s ease;
}

.nav-link:hover .nav-underline {
  width: 100%;
}

.mobile-menu-button {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  transition: transform 0.3s ease;
}

.mobile-menu-button:hover {
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .mobile-menu-button {
    display: none;
  }
}

.hamburger-line {
  width: 24px;
  height: 1px;
  background: #1a1a1a;
  transition: all 0.3s ease;
}

.mobile-menu-button.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.mobile-menu-button.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.mobile-menu {
  display: block;
  padding: 2rem;
  background: white;
  border-top: 1px solid #e8e8e8;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  text-decoration: none;
  color: #1a1a1a;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: 1px solid #e8e8e8;
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: #c9a961;
}

.link-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.mobile-nav-link:hover .link-icon {
  transform: translateX(3px);
}

/* トランジション */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
