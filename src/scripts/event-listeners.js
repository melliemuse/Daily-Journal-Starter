import data from './data.js'
import dom from './entriesDOM.js'
import formManager from './form-manager.js'


const eventListeners = {

    radioButtonEventListener() {
        const radioButtons = document.getElementsByName('mood')
        radioButtons.forEach((radioButton) => {
            radioButton.addEventListener("click", event => {
                const mood = event.target.value

                data.getJournalEntries()
                    .then(response => {
                        const moodValue = response.filter(entry => {
                            let myMood = false
                            if (entry.mood === mood) {
                                myMood = true
                            }
                            return myMood
                        }
                        )
                        dom.renderJournalEntries(moodValue)
                    })
            })
        })
    },
    buttonEventListener() {
        const logArticle = document.querySelector(".entryLog")
        logArticle.addEventListener('click', () => {
            if (event.target.id.startsWith('delete')) {
                // Select item to delete using id.split
                const eventToDelete = event.target.id.split('--')[1]
                // Write/ invoke DELETE function with fetch call
                data.deleteJournalEntry(eventToDelete)
                    // .then Get journal entries again 
                    .then(data.getJournalEntries)
                    .then(dom.renderJournalEntries)
            } else if (event.target.id.startsWith('edit')) {
                // Have an event handler on some affordance for a user to edit a particular resource/ Select item to edit using id.split
                const eventToEdit = event.target.id.split('--')[1]

                // Get the corresponding resource from the API
                // Render a form to the DOM with input fields
                data.getSingleJournalEntry(eventToEdit)
                    .then(parsedEventToEdit => {
                        const date = document.querySelector('.date')
                        const concept = document.querySelector('.concepts')
                        const entry = document.querySelector('textarea')
                        const mood = document.querySelector('.mood')
                        const id = document.querySelector('#entryId')

 // Populate input fields in the DOM to represent the current state of the resource

                        date.value = parsedEventToEdit.date
                        concept.value = parsedEventToEdit.concept
                        entry.value = parsedEventToEdit.entry
                        mood.value = parsedEventToEdit.mood
                        id.value = parsedEventToEdit.id
                        console.log(parsedEventToEdit)

                    }

                        // formManager(parsedEventToEdit)
                    )
                   
                    // Have an event handler on a button to allow the user to save changes


                    // Collect the user input from the DOM
                    // Send a request to the API to update the correct resource
                    // Redirect the user to either a list view, or a detail view of the resource s/he just modified

                    // Write/ invoke EDIT function with fetch call

                    // .then Get journal entries again 
                    .then(data.getJournalEntries)
                    .then(dom.renderJournalEntries)

            }
        })

    }
}

export default eventListeners