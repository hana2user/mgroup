import React from 'react'; 
import { Box, Typography } from "@mui/material";


interface AnswerProps {
    answer: string;
}

export const Answer: React.FC<AnswerProps> = ({ answer }) => {
    let paragraphs = [];

    try {
        const parsedAnswer = JSON.parse(answer);
        paragraphs = parsedAnswer.content.split('\n');
    } catch (e) {  
        paragraphs = [answer];
    }

    return (
        <div className='w-full sm:w-[600px]'>
            <Box
                sx={{ padding: 2, border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fc7716' }}
            > 
                {paragraphs.map((p: string, i: number) => {
                return <Typography 
                    sx={{ 
                        fontSize: '1rem', 
                        color: '#225f86', 
                        textAlign: 'justify',
                        textIndent: '2em',
                        }}
                    key={i}>
                    {p}
                </Typography>}
                )}
            </Box>
        </div>
    )
}