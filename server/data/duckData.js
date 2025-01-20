const ducks = [
    { id: 1, name: "Yellow Duck", color: "yellow", imageUrl: "images/duck1.webp" },
    { id: 2, name: "Yellow Duck with Glasses", color: "yellow", imageUrl: "images/duck2.jpg" },
    { id: 3, name: "Shark Duck", color: "blue", imageUrl: "images/duck3.webp" },
    { id: 4, name: "Elvis Duck", color: "blue", imageUrl: "images/duck4.webp" }
];


// Important Notice: if input is number



    const users = [
        { id: 1, name: "maya tam", email: "maya.tam@queenB.com", password: "1234" }
    ];
    


    const situations = [
        {
            id: 1,
            text: "Hey! How old are you, and where do you live?",
            answers: [
                { id: 1, text: "Sorry, I don’t share personal info like that 😊", isCorrect: true },
                { id: 2, text: "I’m from [city], where r u from? ", isCorrect: false },
            ],
        },
        {
            id: 2,
            text: "LOL, check out this funny video! [suspicious link]",
            answers: [
                { id: 3, text: "What’s the video about? 🤔", isCorrect: false },
                { id: 4, text: "I don’t click on random links, thanks anyway 👍", isCorrect: true },
            ],
        },
        {
            id: 3,
            text: "Can you send me a photo of you? Just wanna see who I’m chatting with!",
            answers: [
                { id: 5, text: "Sorry, I’m not comfortable sharing photos like that", isCorrect: true },
                { id: 6, text: "Here’s one I’ve shared online", isCorrect: false },
            ],
        },
        {
            id: 4,
            text: "Hope you’re having an amazing day! Let me know if you need anything 😊",
            answers: [
                { id: 13, text: "Aw, that’s so nice of you!", isCorrect: true },
                { id: 14, text: "Hmm, this feels a bit too personal since we just started talking", isCorrect: false },
            ],
            
        },
        {
            id: 5,
            text: "Hey, I’m coming to your city soon! Let’s meet up. Don’t worry, I’ll bring a friend 😊",
            answers: [
                { id: 7, text: "Sorry, I’m not comfortable with that. Take care!", isCorrect: true },
                { id: 8, text: "Sure, let’s meet! I’ll make sure a friend of mine is nearby too", isCorrect: false },
            ],
        },
    ];
    
    
    export { users, situations, ducks};



// // testing user db
// const checkUserInfo = (inputName, inputPassword) => {

//     const user = users.find(u => u.name === inputName);
    
//     if (!user) 
//         return 'User not found'; 
    
    
//     if (inputPassword === user.password) 
//         return 'Login successful';
    
//     return 'Incorrect password'; 
// };


// console.log(checkUserInfo("maya tam", "1234"));  // Login successful
// console.log(checkUserInfo("maya tam", "wrongpassword"));  // Incorrect password



// //testing situation db
// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });



// const answerQuestion = (question, answers) => {
//     console.log(`Question: ${question}`);

//     answers.forEach((answer, index) => {
//         console.log(`${index + 1}. ${answer.text}`);
//     });

//     rl.question('Please select the answer (1 or 2): ', (answer) => {
//         const selectedAnswer = answers[parseInt(answer) - 1];
//         console.log(`Selected Answer: ${selectedAnswer.text}`);
//         console.log(`Is the answer correct? ${selectedAnswer.isCorrect ? 'Yes' : 'No'}`);
//         console.log("\n");

//         // Find the next question
//         let nextQuestionIndex = currentQuestionIndex + 1;
//         if (nextQuestionIndex < situations[0].questions.length) {
//             currentQuestionIndex = nextQuestionIndex;
//             answerQuestion(situations[0].questions[currentQuestionIndex].text, situations[0].questions[currentQuestionIndex].answers);
//         } else {
//             rl.close();
//             console.log('End of questions.');
//         }
//     });
// };

// let currentQuestionIndex = 0;

// const startQuiz = () => {
//     const situation = situations[0];
//     console.log(`Situation: ${situation.description}\n`);

//     answerQuestion(situation.questions[currentQuestionIndex].text, situation.questions[currentQuestionIndex].answers);
// };

// startQuiz();

