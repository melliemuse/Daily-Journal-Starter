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
   }
  }


export default API