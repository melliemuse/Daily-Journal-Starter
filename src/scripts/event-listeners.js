import data from './data.js'
import dom from './entriesDOM.js'

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
                const recipeToDelete = event.target.id.split('--')[1]
                // Write/ invoke DELETE function with fetch call
                data.deleteJournalEntry(recipeToDelete)
                // .then Get journal entries again 
                .then(data.getJournalEntries)
                    .then(dom.renderJournalEntries)   
            }
        })

    }
}

export default eventListeners