const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json())
  },
  saveJournalEntry(newJournalEntry) {
      return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
      })
   },
   deleteJournalEntry(entryId) {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
      method: "DELETE"
    })
  },
    getSingleJournalEntry(entryToEdit) {
      return fetch(`http://localhost:3000/entries/${entryToEdit}`)
        .then(response => response.json())
   },
   updateJournalEntry(editJournalEntry, id) {
    return fetch(`http://localhost:3000/entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editJournalEntry)
    })
 }
  }


export default API