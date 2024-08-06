//Question bank
var questionBank= [
  {
    
    question: 'Which type of JavaScript language is ___',
    option: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'],
    answer: 'Object-Based',
  },
  {
    
    question: ' In JavaScript, what is a block of statement?',
    option: ['Conditional block', 'block that combines a number of statements into a single compound statement', 'both conditional block and a single statement', 'block that contains a single statement'],
    answer: 'block that combines a number of statements into a single compound statement',
  },
  {
    
    question: 'When interpreter encounters an empty statements, what it will do:',
    option: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statements'],
    answer: 'Ignores the statements',
  },

  {
    question: 'The "function" and " var" are known as ?',
    option: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
    answer: 'Declaration statements',
  },
  {
    question: 'Which of the following variables takes precedence over the others if the names are the same?',
    option: [
      'Global variable',
      'The local element',
      'The two of the above',
      'None of the above',
    ],
    answer: 'The local element',
  },
  {
    question: 'Which one of the following is the correct way for calling the JavaScript code?',
    option: ['Preprocessor', 'Triggering Event', 'RMI', 'Function/Method'],
    answer: 'Function/Method',
  },
  {
    question: 'Which of the following type of a variable is volatile',
    option: [
      'Mutable variable',
      'Dynamic variable',
      'Volatile variabl',
      'Immutable variable',
    ],
    answer: 'Mutable variable',
  },
  {
    question: 'In the JavaScript, which one of the following is not considered as an error:',
    option: ['Syntax error', 'Missing of semicolons', 'Division by zero', 'Missing of Bracket'],
    answer: 'Division by zero',
  },
  {
    question: 'Which of the following number object function returns the value of the number?',
    option: [
      'toString()',
      'valueOf()',
      'toLocaleString()',
      'toPrecision()',
    ],
    answer: 'valueOf()',
  },
  {
    question: 'Which of the following one is the property of the primary expression:',
    option: ['Contains only keywords', 'basic expressions containing all necessary functions', 'contains variable references alone', 'stand-alone expressions'],
    answer: 'stand-alone expressions',
  },
];


var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var message= document.getElementById('message');
var i=0;
var score= 0;



//function to display questions
function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
  option0.innerHTML= questionBank[i].option[0];
  option1.innerHTML= questionBank[i].option[1];
  option2.innerHTML= questionBank[i].option[2];
  option3.innerHTML= questionBank[i].option[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
  if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
  {
      score= score+1;
      document.getElementById(e.id).style.background= 'green'; 
      message.innerHTML= "Your Answer is wrong" ;
     
        
  }
  
  else {
      document.getElementById(e.id).style.background= 'Red' ;
      message.innerHTML= "Your Answer is wrong" ;
  }

  
 
  setTimeout(nextQuestion,700);
}




//function to display next question
function nextQuestion(){
  if(i<questionBank.length-1)
  {
      i=i+1;
      message.innerText= "Your Answer is correct" ;
      displayQuestion();
  }
  else{
      points.innerHTML= score+ '/'+ questionBank.length;
      quizContainer.style.display= 'none';
      scoreboard.style.display= 'block'
  }
}


//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
  location.reload();
}

//function to check Answers
function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display= 'block';
  scoreboard.style.display= 'none';
  for(var a=0;a<questionBank.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= questionBank[a].answer;
      answers.appendChild(list);
  }
  

  }



displayQuestion();