<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
const { countUp } = counterStore
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="countUp()">Count up!</button>
    <button @click="counterStore.$reset()">Reset Store</button>
  </div>
</template>
