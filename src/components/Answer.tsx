import React from 'react'; 
import { Box, Typography } from "@mui/material";

type Props = {
    answer: string;
}

export const Answer: React.FC<Props> = ({ answer }) => {

    return (
        <>
            <Box
                sx={{ padding: 2, border: '1px solid #ddd', borderRadius: '4px' }}
            >
                <Typography sx={{ fontSize: '1.2rem', color: 'blue' }}>
                    {answer}
                </Typography>

            </Box>
        </>
    )
}