const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
        <button class='deleteButton' id='deleteButton--${journalEntry.id}'>Delete Entry</button>
      </section>
     
    `
  }
}


export default entryManager