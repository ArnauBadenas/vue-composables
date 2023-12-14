import { ref } from "vue"
export default function useResources(resourceName) {
    const resource = ref([])

    const getResources = async () => {
        const resourcesURL = `https://jsonplaceholder.typicode.com/${resourceName}`
        const response = await fetch(resourcesURL)
        resource.value = await response.json()
    }
    const getOneResource = async (id) => {
        const resourceURL = `https://jsonplaceholder.typicode.com/${resourceName}/${id}`
        const response = await fetch(resourceURL)
        resource.value = await response.json()
    }

    return {
        resource,
        getResources,
        getOneResource
    }
}