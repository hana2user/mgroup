type Props = {
    question: String;
}

const server = 'https://mgroup-botai.onrender.com/content';

export const fetchServer = async ({ question }: Props): Promise<Response> => {

    try {
        if (!question.trim()) {
            throw new Error('Question cannot be empty');
        }

        const myHeaders = {
            "Content-Type": "application/json",
        };
        const raw = JSON.stringify({
            "message": {question}
          });
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            body: raw,
            redirect: "follow" as RequestRedirect
          };
       
        const response = await fetch(server, requestOptions);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
        }
        return response;

    } catch (e: any) {
        console.error(e.message);
        throw new Error(e.message || 'An error occurred');
    }

}