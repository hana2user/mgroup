import React from 'react'; 
import { useEffect, useState } from "react";
import { Answer } from "./Answer";
import { Question } from "./Question";
import { fetchServer } from "../utils/fetchServer";
import { HoldQuestion } from "./HoldQuestion";

export const QuestionAnswer: React.FC = () => {

    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');

    useEffect(() => {

        const resFetch = async () => {            
                const resFetch = await fetchServer(question);
                const resText = await resFetch.text();
                setAnswer(resText);
            };

        resFetch().catch((e) => setAnswer(e.message || 'An error occurred'));

    }, [question]);

    return (
        <>
            {!question ?
            <Question question={question} setQuestion={setQuestion} /> :
            <HoldQuestion question={question} />
            }
            {answer && <Answer answer={answer} />}
        </>
    );

};