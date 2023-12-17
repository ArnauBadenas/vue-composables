import { ref } from "vue"
export default function useResources() {
    const resource = ref([])

    const getResources = async (resourceURL) => {
        const response = await fetch(resourceURL)
        resource.value = await response.json()
    }


    return {
        resource,
        getResources,

    }
}