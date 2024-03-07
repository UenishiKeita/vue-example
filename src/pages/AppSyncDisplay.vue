<script setup lang="ts">
import type { GraphQLQuery } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../graphql/queries'
import type { PostsQuery } from '../API'
import { ref } from 'vue'

const posts = ref()
const handleClick = async () => {
  console.log('action!')
  try {
    const res = await API.graphql<GraphQLQuery<PostsQuery>>(graphqlOperation(queries.posts))

    console.log('graphql', res)
    posts.value = res.data?.posts
  } catch {
    console.log('error!')
  }
}
</script>

<template>
  <h2>Posts</h2>
  <div>
    <button @click="handleClick()">Request</button>
  </div>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <p>id: {{ post.id }}</p>
        <p>title: {{ post.title }}</p>
      </li>
    </ul>
  </div>
</template>
