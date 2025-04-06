import React from 'react'; 
import { useEffect, useState } from "react";
import { Answer } from "./Answer";
import { fetchServer } from "../utils/fetchServer";
import { HoldQuestion } from "./HoldQuestion";
import { Alert, Button } from '@mui/material';
import { QuestionForm } from './QuestionForm';

export const QuestionAnswer: React.FC = () => {

    const [question, setQuestion] = useState<string | null>(null);
    const [answer, setAnswer] = useState<string | null>(null);

    useEffect(() => {
        if(question) {
            const resFetch = async () => {            
                    const resFetch = await fetchServer(question);
                    const resText = await resFetch.text();
                    setAnswer(resText);
                };

            resFetch().catch((e) => setAnswer(e.message || 'An error occurred'));
        }

    }, [question]);

    return (
        <div className="p-2 m-2 w-full sm:w-[600px] mx-auto flex flex-col items-center justify-center space-y-2">
            <img src="/Logo-color@1x.svg" />
            {!question ?
            <QuestionForm setQuestion={setQuestion} /> :
            <HoldQuestion question={question} />
            }
            {question && !answer && 
            <Alert variant="outlined" severity="info">
                Please wait while the server responds.
            </Alert>}
            {answer && <Answer answer={answer} />}
            {answer && <Button variant="outlined" 
                  style={{ 
                    width: 200,
                  }}
                  onClick={() => {
                    setQuestion(null);
                    setAnswer(null);
                  }}
                  >
                    Ask else
                </Button>}
        </div>
    );

};