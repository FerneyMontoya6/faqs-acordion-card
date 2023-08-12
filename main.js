/**
 * Getting the necesary HTML elements
 */
const faqsDiv = document.querySelector('.faqs');
const paragraphsHidden = document.querySelectorAll('.answer-hidden--paragraph');
const questions = document.querySelectorAll('.question--paragraph');
const paragraphsHiddenArray = [...paragraphsHidden];
const questionsArray = [...questions];

faqsDiv.addEventListener('click', (e) => {
  
    const btnName = e.target.tagName;
    const btn = e.target;

    if(btnName === 'BUTTON') {
        btn.classList.toggle('button__active');

        btnNumber = Number(btn.className[1]);
        
        paragraphsHiddenArray[btnNumber - 1].classList.toggle('toggle');
        questionsArray[btnNumber - 1].classList.toggle('question__active');
    }

})
