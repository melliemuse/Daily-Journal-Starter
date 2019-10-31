import data from './data.js'
import dom from './entriesDOM.js'

const eventListeners = () => {

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
}

export default eventListeners