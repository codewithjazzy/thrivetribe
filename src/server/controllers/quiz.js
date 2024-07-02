import openai from "../config/openaiclient.js";


const quizSteps = {
    "start": {
        interMessage: "Hey there! 👋🏾 Welcome to your personal therapy exploration journey. We're just gonna have a chill chat about what vibes with you when it comes to therapy. Pick the answer that feels right, okay? Let's get this journey started!",
        nextStep: "1"
    },
    "1": {
        question: "You're hitting a rough patch. What's your go-to move?",
        answers: [
            { id: 1-1, text: "I break it down, find the glitch in my thoughts, and work it out.", type: "CBT" },
            { id: 1-2, text: "I dig deep, could be something from way back pushing my buttons.", type: "Psychodynamic" },
            { id: 1-3, text: "I tune into my feelings, try to get what's really going on with me.", type: "Humanistic" },
            { id: 1-4, text: "I pull out my toolkit, gotta keep those emotions in check, you know?", type: "DBT" },
            { id: 1-5, text: "I think about my crew, how we're all in this together.", type: "Family Therapy" },
        ],
        nextStep: "2"
    },
    "2": {
        interMessage: "Cool, cool. Let's keep rolling. 🛼",
        question: "What's drawing you to therapy?",
        answers: [
            { id: 2-1, text: "I need some solid tools to sort out these mind games.", type: "CBT" },
            { id: 2-2, text: "I wanna get the lowdown on how my past plays into my now.", type: "Psychodynamic" },
            { id: 2-3, text: "I'm all about growing into my best self.", type: "Humanistic" },
            { id: 2-4, text: "I'm here to level up my emotional game and how I vibe with others.", type: "DBT" },
            { id: 2-5, text: "I'm trying to get the fam dynamics to hit the right note.", type: "Family Therapy" },
        ],
        nextStep: "3"
    },
    "3": {
        interMessage: "Got it. On to the next one! ➡️",
        question: "What's your endgame with therapy?",
        answers: [
            { id: 3-1, text: "I wanna nail down some strategies for when life gets tricky.", type: "CBT" },
            { id: 3-2, text: "I'm looking for clues on what's been holding me back.", type: "Psychodynamic" },
            { id: 3-3, text: "I'm chasing that deep, fulfilling sense of who I am.", type: "Humanistic" },
            { id: 3-4, text: "I'm all about mastering the chill in the storm, with peeps and all.", type: "DBT" },
            { id: 3-5, text: "I'm aiming for that smooth family groove, no more clashes.", type: "Family Therapy" },
        ],
        nextStep: "4"
    },
    "4": {
        interMessage: "Alright, next question coming up! 🚀",
        question: "How do you tackle life's curveballs?",
        answers: [
            { id: 4-1, text: "I'm all about changing the game, tweaking my moves and thoughts.", type: "CBT" },
            { id: 4-2, text: "I rewind, think about why I'm playing the game this way.", type: "Psychodynamic" },
            { id: 4-3, text: "I focus on my strengths, how I can grow from this.", type: "Humanistic" },
            { id: 4-4, text: "I've got a playbook of skills for just these moments.", type: "DBT" },
            { id: 4-5, text: "I look at my team, see how we can switch up our play together.", type: "Family Therapy" },
        ],
        nextStep: "5"
    },
    "5": {
        interMessage: "Nice, nice. What's next? 🎉",
        question: "When it comes to growing into yourself, what matters most to you?",
        answers: [
            { id: 5-1, text: "Picking up skills to dodge life's punches.", type: "CBT" },
            { id: 5-2, text: "Diving into the deep end, figuring out my old scars.", type: "Psychodynamic" },
            { id: 5-3, text: "Blooming into the real me, no masks.", type: "Humanistic" },
            { id: 5-4, text: "Building a toolbox for when emotions and relationships get real.", type: "DBT" },
            { id: 5-5, text: "Nurturing our family tree, making sure we all thrive.", type: "Family Therapy" },
        ],
        nextStep: "6"
    },
    "6": {
        interMessage: "Okay, loving the insights. Let's move on! 🌟",
        question: "When life's got you in a tight spot, who do you turn to?",
        answers: [
            { id: 6-1, text: "I hit the books, or anything that can give me a new strategy.", type: "CBT" },
            { id: 6-2, text: "I reflect on my go-tos, maybe there's a pattern there?", type: "Psychodynamic" },
            { id: 6-3, text: "I get real with myself, take some 'me' time to connect.", type: "Humanistic" },
            { id: 6-4, text: "I reach for my tried-and-true coping tricks, keeps me grounded.", type: "DBT" },
            { id: 6-5, text: "It's a family huddle; we figure it out together.", type: "Family Therapy" },
        ],
        nextStep: "7"
    },
    "7": {
        interMessage: "Great answer! Let's keep the vibe going. 👏🏾",
        question: "What's your vibe when it comes to opening up?",
        answers: [
            { id: 7-1, text: "Just the facts, I like keeping it straight to the point.", type: "CBT" },
            { id: 7-2, text: "I'm down to explore, even if it means going way back.", type: "Psychodynamic" },
            { id: 7-3, text: "I'm all about being authentic, showing the real me.", type: "Humanistic" },
            { id: 7-4, text: "I'm open, especially if it's about handling my emotions better", type: "DBT" },
            { id: 7-5, text: "I'm game if it's about getting us to communicate better.", type: "Family Therapy" },
        ],
        nextStep: "8"
    },
    "8": {
        interMessage: "Love that honesty. Next up! 💖",
        question: "How do you feel about change?",
        answers: [
            { id: 8-1, text: "I'm all for it if I've got the right tools to handle it.", type: "CBT" },
            { id: 8-2, text: "I'm curious about it, especially if it helps me understand myself.", type: "Psychodynamic" },
            { id: 8-3, text: "I embrace it; it's all part of my journey.", type: "Humanistic" },
            { id: 8-4, text: "I'm ready, as long as I know how to stay balanced.", type: "DBT" },
            { id: 8-5, text: "It's good if it helps us all vibe better together.", type: "Family Therapy" },
        ],
        nextStep: "9"
    },
    "9": {
        interMessage: "Change is good! What's the next step? 🦋",
        question: "What's your dream outcome from therapy?",
        answers: [
            { id: 9-1, text: "A playbook full of moves for every life scenario.", type: "CBT" },
            { id: 9-2, text: "A map that shows me how my past shapes my present.", type: "Psychodynamic" },
            { id: 9-3, text: "A mirror that reflects my truest, most vibrant self.", type: "Humanistic" },
            { id: 9-4, text: "A toolkit that keeps my emotions and relationships smooth.", type: "DBT" },
            { id: 9-5, text: "A blueprint for a home where everyone feels heard and valued.", type: "Family Therapy" },
        ],
        nextStep: "10"
    },
    "10": {
        interMessage: "Dreaming big, I like it! One more to go. ✨",
        question: "How do you know when you've had a good day?",
        answers: [
            { id: 10-1, text: "When I've tackled my to-dos and kept the negative vibes at bay.", type: "CBT" },
            { id: 10-2, text: "When I've had a moment of insight, connecting the dots.", type: "Psychodynamic" },
            { id: 10-3, text: "When I feel in tune with myself and my path.", type: "Humanistic" },
            { id: 10-4, text: "When I've stayed zen, no matter what came my way.", type: "DBT" },
            { id: 10-5, text: "When the fam's in sync, and we're all feeling good together.", type: "Family Therapy" },
        ],
        nextStep: "end"
    },
    "end": {
        interMessage: "And that's a wrap! Let's see what we've discovered together. 🔍",
    }
};



