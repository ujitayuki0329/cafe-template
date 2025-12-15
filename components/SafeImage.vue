<template>
  <div class="safe-image-wrapper">
    <NuxtImg
      v-if="!showPlaceholder"
      :src="imageSrc"
      :alt="alt"
      :class="imageClass"
      :format="format"
      :quality="quality"
      :loading="loading"
      @error="handleError"
    />
    <div 
      v-if="showPlaceholder"
      :class="['safe-image-placeholder', imageClass]"
    >
      <span class="placeholder-icon">{{ placeholderIcon }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  src: string
  alt: string
  imageClass?: string
  format?: string
  quality?: number
  loading?: 'lazy' | 'eager'
  placeholderIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageClass: '',
  format: 'webp',
  quality: 80,
  loading: 'lazy',
  placeholderIcon: '🖼️'
})

const showPlaceholder = ref(false)
const imageSrc = ref(props.src)

const handleError = (event: Event) => {
  // 画像の読み込みに失敗した場合、プレースホルダーを表示
  showPlaceholder.value = true
  console.warn(`画像の読み込みに失敗しました: ${props.src}`)
}

// srcが変更されたらリセット
watch(() => props.src, (newSrc) => {
  imageSrc.value = newSrc
  showPlaceholder.value = false
}, { immediate: true })
</script>

<style scoped>
.safe-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.safe-image-placeholder {
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
</style>

