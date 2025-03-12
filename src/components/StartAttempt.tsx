import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
    function startQuiz(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setQuizInProgress(true);
        }
    }
    function stopQuiz(): void {
        setQuizInProgress(false);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <div>
                <h3>Attempts Left: {attempts}</h3>
            </div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={quizInProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={stopQuiz}
                    disabled={!quizInProgress}
                    className="ml-2"
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={mulligan}
                    disabled={quizInProgress}
                    className="ml-2"
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
