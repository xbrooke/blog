/* 选中卡片时的蓝色高亮样式 */

<template>
  <div class="grid-card-container">
    <div
      class="grid-card"
      v-for="(item, idx) in items"
      :key="idx"
    >
      <component
        :is="item.link ? 'a' : 'div'"
        v-bind="item.link ? { href: item.link, target: item.target || '_blank', rel: 'noopener noreferrer', class: 'grid-card-link' } : {}"
        style="display: block; text-decoration: none; color: inherit; height: 100%"
        @mousedown="activeIdx = idx"
        @mouseup="activeIdx = -1"
        @mouseleave="activeIdx = -1"
        :class="{ 'active-blue': activeIdx === idx }"
        @click="handleCardClick(item, idx)"
      >
        <template v-if="item.video">
          <img v-if="item.image" :src="item.image" class="grid-card-image" :alt="item.title || ''" />
          <div class="grid-card-video-cover" v-if="!showVideo || showVideoIdx !== idx">
            <div class="grid-card-video-play" />
          </div>
        </template>
        <template v-else-if="item.webpage">
          <img v-if="item.image" :src="item.image" class="grid-card-image" :alt="item.title || ''" />
        </template>
        <img v-else-if="item.image" :src="item.image" class="grid-card-image" :alt="item.title || ''" />
        <div class="grid-card-content">
          <h3 class="grid-card-title">{{ item.title }}</h3>
          <p class="grid-card-desc">{{ item.desc }}</p>
          <slot name="footer" :item="item" />
        </div>
      </component>

    <!-- 弹窗视频/网页 -->
    <div v-if="showVideo && showVideoIdx === idx" class="grid-card-modal" @click.self="closeModal">
      <div class="grid-card-modal-inner">
        <iframe
          v-if="item.video"
          :src="getVideoIframe(item.video)"
          frameborder="0"
          allowfullscreen
          class="grid-card-modal-iframe"
        ></iframe>
        <iframe
          v-else-if="item.webpage"
          :src="item.webpage"
          frameborder="0"
          class="grid-card-modal-iframe"
        ></iframe>
        <span class="grid-card-modal-close" @click="closeModal">×</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
const activeIdx = ref(-1)
const showVideo = ref(false)
const showVideoIdx = ref(-1)
function handleCardClick(item, idx) {
  if (item.video || item.webpage) {
    showVideo.value = true
    showVideoIdx.value = idx
  } else if (item.link) {
    // 对于 link，a 标签本身已跳转，这里无需阻止默认行为
    return;
  }
}
function closeModal() {
  showVideo.value = false
  showVideoIdx.value = -1
}
function getVideoIframe(url) {
  // 自动转换B站视频页面为iframe地址
  if (/bilibili.com\/video\//.test(url)) {
    const bv = url.match(/\/video\/(BV\w+)/)
    if (bv && bv[1]) {
      return `https://player.bilibili.com/player.html?bvid=${bv[1]}`
    }
  }
  return url
}
</script>

<style scoped>
.grid-card-video-cover {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.grid-card-video-play {
  width: 48px;
  height: 48px;
  background: rgba(30,41,59,0.85);
  border-radius: 50%;
  position: relative;
}
.grid-card-video-play::after {
  content: '';
  position: absolute;
  left: 18px;
  top: 12px;
  width: 16px;
  height: 24px;
  background: white;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}
.grid-card-modal {
  position: fixed;
  z-index: 9999;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-card-modal-inner {
  background: #fff;
  border-radius: 12px;
  padding: 0;
  position: relative;
  max-width: 90vw;
  max-height: 80vh;
  box-shadow: 0 8px 32px rgba(30,41,59,0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.grid-card-modal-iframe {
  width: 70vw;
  height: 40vw;
  max-width: 900px;
  max-height: 60vh;
  border: none;
  border-radius: 8px;
  background: #000;
}
.grid-card-modal-close {
  position: absolute;
  top: 8px;
  right: 18px;
  font-size: 32px;
  color: #222;
  cursor: pointer;
  font-weight: bold;
  z-index: 2;
}
.grid-card-video-wrap {
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
}
.grid-card-video {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
/* 适配当前页面风格的简洁卡片样式 */
/* 保持自适应，兼容不同屏幕宽度 */
.grid-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 24px 0;
}
/* 基础卡片样式 */
.grid-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.18s, transform 0.18s;
  cursor: pointer;
  border: 1px solid #ececec;
}
.grid-card:hover {
  border-color: #1a73e8;
  transform: translateY(-2px) scale(1.01);
}
.grid-card.active-blue {
  border-color: #1a73e8;
}
/* 深色模式下卡片纯黑背景、弱边框、无高亮 */
@media (prefers-color-scheme: dark) {
  :global(.dark) .grid-card {
    background: #111214 !important;
    border: 1px solid #23262b !important;
    box-shadow: none !important;
  }
  :global(.dark) .grid-card:hover,
  :global(.dark) .grid-card.active-blue {
    border-color: #1a73e8 !important;
    box-shadow: none !important;
    background: #111214 !important;
  }
  :global(.dark) .grid-card-title {
    color: #e3e6eb !important;
  }
  :global(.dark) .grid-card-desc {
    color: #b0b3b8 !important;
  }
}
.grid-card-link {
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
.grid-card-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  background: #f6f6f6;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0;
  border: none;
  box-sizing: border-box;
}
.grid-card-content {
  padding: 14px 14px 12px 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.grid-card-title {
  font-size: 16px;
  margin: 0 0 6px;
  font-weight: 600;
  color: #222;
}
.grid-card-desc {
  font-size: 13px;
  color: #666;
  margin: 0 0 6px;
  line-height: 1.6;
}
</style>
