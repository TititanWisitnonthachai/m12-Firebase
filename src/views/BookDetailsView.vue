<script setup>
import { ref, onMounted } from 'vue'
import BookService from '@/services/BookService.js'

const theBook = ref(null)
// const id = ref(100001)

const props = defineProps({
    id: { required: true }
})

onMounted(() => {
    //BookService.getBook(id.value)
    BookService.getBook(props.id)
    .then((response)=>{
        theBook.value = response.data
    })
    .catch((error)=>{
        console.log(error)
    })
})
</script>

<template>
    <div v-if="theBook">
        <h1>{{  theBook.title }}</h1>
        <p>Price: {{ theBook.price }} Condition: {{ theBook.condition }} </p>
        <p>ISBN: {{ theBook.isbn }} Published on: {{ theBook.published }}</p>
        <p>Free Shipping: {{ theBook.isbn }}</p>
    </div>
</template>