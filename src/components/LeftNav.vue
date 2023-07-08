<script setup lang="ts">
//defineEmits(['changeMenu']);

defineProps({
  menu: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="navigation">
    <div class="inactive">Information</div>
    <div>
      <font-awesome-icon icon="house" />

      <span @click="$emit('changeMenu', 'Home')">Home </span>
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'bars']" />
      <span @click="$emit('changeMenu', 'Updates')">Updates</span>
    </div>

    <div class="inactive">Weapon of Choice</div>
    <div>
      <font-awesome-icon icon="house" />
      <span @click="$emit('changeMenu', 'Updates')">Updates</span>
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'bars']" />
      <span>Updates</span>
    </div>

    <div class="inactive">Work Experience</div>
    <div>
      <font-awesome-icon icon="house" />
      <span>Home</span>
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'bars']" />
      <span>Updates</span>
    </div>
  </div>
</template>

<style scoped>
.navigation {
  padding: 0 26px 26px;
  height: 800px;
  overflow: scroll;
  border-right: 1px solid var(--border-color);
  flex: 20;
  > div:not(.inactive) {
    padding: 10px;
  }
  > .inactive {
    margin: 16px 0 12px;
  }
}

span {
  margin-left: 12px;
  cursor: pointer;
}
</style>
