const formManager = {
    formHTML: () => {
        return `<form>
            <input type='hidden' id='entryId' value=''>
        <fieldset>
            <label for="date-input">Date of entry</label>
            <input class='date' type="date" name="date-input" required>
        </fieldset>
        <fieldset>
            <label for="concept-input">Concepts covered</label>
            <input class='concepts' type="text" name="concept-input" pattern="[A-Za-z0-9\(\)\{\};:\s]"
                title="Only numbers, letters and () {} are allowed" required>
        </fieldset>
        <fieldset>
            <label for="entry-input">Journal entry</label>
            <textarea name="entry-input" required></textarea>
        </fieldset>
        <fieldset>
            <label for="mood-input">Mood</label>
            <select class="mood" name="mood-input" required>
                <option value="Amazing">Amazing</option>
                <option value="Great">Great</option>
                <option value="Ok">Ok</option>
            </select>
        </fieldset>
    </form>
    <button class='recordButton'>Record Journal Entry</button>
    <form>
        <fieldset>
            <legend>Mood</legend>
            <div>
                <input type="radio" name='mood' id='Amazing' value='Amazing'>
                <label for="Amazing">Amazing</label>
            </div>
            <div>
                <input type="radio" name='mood' id='Great' value='Great'>
                <label for="Great">Great</label>
            </div>
            <div>
                <input type="radio" name='mood' id='Ok' value='Ok'>
                <label for="Ok">Ok</label>
            </div>
    
        </fieldset>
    </form>`
    }
    // updateFormFields: (eventId) => {
    //     // Get reference to input fields in the form
    //     const date = document.querySelector('.date').value;
    //     const concept = document.querySelector('.concepts').value;
    //     const entry = document.querySelector('textarea').value;
    //     const mood = document.querySelector('.mood').value


    //     fetch(`http://localhost:8088/recipes/${recipeId}`)
    //         .then(response => response.json())
    //         .then(recipe => {
    //             /*
    //                 Now that you KNOW you have the data, render
    //                 an editing form that represents the current
    //                 state of the resource.
    //             */
    //             hiddenRecipeId.value = recipe.id // Hidden value. User no see. 🙈
    //             recipeTitleInput.value = recipe.title
    //             recipeInstructionsInput.value = recipe.instructions
    //         })
    // }
}

export default formManager