<script setup lang="ts">
import type { Todo } from '@/App.vue'
import { computed, ref } from 'vue'

const { todos } = defineProps<{
  todos: Todo[]
}>()

const hideCompleted = ref(false)

const emit = defineEmits(['remove-todo'])

const filteredTodos = computed<Todo[]>(() => {
  if (hideCompleted.value) {
    return todos.filter((t) => !t.done)
  } else {
    return todos
  }
})
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="emit('remove-todo', todo)">×</button>
      </li>
    </ul>
  </div>
  <div class="hide">
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}

.hide {
  margin: 24px 0;
}
</style>
