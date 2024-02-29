// AI Model setup for the quiz
const openai = require("../config/openaiclient");

module.exports = {
    quizAiPrompt: async (req, res) => {
        try {
            let narrative = `Imagine we're sitting down for a heart-to-heart, just two friends chatting about life's ups and downs. Respond with this tone. Keep your response brief because I plan to do my own research on the therapy type you end up selecting. Here's a bit about what's been on my mind lately: When things get tough, to navigate through the rough patches ${sessionData.userResponses[0]} What really pulled me toward considering therapy is that ${sessionData.userResponses[1]} My ultimate goal, or what I'm really hoping to get out of this, is that ${sessionData.userResponses[2]} Dealing with unexpected challenges, I've found that ${sessionData.userResponses[3]} Personal growth is huge for me and, when it comes to evolving into who I'm meant to be, what matters most is ${sessionData.userResponses[4]} In those really tight spots, the ones that test you, for support ${sessionData.userResponses[5]} Opening up can be tough, Opening up can be tough, but when I do, the vibes are essentially: ${sessionData.userResponses[6]} Change? Well, ${sessionData.userResponses[7]} If I could dream up the perfect outcome from therapy, it would be ${sessionData.userResponses[8]} And how do I know when I've truly had a good day? It's ${sessionData.userResponses[9]} Based on everything I've shared, keeping it all the way real, which of these therapy types—CBT, Psychodynamic, Humanistic, DBT, or Family Therapy—do you think would vibe best with me?`;

            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{"role":'user',"content":narrative}],
                max_tokens: 100,
            })
            console.log(response.choices[0].message.content)
            res.send(response.choices[0].message.content)
        } catch (err) {
            console.log(err);
        }
    },
    getQuiz: (req, res) => {
        let sessionData = req.session.quizData || { currentStep: "start", userResponses: [], message: "Hey there! 👋🏾 Welcome to your personal therapy exploration journey. We're just gonna have a chill chat about what vibes with you when it comes to therapy. Pick the answer that feels right, okay? Let's get this journey started!" }; // Ensure sessionData is initialized
        console.log(sessionData);
        res.render('quiz.ejs', { sessionData: sessionData }); // Pass initialized sessionData to the EJS template
    },
    handleQuizStep: async (req, res) => {
        try {
            const userInput = req.body.userInput;
            let sessionData = req.session.quizData || {
                currentStep: "start",
                userResponses: [],
                message: ""
            };
        
            const quizSteps = {
                "start": {
                    message: "Hey there! 👋🏾 Welcome to your personal therapy exploration journey. We're just gonna have a chill chat about what vibes with you when it comes to therapy. Pick the answer that feels right, okay? Let's get this journey started!",
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
                    interMessage: "Cool, cool. Let's keep rolling. 🛼",
                    nextStep: "2"
                },
                "2": {
                    question: "What's drawing you to therapy?",
                    answers: [
                        { text: "I need some solid tools to sort out these mind games.", type: "CBT" },
                        { text: "I wanna get the lowdown on how my past plays into my now.", type: "Psychodynamic" },
                        { text: "I'm all about growing into my best self.", type: "Humanistic" },
                        { text: "I'm here to level up my emotional game and how I vibe with others.", type: "DBT" },
                        { text: "I'm trying to get the fam dynamics to hit the right note.", type: "Family Therapy" },
                    ],
                    interMessage: "Got it. On to the next one! ➡️",
                    nextStep: "3"
                },
                "3": {
                    question: "What's your endgame with therapy?",
                    answers: [
                        { text: "I wanna nail down some strategies for when life gets tricky.", type: "CBT" },
                        { text: "I'm looking for clues on what's been holding me back.", type: "Psychodynamic" },
                        { text: "I'm chasing that deep, fulfilling sense of who I am.", type: "Humanistic" },
                        { text: "I'm all about mastering the chill in the storm, with peeps and all.", type: "DBT" },
                        { text: "I'm aiming for that smooth family groove, no more clashes.", type: "Family Therapy" },
                    ],
                    interMessage: "Alright, next question coming up! 🚀",
                    nextStep: "4"
                },
                "4": {
                    question: "How do you tackle life's curveballs?",
                    answers: [
                        { text: "I'm all about changing the game, tweaking my moves and thoughts.", type: "CBT" },
                        { text: "I rewind, think about why I'm playing the game this way.", type: "Psychodynamic" },
                        { text: "I focus on my strengths, how I can grow from this.", type: "Humanistic" },
                        { text: "I've got a playbook of skills for just these moments.", type: "DBT" },
                        { text: "I look at my team, see how we can switch up our play together.", type: "Family Therapy" },
                    ],
                    interMessage: "Nice, nice. What's next? 🎉",
                    nextStep: "5"
                },
                "5": {
                    question: "When it comes to growing into yourself, what matters most to you?",
                    answers: [
                        { text: "Picking up skills to dodge life's punches.", type: "CBT" },
                        { text: "Diving into the deep end, figuring out my old scars.", type: "Psychodynamic" },
                        { text: "Blooming into the real me, no masks.", type: "Humanistic" },
                        { text: "Building a toolbox for when emotions and relationships get real.", type: "DBT" },
                        { text: "Nurturing our family tree, making sure we all thrive.", type: "Family Therapy" },
                    ],
                    interMessage: "Okay, loving the insights. Let's move on! 🌟",
                    nextStep: "6"
                },
                "6": {
                    question: "When life's got you in a tight spot, who do you turn to?",
                    answers: [
                        { text: "I hit the books, or anything that can give me a new strategy.", type: "CBT" },
                        { text: "I reflect on my go-tos, maybe there's a pattern there?", type: "Psychodynamic" },
                        { text: "I get real with myself, take some 'me' time to connect.", type: "Humanistic" },
                        { text: "I reach for my tried-and-true coping tricks, keeps me grounded.", type: "DBT" },
                        { text: "It's a family huddle; we figure it out together.", type: "Family Therapy" },
                    ],
                    interMessage: "Great answer! Let's keep the vibe going. 👏🏾",
                    nextStep: "7"
                },
                "7": {
                    question: "What's your vibe when it comes to opening up?",
                    answers: [
                        { text: "Just the facts, I like keeping it straight to the point.", type: "CBT" },
                        { text: "I'm down to explore, even if it means going way back.", type: "Psychodynamic" },
                        { text: "I'm all about being authentic, showing the real me.", type: "Humanistic" },
                        { text: "I'm open, especially if it's about handling my emotions better", type: "DBT" },
                        { text: "I'm game if it's about getting us to communicate better.", type: "Family Therapy" },
                    ],
                    interMessage: "Love that honesty. Next up! 💖",
                    nextStep: "8"
                },
                "8": {
                    question: "How do you feel about change?",
                    answers: [
                        { text: "I'm all for it if I've got the right tools to handle it.", type: "CBT" },
                        { text: "I'm curious about it, especially if it helps me understand myself.", type: "Psychodynamic" },
                        { text: "I embrace it; it's all part of my journey.", type: "Humanistic" },
                        { text: "I'm ready, as long as I know how to stay balanced.", type: "DBT" },
                        { text: "It's good if it helps us all vibe better together.", type: "Family Therapy" },
                    ],
                    interMessage: "Change is good! What's the next step? 🦋",
                    nextStep: "9"
                },
                "9": {
                    question: "What's your dream outcome from therapy?",
                    answers: [
                        { text: "A playbook full of moves for every life scenario.", type: "CBT" },
                        { text: "A map that shows me how my past shapes my present.", type: "Psychodynamic" },
                        { text: "A mirror that reflects my truest, most vibrant self.", type: "Humanistic" },
                        { text: "A toolkit that keeps my emotions and relationships smooth.", type: "DBT" },
                        { text: "A blueprint for a home where everyone feels heard and valued.", type: "Family Therapy" },
                    ],
                    interMessage: "Dreaming big, I like it! One more to go. ✨",
                    nextStep: "10"
                },
                "10": {
                    question: "How do you know when you've had a good day?",
                    answers: [
                        { text: "When I've tackled my to-dos and kept the negative vibes at bay.", type: "CBT" },
                        { text: "When I've had a moment of insight, connecting the dots.", type: "Psychodynamic" },
                        { text: "When I feel in tune with myself and my path.", type: "Humanistic" },
                        { text: "When I've stayed zen, no matter what came my way.", type: "DBT" },
                        { text: "When the fam's in sync, and we're all feeling good together.", type: "Family Therapy" },
                    ],
                    interMessage: "And that's a wrap! Let's see what we've discovered together. 🔍",
                    nextStep: "end"
                },
                "end": {
                    message: "And that's a wrap! Let's see what we've discovered together. 🔍"
                }
            };


             if (userInput === "Start Quiz" || !userInput) {
                sessionData.currentStep = quizSteps.start.nextStep;
                sessionData.message = quizSteps.start.message;
            } else if (quizSteps[sessionData.currentStep]) {
                const currentStep = quizSteps[sessionData.currentStep];
                const selectedAnswer = currentStep.answers.find(answer => answer.text === userInput);

                if (selectedAnswer) {
                    sessionData.userResponses.push(selectedAnswer.text);
                    sessionData.currentStep = currentStep.nextStep;

                    const nextStep = quizSteps[sessionData.currentStep];
                    if (nextStep) {
                        sessionData.message = nextStep.question ? `${currentStep.interMessage} ${nextStep.question}` : nextStep.message;
                        sessionData.question = nextStep.question;
                        sessionData.answers = nextStep.answers;
                    }
                } else {
                    sessionData.message = "Please select one of the provided options.";
                }
            } else {
                sessionData.currentStep = "start";
                sessionData.message = "Invalid step, restarting quiz.";
            }

            if (sessionData.currentStep === "end") {
                // Prepare the narrative
                let narrative = `Imagine we're sitting down for a heart-to-heart, just two friends chatting about life's ups and downs. Respond with this tone. Keep your response brief because I plan to do my own research on the therapy type you end up selecting. Here's a bit about what's been on my mind lately: When things get tough, to navigate through the rough patches ${sessionData.userResponses[0]} What really pulled me toward considering therapy is that ${sessionData.userResponses[1]} My ultimate goal, or what I'm really hoping to get out of this, is that ${sessionData.userResponses[2]} Dealing with unexpected challenges, I've found that ${sessionData.userResponses[3]} Personal growth is huge for me and, when it comes to evolving into who I'm meant to be, what matters most is ${sessionData.userResponses[4]} In those really tight spots, the ones that test you, for support ${sessionData.userResponses[5]} Opening up can be tough, Opening up can be tough, but when I do, the vibes are essentially: ${sessionData.userResponses[6]} Change? Well, ${sessionData.userResponses[7]} If I could dream up the perfect outcome from therapy, it would be ${sessionData.userResponses[8]} And how do I know when I've truly had a good day? It's ${sessionData.userResponses[9]} Based on everything I've shared, keeping it all the way real, which of these therapy types—CBT, Psychodynamic, Humanistic, DBT, or Family Therapy—do you think would vibe best with me?`;

                // Call OpenAI API
                const response = await openai.createCompletion({
                    model: "gpt-4",
                    prompt: narrative,
                    max_tokens: 150,
                }); 

                let aiResponse = response.data.choices[0].text.trim(); // Extracting AI's response
                responseMessage = `${aiResponse} To learn more about this result, visit the Types of Therapy tab.`; // Final response to the user
            }
            req.session.quizData = sessionData; 
            res.render('quiz', { sessionData: req.session.quizData });
        } catch (err) {
            console.log(err);
        }
    }
 };