export const getQuiz = (req, res) => {
    if (!req.session.quizData) {
        req.session.quizData = {
            currentStep: null,
            selectedAnswers: [],
            aiResponse: null
        };
    }

    const { quizData } = req.session;
    const { currentStep, aiResponse } = quizData;

    let stepData = null;
    if (currentStep) {
        stepData = quizSteps[currentStep];
    }

    const isStartStep = currentStep === "start";
    const isEndStep = currentStep === "end";
    
    const response = {
        stepData,
        isStartStep,
        isEndStep,
        aiResponse,
        currentStep,
    };
    
    res.json(response)
};


export const handleQuizStep = async (req, res) => {
    try {
        if (!req.session.quizData) {
            req.session.quizData = {
                currentStep: "",
                selectedAnswers: [],
                aiResponse: null
            };
        }

        const { quizData } = req.session
        let { currentStep, selectedAnswers } = quizData;

   
        if (req.body.action === "takeQuiz") {
            req.session.quizData = { currentStep: "start", selectedAnswers: [] };
            return res.json({ message: "Quiz started", quizData: req.session.quizData })
        } else if (req.body.action === "start" || req.body.action === "restart") {
            req.session.quizData = { currentStep: "1", selectedAnswers: [] };
            delete req.session.quizData.aiResponse; 
            return res.json({ message: "Quiz restarted", quizData: req.session.quizData });
        } else if (req.body.action === "results") {
            console.log("Selected Answers:", selectedAnswers);
            return res.json({ message: "Proceed to results", quizData: req.session.quizData });
        }

        if (req.body.userInput) {
            selectedAnswers.push(req.body.userInput);
            const nextStep = quizSteps[currentStep].nextStep;
            req.session.quizData.currentStep = nextStep;
        }

        let stepData = null;
        if (currentStep && quizSteps[currentStep]) {
            stepData = quizSteps[currentStep];
        }

        res.json({ message: "Next question", stepData, quizData: req.session.quizData })
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
};


export const quizAiPrompt = async (req, res) => {
    try {
        const { selectedAnswers } = req.session.quizData;
        let narrative = `Imagine we're sitting down for a heart-to-heart, just two friends chatting about life's ups and downs. Respond with this tone in mind and try to match my tone. Keep your response brief because I plan to do my own research on the therapy type you end up selecting. Here's a bit about what's been on my mind lately: When things get tough, to navigate through the rough patches ${selectedAnswers[0]} What really pulled me toward considering therapy is that ${selectedAnswers[1]} My ultimate goal, or what I'm really hoping to get out of this, is that ${selectedAnswers[2]} Dealing with unexpected challenges, I've found that ${selectedAnswers[3]} Personal growth is huge for me and, when it comes to evolving into who I'm meant to be, what matters most is ${selectedAnswers[4]} In those really tight spots, the ones that test you, for support ${selectedAnswers[5]} Opening up can be tough, but when I do, the vibes are essentially: ${selectedAnswers[6]} Change? Well, ${selectedAnswers[7]} If I could dream up the perfect outcome from therapy, it would be ${selectedAnswers[8]} And how do I know when I've truly had a good day? It's ${selectedAnswers[9]} Based on everything I've shared, keeping it all the way real, which of these therapy types—CBT, Psychodynamic, Humanistic, DBT, or Family Therapy—do you think would vibe best with me?`;

        const result = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{"role":'user',"content":narrative}],
            max_tokens: 150,
        });

        const aiResponse = result.choices[0].message.content;
        req.session.quizData.aiResponse = aiResponse
        
        res.json({ message: "Quiz results", aiResponse });
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred');
    }
};
