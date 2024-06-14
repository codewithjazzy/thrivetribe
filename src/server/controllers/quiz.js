import openai from ("../config/openaiclient");


const quizSteps = {
    "start": {
        interMessage: "Hey there! 👋🏾 Welcome to your personal therapy exploration journey. We're just gonna have a chill chat about what vibes with you when it comes to therapy. Pick the answer that feels right, okay? Let's get this journey started!",
        nextStep: "1"
    },
    "1": {
        question: "You're hitting a rough patch. What's your go-to move?",
        answers: [
            { text: "I break it down, find the glitch in my thoughts, and work it out.", type: "CBT" },
            { text: "I dig deep, could be something from way back pushing my buttons.", type: "Psychodynamic" },
            { text: "I tune into my feelings, try to get what's really going on with me.", type: "Humanistic" },
            { text: "I pull out my toolkit, gotta keep those emotions in check, you know?", type: "DBT" },
            { text: "I think about my crew, how we're all in this together.", type: "Family Therapy" },
        ],
        nextStep: "2"
    },
    "2": {
        interMessage: "Cool, cool. Let's keep rolling. 🛼",
        question: "What's drawing you to therapy?",
        answers: [
            { text: "I need some solid tools to sort out these mind games.", type: "CBT" },
            { text: "I wanna get the lowdown on how my past plays into my now.", type: "Psychodynamic" },
            { text: "I'm all about growing into my best self.", type: "Humanistic" },
            { text: "I'm here to level up my emotional game and how I vibe with others.", type: "DBT" },
            { text: "I'm trying to get the fam dynamics to hit the right note.", type: "Family Therapy" },
        ],
        nextStep: "3"
    },
    "3": {
        interMessage: "Got it. On to the next one! ➡️",
        question: "What's your endgame with therapy?",
        answers: [
            { text: "I wanna nail down some strategies for when life gets tricky.", type: "CBT" },
            { text: "I'm looking for clues on what's been holding me back.", type: "Psychodynamic" },
            { text: "I'm chasing that deep, fulfilling sense of who I am.", type: "Humanistic" },
            { text: "I'm all about mastering the chill in the storm, with peeps and all.", type: "DBT" },
            { text: "I'm aiming for that smooth family groove, no more clashes.", type: "Family Therapy" },
        ],
        nextStep: "4"
    },
    "4": {
        interMessage: "Alright, next question coming up! 🚀",
        question: "How do you tackle life's curveballs?",
        answers: [
            { text: "I'm all about changing the game, tweaking my moves and thoughts.", type: "CBT" },
            { text: "I rewind, think about why I'm playing the game this way.", type: "Psychodynamic" },
            { text: "I focus on my strengths, how I can grow from this.", type: "Humanistic" },
            { text: "I've got a playbook of skills for just these moments.", type: "DBT" },
            { text: "I look at my team, see how we can switch up our play together.", type: "Family Therapy" },
        ],
        nextStep: "5"
    },
    "5": {
        interMessage: "Nice, nice. What's next? 🎉",
        question: "When it comes to growing into yourself, what matters most to you?",
        answers: [
            { text: "Picking up skills to dodge life's punches.", type: "CBT" },
            { text: "Diving into the deep end, figuring out my old scars.", type: "Psychodynamic" },
            { text: "Blooming into the real me, no masks.", type: "Humanistic" },
            { text: "Building a toolbox for when emotions and relationships get real.", type: "DBT" },
            { text: "Nurturing our family tree, making sure we all thrive.", type: "Family Therapy" },
        ],
        nextStep: "6"
    },
    "6": {
        interMessage: "Okay, loving the insights. Let's move on! 🌟",
        question: "When life's got you in a tight spot, who do you turn to?",
        answers: [
            { text: "I hit the books, or anything that can give me a new strategy.", type: "CBT" },
            { text: "I reflect on my go-tos, maybe there's a pattern there?", type: "Psychodynamic" },
            { text: "I get real with myself, take some 'me' time to connect.", type: "Humanistic" },
            { text: "I reach for my tried-and-true coping tricks, keeps me grounded.", type: "DBT" },
            { text: "It's a family huddle; we figure it out together.", type: "Family Therapy" },
        ],
        nextStep: "7"
    },
    "7": {
        interMessage: "Great answer! Let's keep the vibe going. 👏🏾",
        question: "What's your vibe when it comes to opening up?",
        answers: [
            { text: "Just the facts, I like keeping it straight to the point.", type: "CBT" },
            { text: "I'm down to explore, even if it means going way back.", type: "Psychodynamic" },
            { text: "I'm all about being authentic, showing the real me.", type: "Humanistic" },
            { text: "I'm open, especially if it's about handling my emotions better", type: "DBT" },
            { text: "I'm game if it's about getting us to communicate better.", type: "Family Therapy" },
        ],
        nextStep: "8"
    },
    "8": {
        interMessage: "Love that honesty. Next up! 💖",
        question: "How do you feel about change?",
        answers: [
            { text: "I'm all for it if I've got the right tools to handle it.", type: "CBT" },
            { text: "I'm curious about it, especially if it helps me understand myself.", type: "Psychodynamic" },
            { text: "I embrace it; it's all part of my journey.", type: "Humanistic" },
            { text: "I'm ready, as long as I know how to stay balanced.", type: "DBT" },
            { text: "It's good if it helps us all vibe better together.", type: "Family Therapy" },
        ],
        nextStep: "9"
    },
    "9": {
        interMessage: "Change is good! What's the next step? 🦋",
        question: "What's your dream outcome from therapy?",
        answers: [
            { text: "A playbook full of moves for every life scenario.", type: "CBT" },
            { text: "A map that shows me how my past shapes my present.", type: "Psychodynamic" },
            { text: "A mirror that reflects my truest, most vibrant self.", type: "Humanistic" },
            { text: "A toolkit that keeps my emotions and relationships smooth.", type: "DBT" },
            { text: "A blueprint for a home where everyone feels heard and valued.", type: "Family Therapy" },
        ],
        nextStep: "10"
    },
    "10": {
        interMessage: "Dreaming big, I like it! One more to go. ✨",
        question: "How do you know when you've had a good day?",
        answers: [
            { text: "When I've tackled my to-dos and kept the negative vibes at bay.", type: "CBT" },
            { text: "When I've had a moment of insight, connecting the dots.", type: "Psychodynamic" },
            { text: "When I feel in tune with myself and my path.", type: "Humanistic" },
            { text: "When I've stayed zen, no matter what came my way.", type: "DBT" },
            { text: "When the fam's in sync, and we're all feeling good together.", type: "Family Therapy" },
        ],
        nextStep: "end"
    },
    "end": {
        interMessage: "And that's a wrap! Let's see what we've discovered together. 🔍",
    }
};



