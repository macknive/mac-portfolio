<script setup lang="ts">
import { onMounted, ref } from 'vue';

const currentDateTime = ref('');

const updateDateTime = () => {
  const date = new Date();
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = date
    .toLocaleDateString('en-US', options)
    .replace(/,/g, '');

  currentDateTime.value = `${formattedDate}`;
};

onMounted(() => {
  // Update date and time initially
  updateDateTime();

  // Update date and time every minute
  setInterval(updateDateTime, 60000);
});
</script>

<template>
  <div class="top-element">
    <img src="../assets/apple.svg" alt="" />
    <div>{{ currentDateTime }}</div>
  </div>
</template>

<style scoped>
.top-element {
  display: flex;
  justify-content: space-between;
  padding: 6px 24px;
  height: 36px;
  background-color: rgba(0, 0, 0, 0.5);

  backdrop-filter: blur(20px);
  width: 100%;
  position: fixed;
}

img {
  height: 20px;
}
</style>
