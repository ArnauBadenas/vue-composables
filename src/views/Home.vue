<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import usePost from '../composables/usePost.js'
import useResources from '../composables/useResources';
import PostCard from "../components/PostCard.vue";

//Utilitzant el composable de post
// const {posts, llegirPosts} = usePost()

//EX4. Utilitzant el composable general
const {resource:posts, getResources:llegirPosts} = useResources()

llegirPosts("https://jsonplaceholder.typicode.com/posts")


</script>