export const getQuiz = (req, res) => {
    if (!req.session.quizData) {
        req.session.quizData = { currentStep: "", selectedAnswers: [] };
    }
    const currentStep = req.session.quizData.currentStep;
    let stepData = null;
    if (currentStep) {
        stepData = quizSteps[req.session.quizData.currentStep];
    }
    const isStartStep = req.session.quizData.currentStep === "start";
    const isEndStep = req.session.quizData.currentStep === "end";
    const aiResponse = req.session.quizData.aiResponse || null;
    res.render("quiz.ejs", { stepData, isStartStep, isEndStep, aiResponse, currentStep });
};


// Function to start or continue the quiz
export const handleQuizStep = async (req, res) => {
    try {
    // Initialize or retrieve existing session data
    if (!req.session.quizData) {
        req.session.quizData = { currentStep: "", selectedAnswers: [] };
    }

    const { currentStep, selectedAnswers } = req.session.quizData;

    // Handle 'Start', 'Restart', 'Take Quiz' and 'Results' button
    if (req.body.action === "takeQuiz") {
        //initialize the quiz
        req.session.quizData = { currentStep: "start", selectedAnswers: [] };
        return res.redirect('/quiz'); // Redirect to start message
    } else if (req.body.action === "start" || req.body.action === "restart") {
        // Start the quiz at the first question
        req.session.quizData = { currentStep: "1", selectedAnswers: [] };
        delete req.session.aiResponse; // Clear the AI response
        return res.redirect('/quiz'); // Redirect to the first question
    } else if (req.body.action === "results") {
        // Proceed to results and AI narrative generation
        console.log("Selected Answers:", req.session.quizData.selectedAnswers);
        /* this button needs to call the quizAiPrompt function and return the results from the Model */
        return res.redirect('/quiz/results');
    }

    // Handle user's answer selection
    if (req.body.userInput) {
        // Save the user's response
        selectedAnswers.push(req.body.userInput);

        // Determine the next step based on the current step's configuration
        const nextStep = quizSteps[currentStep].nextStep;
        req.session.quizData.currentStep = nextStep;
    }

    // Render the current step of the quiz
    let stepData = null;
    if (currentStep && quizSteps[currentStep]) {
        stepData = quizSteps[currentStep];
    }
    res.redirect('/quiz'); // Redirect to the next question
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
};


// Function to generate the AI narrative based on the user's quiz responses
export const quizAiPrompt = async (req, res) => {
    try {
        const { selectedAnswers } = req.session.quizData; // Destructure to get selectedAnswers from session data
        let narrative = `Imagine we're sitting down for a heart-to-heart, just two friends chatting about life's ups and downs. Respond with this tone in mind and try to match my tone. Keep your response brief because I plan to do my own research on the therapy type you end up selecting. Here's a bit about what's been on my mind lately: When things get tough, to navigate through the rough patches ${selectedAnswers[0]} What really pulled me toward considering therapy is that ${selectedAnswers[1]} My ultimate goal, or what I'm really hoping to get out of this, is that ${selectedAnswers[2]} Dealing with unexpected challenges, I've found that ${selectedAnswers[3]} Personal growth is huge for me and, when it comes to evolving into who I'm meant to be, what matters most is ${selectedAnswers[4]} In those really tight spots, the ones that test you, for support ${selectedAnswers[5]} Opening up can be tough, Opening up can be tough, but when I do, the vibes are essentially: ${selectedAnswers[6]} Change? Well, ${selectedAnswers[7]} If I could dream up the perfect outcome from therapy, it would be ${selectedAnswers[8]} And how do I know when I've truly had a good day? It's ${selectedAnswers[9]} Based on everything I've shared, keeping it all the way real, which of these therapy types—CBT, Psychodynamic, Humanistic, DBT, or Family Therapy—do you think would vibe best with me?`;

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{"role":'user',"content":narrative}],
            max_tokens: 150,
        });

        req.session.quizData.aiResponse = response.choices[0].message.content;
        
        res.redirect('/quiz');
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred');
    }
};
