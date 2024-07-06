import { useEffect, useState } from "react";


export default function Quiz() {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/quiz");
                const data = await res.json();
                console.log(data)
                setQuizData(data);
            } catch (error) {
                console.error('error', error)
            }
        }
        fetchQuiz();
    }, []);

    const { stepData, isStartStep, isEndStep, aiResponse, currentStep } = quizData;

    const handleButtonClick = async (action, userInput) => {
        const url = action === "results" ? "api/quiz/results" : "api/quiz/progress"
        const body = userInput ? { userInput } : { action }
        console.log("Button Clicked", action, userInput)

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (res.ok) {
                const data = await res.json();
                console.log("Data Received", data)
                setQuizData(data)
            }
        } catch (error) {
            console.error('error', error)
        }
    };


    return (
        <main>
            <section>
                {!currentStep && !aiResponse && (
                    <div>
                        <h1>Welcome to Your Personal Therapy Exploration Quiz!</h1>
                        <p>Embarking on a journey toward mental wellness is a brave and transformative step. This quiz is designed to be your companion as you explore the therapeutic paths that might resonate with your unique experiences and emotional landscape.</p>
                        <p>Our goal is to introduce you to various therapy styles through a series of thoughtful questions. By reflecting on your preferences, coping mechanisms, and emotional tendencies, we aim to provide you with insights that could guide you toward the most compatible therapeutic approaches.</p>
                        <p>Ready to Begin? Dive in with an open heart and an open mind. Your journey to deeper self-understanding starts here. When you're ready, hit the "Take Quiz" button, and let's explore the therapeutic possibilities together.</p>
                    </div>
                )}
                <div>
                    {!currentStep && !aiResponse && (
                        <button onClick={() => handleButtonClick("takeQuiz")}>Take The Quiz</button>
                    )}
                </div>
            </section>

            <section className="">
                    {stepData && stepData.interMessage && (
                        <div className="">
                            <p>{stepData.interMessage}</p>
                        </div>
                    )}

                    {isStartStep && (
                        <div>
                            <button onClick={() => handleButtonClick("start")}>Start Quiz</button>
                        </div>
                    )}

                    {stepData && stepData.question && (
                        <div className="className">
                            <p>{stepData.question}</p>
                            <ul>
                                {stepData.answers.map(answer => (
                                    <li key={answer.id}>
                                        <button onClick={() => handleButtonClick(null, answer.text)}>{answer.text}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {isEndStep && !aiResponse && (
                        <div>
                            <button onClick={() => handleButtonClick("results")}>See Your Results</button>
                        </div>
                    )}

                    {aiResponse && (
                        <div>
                            <h3>Result:</h3>
                            <p>{aiResponse}</p>
                        </div>
                    )}

                    {((currentStep !== "start" && currentStep !== null) || aiResponse) && (
                        <div>
                            <button onClick={() => handleButtonClick("restart")}>Restart Quiz</button>
                        </div>
                    )}
            </section>
        </main>
    )
}