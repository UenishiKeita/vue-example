<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.querySelector('.square')?.animate(
    {
      borderRadius: [
        '50% 50% 50% 70%/50% 50% 70% 60%',
        '80% 30% 50% 50%/50%',
        '40% 40% 50% 40%/30% 50% 40% 80%'
      ],
      opacity: [0.4, 0.9, 1, 0.5, 0.3, 0.6, 0.7, 0.8],
      backgroundColor: ['#0bd', '#b2ffb2', '#09e577', '#7ae572', '#73ea3c', '#a1a3fc']
    },
    {
      iterations: Infinity,
      direction: 'alternate',
      duration: 5000
    }
  )
})
</script>

<template>
  <h2>Animation</h2>
  <div class="square"></div>
</template>

<style>
.square {
  height: 200px;
  width: 200px;
  background: #0bd;
  opacity: 0.3;
}
</style>
