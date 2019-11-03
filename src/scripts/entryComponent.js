const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
        <i class='deleteButton fas fa-trash-alt' id='deleteButton--${journalEntry.id}'></i>
        <i class='editButton fas fa-pen' id='editButton--${journalEntry.id}'></i>
      </section>
     
    `
  }
}


export default entryManager