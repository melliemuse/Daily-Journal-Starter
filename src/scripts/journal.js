import data from "./data.js"
import dom from "./entriesDOM.js"
import eventListeners from './event-listeners.js'
import formManager from "./form-manager.js"

const formContainer = document.querySelector('.contents')
formContainer.innerHTML = formManager.formHTML()


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

const button = document.querySelector('.recordButton')
button.addEventListener('click', () => {
    event.preventDefault()
    const date = document.querySelector('.date').value
    const concept = document.querySelector('.concepts').value
    const entry = document.querySelector('textarea').value
    const mood = document.querySelector('.mood').value
    const id = document.querySelector('#entryId').value
    console.log(id)


    if (date !== '' && concept !== '' && entry !== '' && mood !== '') {
        // Invoke the factory function, passing along the form field values
        if (id.value !== '') {
            
            data.updateJournalEntry({ date, concept, entry, mood }, id)
                .then(data.getJournalEntries)
                    .then(entries => {
                        document.querySelector("#entryId").value = ""
                        dom.renderJournalEntries(entries)
                        /*
                            Since this is the point in the code where you KNOW
                            the operation completed successfully, clear the
                            value of the hidden input field to that your
                            application is back to the state of creating instead
                            of editing
                        */
                        
                        
                    }
                )
        }
        else {
            const newJournalEntry = captureInput(date, concept, entry, mood)
            console.log(newJournalEntry)
            data.saveJournalEntry(newJournalEntry)
                .then(data.getJournalEntries)
                .then(response => {
                    dom.renderJournalEntries(response)
                }
                )
        }


    }
})

eventListeners.radioButtonEventListener()
eventListeners.buttonEventListener()
