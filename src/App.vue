<script setup lang="ts">
import Top from './components/Top.vue';
import Header from './components/Header.vue';
import LeftNav from './components/LeftNav.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import { onMounted, ref, watch } from 'vue';
import interact from 'interactjs';

const menu = ref('Home');
const changeMenu = (newMenu: string) => {
  menu.value = newMenu;
};

const show = ref(true);
const draggable = ref(null);
const position = ref({ x: 0, y: 0 });

const minimize = () => {
  show.value = !show.value;
};

const maximize = () => {
  draggable;
};

const initDrag = () => {
  interact(draggable.value)
    .draggable({
      listeners: {
        move(event) {
          position.value.x += event.dx;
          position.value.y += event.dy;

          event.target.style.transform = `translate(${position.value.x}px, ${position.value.y}px)`;
        },
      },
    })
    .resizable({
      edges: { left: true, right: true, bottom: true, top: true },
      listeners: {
        move(event) {
          const target = event.target;
          let x = parseFloat(target.getAttribute('data-x')) || 0;
          let y = parseFloat(target.getAttribute('data-y')) || 0;

          // Update width and height
          const newWidth = event.rect.width;
          const newHeight = event.rect.height;
          target.style.width = `${newWidth}px`;
          target.style.height = `${newHeight}px`;

          // Update position (only if not resizing from the top or left edges)
          if (!event.deltaRect.top && !event.deltaRect.left) {
            x += event.deltaRect.left;
            y += event.deltaRect.top;
            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          }
        },
      },
      modifiers: [
        interact.modifiers.aspectRatio({
          ratio: 'preserve', // Uncomment this line if you want to preserve the aspect ratio
        }),
      ],
    });
};

onMounted(() => {
  initDrag();
});

watch(show, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      initDrag();
    }, 1000);
  }
});

// onBeforeMount(() => {
//   // const script = document.createElement('script');
//   // script.src = './src/scripts/integration.js';
//   // document.head.appendChild(script);
// });
</script>

<template>
  <div class="video-background">
    <video autoplay loop muted>
      <source
        src="https://assets.codepen.io/3364143/7btrrd.mp4"
        type="video/mp4"
      />
    </video>
  </div>

  <Top />

  <div class="content">
    <Transition name="bounce">
      <div v-if="show">
        <div ref="draggable" class="browser">
          <Header @minimize="minimize" @maximize="maximize" />
          <div class="body-area">
            <LeftNav :menu="menu" @change-menu="changeMenu" />
            <Content :menu="menu" />
          </div>
        </div>
      </div>
    </Transition>
    <Footer @minimize="minimize" />
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 1;
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes bounce-out {
  0% {
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-10%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}

.content {
  top: 15%;
  left: 10%;
  position: absolute;
  justify-content: center;
  align-items: center;
}

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.video-background video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.browser {
  z-index: 1;
  height: 800px;
  width: 1200px;
  background-color: rgba(16 18 27 / 40%);
  border-radius: 14px;
  backdrop-filter: blur(20px);
  overflow: hidden;
  margin: 12px;
}

.body-area {
  display: flex;
  flex-direction: row;
  z-index: 2;
  cursor: default;
}
</style>
