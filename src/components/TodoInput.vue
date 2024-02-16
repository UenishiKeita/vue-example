<script setup lang="ts">
import { ref } from 'vue'

const newTodo = ref('')

const emit = defineEmits(['add-todo'])

const handleClick = () => {
  emit('add-todo', newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <input v-model="newTodo" />
  <button @click="handleClick()">Add</button>
</template>
