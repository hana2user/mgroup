import { useEffect, useState } from "react";
import { Answer } from "./Answer";
import { Question } from "./Question";
import { fetchServer } from "../utils/fetchServer";

export const QuestionAnswer: React.FC = () => {

    const [question, setQuestion] = useState<String>('');
    const [answer, setAnswer] = useState<String>('');

    useEffect(() => {

        const resFetch = async () => {
            try {
                const resFetch = await fetchServer({ question });
                const resText = await resFetch.text();
                setAnswer(resText);
            } catch (e: any) {
                setAnswer(e.message || 'An error occurred');
            }
        };

        resFetch();

    }, [question]);

    return (
        <>
            <Question question={question} setQuestion={setQuestion} />
            {answer && <Answer answer={answer} />}
        </>
    );

};