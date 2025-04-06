import React from 'react'; 
import { TextareaForm } from "./TextareaForm";

type Props = {
    question: string;
    setQuestion: (s: string) => void;
}

export const Question: React.FC<Props> = ({question, setQuestion}) => {

    return (
        <>
        <TextareaForm setQuestion={setQuestion}/>
        <div>{question}</div>
        </>
    )
}