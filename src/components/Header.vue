<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="button-container">
      <div @click="$emit('minimize')" class="button-red menu-buttons"></div>
      <div @click="$emit('minimize')" class="button-yellow menu-buttons"></div>
      <div @click="$emit('maximize')" class="button-green menu-buttons"></div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  padding: 0 30px;
  white-space: nowrap;
}
.button-container {
  cursor: default;
  display: flex;
}
.menu-buttons {
  cursor: pointer;
  border-radius: 50%;
  margin-right: 8px;
  width: 15px;
  height: 15px;
}

.button-red {
  background-color: #f96057;
}
.button-yellow {
  background-color: #f8ce52;
}
.button-green {
  background-color: #5fcf65;
}
</style>
