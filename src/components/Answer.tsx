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
        paragraphs = answer.split('\n');
    }

    return (
        <div className='w-full sm:w-[600px]'>
            <Box
                sx={{ padding: 2, border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fc7716' }}
            > 
                {paragraphs.map((original: string, i: number) => {
                    const isServerMessage = original.startsWith('[Server]');
                    let p = original;
                    if( isServerMessage ) {
                        p = p.replace('[Server]: ', ' - ');
                        }
                return <Typography 
                    sx={{ 
                        fontSize: '1rem', 
                        color: isServerMessage? '#ffffff' : '#225f86', 
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