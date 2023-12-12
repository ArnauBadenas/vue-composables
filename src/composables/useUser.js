import { ref } from "vue"
export default function useUser() {
    const user = ref([])
    const llegirUser = async (userId) => {
        const userURL = `https://jsonplaceholder.typicode.com/users/{$userId}`
    }
}