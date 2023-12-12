import { ref } from 'vue'
export default function usePost() {
    /*
    2. Quina funció necessitem per obtenir els POSTS de la JSON placeholder API? Info
    Necessitarem utilitzar fetch
    
    
    

    5. Fes cerca per internet i explica que fan async i await dins el codi que veus a dalt d’aquestes línies. Afegeix la teva explicació amb comentaris de codi.
    Async serveix per crear una funció asíncrona i await se li posa a les variables que es vol que s'esperin a que la funció acabi per a assignar-se.
    */

    /*
    3. Primer afrontarem la lectura de tots els posts. Sabries dir quin tipus de variable necessitem? Necessitem que aquesta sigui reactiva? Per què?
    Necessitarem un array buit, ha de ser reactiu per que reculli tots els posts.
    */
    const posts = ref([])
    const baseURL = "https://jsonplaceholder.typicode.com/posts"

    const llegirPosts = async () => {
        const response = await fetch(baseURL)
        posts.value = await response.json()
    }

    return {
        posts,
        llegirPosts,
    }


}