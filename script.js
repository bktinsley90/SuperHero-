// PART 1
// Select submit button and call it submitButton
let submitButton = document.querySelector('#addHero');
// Select reset button and call it resetButton
let resetButton=document.querySelector('#resetForm');
// Select main content area and call it main
let main = document.querySelector('.row-main');
// Select how to use element and call it howToUse
let howToUse = document.querySelector('#howTo');
// Create an empty array for all heroes and call it heroes
let heroes= [];
// Create an empty string for all cards of heroes and call it cards
let cards= [];

// PART 3
// Create a function called createHeroesArray that takes in an event object
function createHeroesArray(e){

    // Prevent the button from doing what it naturally does (redirect to a new page)
    submitButton.e.preventDefault()

    // Create a Hero constructor that takes in - name, quote, imgURL
    function hero(name,quote,imgURL){
    // Create a new Hero object that stores the values of each input field (name, quote, imgURL)
        this.name = name,
        this.quote = quote,
        this.imgURL = imgURL
    }
    // Push the new object into the heroes array
    heroes.push(hero)

    // call the createCard function (you will make this shortly)
    createCard()
    // call the addHero function (you will make this shortly)
    addHero()
}


// PART 4
// Create a function called createCard
function createCard(){ 
    // create a loop to go through the heroes array
   for(i = 0; i <heroes.length; i++){
        // CREATE A CARD
        //create elements for div.card, h3, img, p
        let div = document.createElement('div.card')
        let h3= document.createElement('h3')
        let img = document.createElement('img')
        let p = document.createElement('p')
        // add a class called hero-card to div.card element
        div.className = "hero-card"
        // add a class called heroImg to the img element
        img.className = "heroImg"
        // set attribute src to the img element with the imgURL from the heroes array
        img.src = this.imgURL
        // create textnode with the hero's name and append it into the h3 element
        h3.appendChild(document.createTextNode(this.name))
        // create textnode with the hero's quote and append into the p element
        p.appendChild(document.createTextNode(this.quote))

        // append h3 to card
        cards.appendChild(h3)
        // apend img to card
        cards.appendChild(img)
        // apend p to card
        cards.appendChild(p)
        // append card to main
        main.appendChild(cards)
   }
}

// PART 5
// create a function called addHero
function addHero(){
 // clear the main div of any content
    main.remove()
// call the createCard function
return createCard
}
   
// PART 7
// create a function called resetForm 
function resetForm(){ 
    // select the form tag and use the reset method to clear the content
document.querySelector(form).reset()

}
// PART 8
// create a function called howToUsePopup that takes in an event object
function hotToUsePopup(e) {
    // Prevent the button from doing what it naturally does (redirect to a new page)
    howToUse.e.preventDefault()

    // make an alert that will provide the following instructions "Fill out the form below to add a new hero onto the main section"
        alert('Fill out the form Below')
}


// PART 2
//create an event listener to the following:
    //submitButton = click, createHeroesArray
    submitButton.addEventListener('click', createHeroesArray)
    // resetButton = click, resetForm
    resetButton.addEventListener('click', resetForm)
    // howToUse = click, howToUsePopup
    howToUse.addEventListener('click', howToUsePopup)

