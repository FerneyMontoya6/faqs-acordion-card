/**
 * Getting the necesary HTML elements
 */
const faqsDiv = document.querySelector('.faqs');
const paragraphsHidden = document.querySelectorAll('.answer-hidden--paragraph');
const questions = document.querySelectorAll('.question--paragraph');
const buttons = document.querySelectorAll('button');
const paragraphsHiddenArray = [...paragraphsHidden];
const questionsArray = [...questions];
const buttonsArray = [...buttons];


faqsDiv.addEventListener('click', (e) => {

    const NUMBER_LETTERS_PARAGRAPH_CLASS = 19;

    const elementClicked = e.target.className;
    const classNameSliced = elementClicked.slice(0, NUMBER_LETTERS_PARAGRAPH_CLASS); 
    
    if (classNameSliced === 'question--paragraph' || e.target.tagName === 'BUTTON') {
        const numberOfQuestion = Number(elementClicked.charAt(elementClicked.length - 1));
        
        paragraphsHiddenArray[numberOfQuestion - 1].classList.toggle('toggle');
        paragraphsHiddenArray[numberOfQuestion - 1].classList.toggle(String(numberOfQuestion));

        questionsArray[numberOfQuestion - 1].classList.toggle('question__active');
        questionsArray[numberOfQuestion - 1].classList.toggle(String(numberOfQuestion));

        buttonsArray[numberOfQuestion - 1].classList.toggle('button__active');
        buttonsArray[numberOfQuestion - 1].classList.toggle(String(numberOfQuestion));
    }
})
