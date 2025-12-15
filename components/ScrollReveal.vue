<template>
  <div ref="element" class="scroll-reveal" :class="{ 'visible': isVisible }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const element = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!element.value) return
  
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // 一度表示されたら監視を停止
          if (observer && element.value) {
            observer.unobserve(element.value)
          }
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  )
  
  observer.observe(element.value)
})

onUnmounted(() => {
  if (observer && element.value) {
    observer.unobserve(element.value)
  }
})
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>


