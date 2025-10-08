/**
 * Firebase Cloud Functions
 * Author: Allen
 * Task 9.1 + 9.2 – eFolio Week 9
 * ------------------------------------------------------------
 * 9.1 countBooks: Count total number of books in Firestore
 * 9.2 capitaliseBookData: Automatically capitalise new book data
 */

const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

// Initialize Firebase Admin SDK
admin.initializeApp();

/* ------------------------------------------------------------
 * Task 9.1 – Count Books Function
 * ------------------------------------------------------------ */
exports.countBooks = onRequest((req, res) => {
  // Enable CORS for cross-origin requests
  cors(req, res, async () => {
    try {
      const db = admin.firestore();

      // Get all documents from the "books" collection
      const snapshot = await db.collection("books").get();
      const count = snapshot.size;

      // Return the count as a JSON response
      res.status(200).send({ count });
      console.log(`✅ Successfully counted ${count} books.`);
    } catch (error) {
      console.error("❌ Error counting books:", error.message);
      res.status(500).send({ error: "Error counting books." });
    }
  });
});

/* ------------------------------------------------------------
 * Task 9.2 – Capitalise Book Data Function
 * ------------------------------------------------------------ */
// Triggered when a new document is created in Firestore "books" collection
exports.capitaliseBookData = onDocumentCreated("books/{bookId}", async (event) => {
  const bookId = event.params.bookId;
  const newData = event.data.data();

  try {
    const db = admin.firestore();

    // Prepare updated data
    const updatedData = {};
    if (newData.title) updatedData.title = newData.title.toUpperCase();
    if (newData.author) updatedData.author = newData.author.toUpperCase();

    // Write updated data back to Firestore
    if (Object.keys(updatedData).length > 0) {
      await db.collection("books").doc(bookId).update(updatedData);
      console.log(`✅ Book data capitalised for document ID: ${bookId}`);
    } else {
      console.log(`ℹ️ No title/author fields found for document ID: ${bookId}`);
    }
  } catch (error) {
    console.error(`❌ Error capitalising data for ${bookId}:`, error.message);
  }
});
