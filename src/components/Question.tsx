type Props = {
    question: String;
    setQuestion: (s: String) => void;
}

export const Question: React.FC<Props> = ({question, setQuestion}) => {

    return (
        <>
        <div>{question}</div>
        </>
    )
}