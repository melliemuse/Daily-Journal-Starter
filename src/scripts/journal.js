import data from "./data.js"
import dom from "./entriesDOM.js"
import eventListeners from './event-listeners.js'

data.getJournalEntries()
    .then(response => dom.renderJournalEntries(response))

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
    event.preventDefault()
    const date = document.querySelector('.date').value;
    const concept = document.querySelector('.concepts').value;
    const entry = document.querySelector('textarea').value;
    const mood = document.querySelector('.mood').value
    console.log(mood)
    

    if (date !== '' && concept !== '' && entry !== '' && mood !== '') {
        // Invoke the factory function, passing along the form field values
        const newJournalEntry = captureInput(date, concept, entry, mood)

        console.log(newJournalEntry)
        data.saveJournalEntry(newJournalEntry)
        .then(data.getJournalEntries)
            .then(response => {
                dom.renderJournalEntries(response)
            }
            )
    }
})

eventListeners.radioButtonEventListener()
eventListeners.buttonEventListener()
