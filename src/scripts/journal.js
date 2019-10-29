import data from "./data.js"
import dom from "./entriesDOM.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
data.getJournalEntries()
.then(response => dom.renderJournalEntries(response))
