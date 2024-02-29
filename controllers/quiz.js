const openai = require("../config/openaiclient");

module.exports = {
    // Function to start or continue the quiz
    handleQuizStep: (req, res) => {
        // Initialize or retrieve existing session data
        if (!req.session.quizData) {
            req.session.quizData = { currentStep: "start", selectedAnswers: [] };
        }

        const { currentStep, selectedAnswers } = req.session.quizData;

        // Handle 'Start' button and 'Results' button
        if (req.body.action === "start") {
            // Reset for a new quiz attempt
            req.session.quizData = { currentStep: "1", selectedAnswers: [] };
            return res.redirect('/quiz'); // Redirect to the first question
        } else if (req.body.action === "results") {
            // Proceed to results and AI narrative generation
            return res.redirect('/quiz/results');
        }

        // Handle user's answer selection
        if (req.body.userInput) {
            // Save the user's response
            selectedAnswers.push(req.body.userInput);

            // Determine the next step based on the current step's configuration
            const nextStep = quizSteps[currentStep].nextStep;
            req.session.quizData.currentStep = nextStep;

            // Check if the next step is the end of the quiz
            if (nextStep === "end") {
                // Prepare for displaying results or generating AI narrative
                return res.redirect('/quiz/end');
            }
        }

        // Render the current step of the quiz
        const stepData = quizSteps[currentStep];
        res.render('quiz', { stepData, selectedAnswers });
    },

    // Function to display results and initiate AI narrative generation
    displayResults: async (req, res) => {
        const { selectedAnswers } = req.session.quizData;

        // Generate narrative based on selected answers (this part will integrate with OpenAI)
        // For now, we'll just display the selected answers
        res.render('results', { selectedAnswers });

        // After displaying results, you might want to clear the session or provide an option to restart the quiz
    }
};
