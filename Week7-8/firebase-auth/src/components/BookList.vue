<template>
  <div class="book-list">
    <h1>Books Management</h1>

    <!-- Filter Controls -->
    <div class="filters">
      <label>
        Filter ISBN greater than:
        <input type="number" v-model.number="isbnFilter" placeholder="e.g. 1000" />
      </label>

      <label>
        Order by:
        <select v-model="orderField">
          <option value="isbn">ISBN</option>
          <option value="name">Name</option>
        </select>
        <select v-model="orderDirection">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>

      <label>
        Limit:
        <input type="number" v-model.number="limitNumber" placeholder="e.g. 5" />
      </label>

      <button @click="fetchBooks">Apply Filter</button>
    </div>

    <!-- Book List -->
    <ul>
      <li v-for="book in books" :key="book.id">
        <strong>{{ book.name }}</strong> - ISBN: {{ book.isbn }}
        <!-- Update and Delete buttons -->
        <button @click="updateBook(book.id, book.name)">Update</button>
        <button @click="deleteBook(book.id)">Delete</button>
      </li>
    </ul>

    <p v-if="books.length === 0">No books found.</p>
  </div>
</template>

<script>
import { ref } from "vue";
import db from "../firebase/init.js";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default {
  name: "BookList",
  setup() {
    // Reactive state
    const books = ref([]);
    const isbnFilter = ref(0);
    const orderField = ref("isbn");
    const orderDirection = ref("asc");
    const limitNumber = ref(0);

    /**
     * Fetch books from Firestore with dynamic filters
     */
    const fetchBooks = async () => {
      try {
        let q = collection(db, "books");
        const conditions = [];

        // Apply "where" filter if ISBN filter is set
        if (isbnFilter.value > 0) {
          conditions.push(where("isbn", ">", isbnFilter.value));
        }

        // Apply orderBy
        if (orderField.value) {
          conditions.push(orderBy(orderField.value, orderDirection.value));
        }

        // Apply limit
        if (limitNumber.value > 0) {
          conditions.push(limit(limitNumber.value));
        }

        // Build the query
        q = query(q, ...conditions);

        // Execute query and map results
        const snapshot = await getDocs(q);
        books.value = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };

    /**
     * Update a book's name
     * Opens a prompt for the user to enter a new name
     */
    const updateBook = async (id, currentName) => {
      try {
        // Ask user for new name
        const newName = prompt("Enter new book name:", currentName);
        if (!newName) {
          return; // Skip update if input is empty or canceled
        }

        const bookRef = doc(db, "books", id);
        await updateDoc(bookRef, { name: newName });

        alert("Book updated!");
        fetchBooks(); // Refresh list
      } catch (err) {
        console.error("Error updating book:", err);
      }
    };

    /**
     * Delete a book from Firestore
     */
    const deleteBook = async (id) => {
      try {
        const bookRef = doc(db, "books", id);
        await deleteDoc(bookRef);

        alert("Book deleted!");
        fetchBooks(); // Refresh list
      } catch (err) {
        console.error("Error deleting book:", err);
      }
    };

    return {
      books,
      isbnFilter,
      orderField,
      orderDirection,
      limitNumber,
      fetchBooks,
      updateBook,
      deleteBook,
    };
  },
};
</script>

<style scoped>
.book-list {
  margin: 20px;
}

.filters {
  margin-bottom: 20px;
}

label {
  margin-right: 15px;
}

button {
  margin-left: 8px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #2c9d6f;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}
</style>
