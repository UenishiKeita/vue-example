<script setup lang="ts">
import CounterView from './components/CounterView.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import AnimationView from './components/AnimationView.vue'
import { reactive } from 'vue'

export type Todo = { id: number; text: string; done: boolean }

let id = 0

const todos = reactive<Todo[]>([
  { id: id++, text: 'todo1', done: true },
  { id: id++, text: 'todo2', done: false },
  { id: id++, text: 'todo3', done: true }
])

function addTodo(newTodo: string) {
  todos.push({ id: id++, text: newTodo, done: false })
}

function removeTodo(todo: Todo) {
  const newTodos = todos.filter((t) => t.id !== todo.id)
  todos.splice(0)
  todos.push(...newTodos)
}
</script>

<template>
  <div class="container">
    <h1>Animation</h1>
    <AnimationView />
  </div>
  <div class="container">
    <h1>Count</h1>
    <CounterView :todo-count="todos" />
  </div>
  <div class="container">
    <h1>TODO</h1>
    <TodoInput @add-todo="addTodo" />
    <div class="todos">
      <TodoList :todos="todos" @remove-todo="removeTodo" />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.container {
  margin: 24px 0;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.todos {
  margin: 24px 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
