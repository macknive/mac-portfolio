<script setup lang="ts">
defineProps({
  menu: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="content-area">
    <div class="content-header">{{ menu }}</div>
    <div class="content-main">
      Content heredasdasdasdas Content heredasdasdasdas Content heredasdasdasdas
      Content heredasdasdasdas Content heredasdasdasdas Content heredasdasdasdas
      <button class="vs">Virtusize</button>
    </div>
  </div>
</template>

<style scoped>
.content-area {
  display: flex;
  flex-direction: column;
  flex: 80;
}

.content-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  height: 58px;
  flex-shrink: 0;
}
.content-main {
  background-color: var(--theme-bg-color);
  height: 100%;
  width: 100%;
}

.vs {
  display: none;
}
</style>
