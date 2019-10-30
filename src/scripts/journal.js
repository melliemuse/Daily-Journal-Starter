import data from "./data.js"
import dom from "./entriesDOM.js"
import components from "./entryComponent.js"

data.getJournalEntries()
    .then(response => dom.renderJournalEntries(response))

    // Use `fetch` with the POST method to add your entry to your API
    const postJournalEntry = (newJournalEntry) => {
        return fetch("http://localhost:3000/entries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newJournalEntry)
        })
     }

    

const captureInput = (date, concept, entry, mood) => {
    return {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
    }
}

       

const button = document.querySelector('button')
button.addEventListener('click', () => {
    // event.preventDefault()
    const date = document.querySelector('.date').value;
    const concept = document.querySelector('.concepts').value;
    const entry = document.querySelector('textarea').value;
    const mood = document.querySelector('option').value

    if (date !== '' && concept !== '' && entry !== '' && mood !==  '') {
         // Invoke the factory function, passing along the form field values
    const newJournalEntry = captureInput(date, concept, entry, mood)

    console.log(newJournalEntry)
    
 
    postJournalEntry(newJournalEntry)
    
  
//     data.postJournalEntry()
//     .then(response => dom.renderJournalEntries(response))
    
//     data.getJournalEntries()
//     .then(data.getJournalEntries()).then()

//     }
// })
    }
})
