<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import usePost from '../composables/usePost.js'
import useUser from '../composables/useUser';

const route = useRoute()

//Utilitzar composables
const {post, llegirPost} = usePost()
const {user, llegirUser} = useUser()

//Recullo el post i usuari de forma asincrona, 
//perque el usuari es dependent de que es reculli el post.
async function getPostInfo ()  {
  await llegirPost(route.params.id)
  await llegirUser(post.value.userId)
}
getPostInfo()
</script>
