<script setup lang="ts">
import type { Todo } from '@/App.vue'
import { ref } from 'vue'

const props = defineProps<{ todoCount: Todo[] }>()

const count = ref(0)

function addCount() {
  count.value++
}

function subCount() {
  count.value--
}
</script>

<template>
  {{ console.log('count', count) }}
  <div>count {{ count }}</div>
  <div>todocount {{ props.todoCount.length }}</div>
  <button @click="addCount()">add</button>
  <button @click="subCount()">sub</button>
</template>
