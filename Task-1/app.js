const container = document.querySelector(".container");
const questionBox =document.querySelector(".question");
const choiceBox = document.querySelector(".choice");
const nextBtn = document.querySelector(".nextBtn");
const previousBtn = document.querySelector(".previousBtn");
const scoreCard = document.querySelector(".scoreCard");
const Result = document.querySelector(".Result");

// make an array of objects that stores questions answers and choices
const quiz= [
{
    question : "Q1. which of the following is not a css box model property?" ,
    choice : ["margin" , "padding" , "border-radius" ,"border-collapse"],
    answer : "border-collapse"
},
 {
   question :  "Q2. JavaScript me typeof null ka result kya hota hai?",
    choice  :  [ "null" ,"undefined" ,"object" , "number "],
   answer : "object"
 },
{
   question : " Q3. Agar hum function ke andar var declare karein to uska scope kya hoga?",
   choice: [ "Block scope","Function scope","Global scope","Lexical scope" ],
   answer:  "Function scope"
},
{
    question :"Q4. Flexbox me horizontally items ko center align karne ke liye kaunsa property use hoti hai?",
    choice :[ "align-items: center" ,"justify-content: center","text-align: center","display: center"],
    answer:  "justify-content: center"

},
{
    question: "Q5. NaN === NaN ka result kya hota hai?",
    choice:["true" ,"false" ,"Error"  ,"Undefined"],
    answer :  "false"


},
{
   question : "Q6. JavaScript me setTimeout(function(){}, 0); ka kya effect hota hai?" , 
   choice :["Function turant run hoga",
" Function last me run hoga (event queue ke baad)","Function ignore ho jayega","Error aayega"],
   answer : " Function last me run hoga (event queue ke baad)"
} 
];
  
let currentQuestionIndex = 0;



const showQuestion = ()=>{
const questionDetail = quiz[currentQuestionIndex];
 questionBox.textContent =questionDetail.question;

 choiceBox.textContent="";

 for (let i=0 ; i<questionDetail.choice.length; i++){
    const currentChoice=  questionDetail.choice[i];
    const choiceDiv = document.createElement("div");
    choiceDiv.textContent=currentChoice;
    choiceDiv.classList.add("choice");
    choiceBox.appendChild(choiceDiv);
 
    choiceDiv.addEventListener("click" , ()=>{
        document.querySelectorAll(".choice").forEach(c => c.classList.remove("selected"));
            choiceDiv.classList.add("selected");
    
    
     });
    }


   if(currentQuestionIndex === 0) {
    previousBtn.style.display="none";
  
   }
  else{
    previousBtn.style.display="inline-block"
  }
}

previousBtn.addEventListener("click" ,()=>{
if( currentQuestionIndex > 0){
    currentQuestionIndex--;
    showQuestion()

}

})




// function to check answer
const checkAnswer = ()=>{
const selectedChoice = document.querySelector(".choice.selected");
if(!selectedChoice) return;


quiz[currentQuestionIndex].userAnswer = selectedChoice.textContent;
  currentQuestionIndex++;

  if (currentQuestionIndex < quiz.length) {
    showQuestion();
  } else {
    nextBtn.style.display = "none";
    previousBtn.style.display="none";
    Result.style.display = "block";
    addBtn.style.display="none";
    editBtn.style.display="none";
    removeBtn.style.display="none";
    calculateScore();
  }
};


const calculateScore = () => {
  score = 0;
  quiz.forEach(q => {
    if (q.userAnswer === q.answer) {
      score++;
    }
  });
  showScore();
};





// function to show score
const showScore = ()=>{
    questionBox.textContent = "";
    choiceBox.textContent = "";
  scoreCard.textContent= `your score ${score} out of ${quiz.length}`
}

showQuestion();
 nextBtn.addEventListener("click" , ()=>{
    checkAnswer();
  
});



document.getElementById("addBtn").addEventListener("click", () => {
  const newQ = prompt("Enter your question:");
  const newChoices = prompt("Enter choices (comma separated):").split(",");
  const newAnswer = prompt("Enter correct answer exactly:");
  
  if (newQ && newChoices.length && newAnswer) {
    quiz.push({
      question: newQ,
      choice: newChoices,
      answer: newAnswer
    });
    alert("Question added!");
  }
});

// Edit current question
document.getElementById("editBtn").addEventListener("click", () => {
  let q = quiz[currentQuestionIndex];
  const updatedQ = prompt("Edit question:", q.question);
  const updatedChoices = prompt("Edit choices (comma separated):", q.choice.join(",")).split(",");
  const updatedAnswer = prompt("Edit correct answer:", q.answer);

  if (updatedQ && updatedChoices.length && updatedAnswer) {
    q.question = updatedQ;
    q.choice = updatedChoices;
    q.answer = updatedAnswer;
    showQuestion();
    alert("Question updated!");
  }
});

// Remove current question
document.getElementById("removeBtn").addEventListener("click", () => {
  if (quiz.length > 0) {
    quiz.splice(currentQuestionIndex, 1);
    if (currentQuestionIndex >= quiz.length) currentQuestionIndex = quiz.length - 1;
    showQuestion();
    alert("Question removed!");
  }
});