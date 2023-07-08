<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="svg-container">
      <img src="../assets/Wallpaper.svg" alt="" @click="$emit('minimize')" />
      <img src="../assets/iTunes-AppStore.svg" alt="" />
      <img src="../assets/Statics.svg" alt="" />
      <img src="../assets/Photos-Cameras.svg" alt="" />
      <img src="../assets/slack-new-logo.svg" alt="" />
      <img src="../assets/discord.svg" alt="" />
      <img src="../assets/Safari.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;

  > div {
    padding: 16px 24px;
    height: 80px;
    width: 500px;
    background-color: rgba(213, 216, 228, 0.2);
    border-radius: 14px;
    backdrop-filter: blur(20px);
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.svg-container {
  display: flex;
  justify-content: space-between;
}

img {
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.2);
}
</style>
