type Props = {
    answer: String;
}

export const Answer: React.FC<Props> = ({answer}) => {

    return (
        <>
        <div>{answer}</div>
        </>
    )
}