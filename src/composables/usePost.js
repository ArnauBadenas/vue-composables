import { ref } from 'vue'
export default function usePost() {
    /*
    2. Quina funció necessitem per obtenir els POSTS de la JSON placeholder API? Info
    Necessitarem utilitzar fetch
    */

    /*
    3. Primer afrontarem la lectura de tots els posts. Sabries dir quin tipus de variable necessitem? Necessitem que aquesta sigui reactiva? Per què?
    Necessitarem un array buit, ha de ser reactiu per que reculli tots els posts.
    */
    
    /*5. Fes cerca per internet i explica que fan async i await dins el codi que veus a dalt d’aquestes línies. Afegeix la teva explicació amb comentaris de codi.
    Async es una manera de definir una funció la qual fa que funcioni com una promesa.
    Await ens permet definir una part de la funció que volem que esperi a aquesta promesa.
    */
    const posts = ref([])
    const post = ref([])
    
    const llegirPosts = async () => {
        const baseURL = "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(baseURL)
        posts.value = await response.json() 
    }

    const llegirPost=async(id)=>{   
        const postURL = `https://jsonplaceholder.typicode.com/posts/${id}`
        console.log(postURL)
        const response = await fetch(postURL)
        post.value = await response.json()
   
     }
    
     return {
        posts,
        llegirPosts,
        post,
        llegirPost
    }
    


}