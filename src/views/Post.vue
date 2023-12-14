<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import useResources from '../composables/useResources'
import usePost from '../composables/usePost.js'
import useUser from '../composables/useUser';

const route = useRoute()

//Utilitzar composables amb els dos arxius separats
// const {post, llegirPost} = usePost()
// const {user, llegirUser} = useUser()

//EX4. Utilitzar composable amb l'arxiu conjunt (useResources)
/*
Aqui s'utilitza un alias per a renombrar les variables perque es puguin utilitzar
varies vegades la mateixa funció i variable ref.
*/
const {resource:post, getOneResource:llegirPost} = useResources("posts")
const {resource:user, getOneResource:llegirUser} = useResources("users")

//Recullo el post i usuari de forma asincrona, 
//perque el usuari es dependent de que es reculli el post.
async function getPostInfo ()  {
  await llegirPost(route.params.id)
  await llegirUser(post.value.userId)
}
getPostInfo()
</script>
