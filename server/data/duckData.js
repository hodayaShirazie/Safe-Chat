const ducks = [
    { id: 1, name: "Yellow Duck", color: "yellow", imageUrl: "images/duck1.webp" },
    { id: 2, name: "Yellow Duck with Glasses", color: "yellow", imageUrl: "images/duck2.jpg" },
    { id: 3, name: "Shark Duck", color: "blue", imageUrl: "images/duck3.webp" },
    { id: 4, name: "Elvis Duck", color: "blue", imageUrl: "images/duck4.webp" }
];




    const users = [
        { id: 1, name: "maya tam", email: "maya.tam@queenB.com", password: "1234" }
    ];

    

    const situations = [
        {
            id: 1,
            text: "Hey! You seem really nice. What kind of things do you like to do for fun?",
            answers: [
                {
                    id: 1,
                    text: "I usually keep things like that private, but thanks for asking 😊",
                    isCorrect: true,
                    nextId: 2,
                },
                {
                    id: 2,
                    text: "Oh, I love reading books! What about you?",
                    isCorrect: false,
                    nextId: 3,
                },
            ],
        },
        {
            id: 2,
            text: "That’s cool. It’s smart to stay private online. Do you like chatting with new people?",
            answers: [
                {
                    id: 3,
                    text: "Sometimes, but I prefer to keep things light and casual.",
                    isCorrect: true,
                    nextId: 4,
                },
                {
                    id: 4,
                    text: "Yeah, I love meeting new people. Tell me about yourself!",
                    isCorrect: false,
                    nextId: 5,
                },
            ],
        },
        {
            id: 3,
            text: "Oh, cool! You seem really open. Do you want to keep chatting privately somewhere else?",
            answers: [
                {
                    id: 5,
                    text: "I’m comfortable chatting here, thanks!",
                    isCorrect: true,
                    nextId: 4,
                },
                {
                    id: 6,
                    text: "Sure, where should we move the chat to?",
                    isCorrect: false,
                    nextId: 6,
                },
            ],
        },
        {
            id: 4,
            text: "It’s nice chatting with you. Remember, it’s always good to stay safe online!",
            answers: [],
        },
        {
            id: 5,
            text: "You seem so open! Can I tell you a secret? Just between us.",
            answers: [
                {
                    id: 7,
                    text: "I don’t think that’s a good idea. It’s better to talk about safe topics.",
                    isCorrect: true,
                    nextId: 4,
                },
                {
                    id: 8,
                    text: "Sure, I won’t tell anyone.",
                    isCorrect: false,
                    nextId: 6,
                },
            ],
        },
        {
            id: 6,
            text: "Hmm... This conversation is getting a bit too personal. It’s a good time to step away.",
            answers: [],
        },
    ];
    
    export { users, situations, ducks};

