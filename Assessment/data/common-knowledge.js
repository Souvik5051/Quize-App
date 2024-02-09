const quizData = {
  title: "Quiz App Application"
};

const questions = [
  {
    text: "What is the capital of France?",
    type: "mc",
    answers: [
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false }
    ]
  },
  {
    text: "Which planet is known as the Red Planet?",
    type: "mc",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    text: "What is the largest mammal on Earth?",
    type: "mc",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false }
    ]
  },
  {
    text: "Who wrote 'Romeo and Juliet'?",
    type: "mc",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    text: "What is the largest ocean on Earth?",
    type: "mc",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true }
    ]
  },
  // Add more questions as needed
];

module.exports = { quizData, questions };
