<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
//import { collection, getDocs } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";

import ProductCard from '@/components/ProductCard.vue'

// create an empty array
const books = ref([])

async function getBooks() {
  // const querySnapshot = await getDocs(collection(db, 'books'))
  //   querySnapshot.forEach((doc) => {
  //      // make an object
  //     const book = {
  //       "id": doc.id,
  //       "isbn": doc.data().isbn,
  //       "title": doc.data().title,
  //       "condition": doc.data().condition,
  //       "published": doc.data().published,
  //       "price": doc.data().price,
  //       "freeShipping": doc.data().freeshepping
  //     }
  //     // add the object to the array
  //      books.value.push(book)
  //   })

  onSnapshot(collection(db, 'books'), (querySnapshot) => {
    let booksSnapshot = []
    querySnapshot.forEach((doc) => {
      let book = {
        "id": doc.id,
        "isbn": doc.data().isbn,
        "title": doc.data().title,
        "condition": doc.data().condition,
        "published": doc.data().published,
        "price": doc.data().price,
        "freeShipping": doc.data().freeshepping
      }
      // add the object to the array
      //books.value.push(book)
      booksSnapshot.push(book)
    })
    books.value = booksSnapshot
  })
}

onMounted(async () => {
    console.log("Connecting to Firebase")
    await getBooks()
})


</script>

<template>
  <div class="products">
    <ProductCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>