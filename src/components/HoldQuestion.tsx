import React from 'react'; 
import { Box, Typography } from "@mui/material";

type Props = {
    question: string;
}

export const HoldQuestion: React.FC<Props> = ({ question }) => {

    return (
        <div className='w-full sm:w-[600px]'>
            <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: '4px', bgcolor: '#225f86' }}>
                <Typography sx={{ fontSize: '1.2rem', color: '#fc7716' }}>
                    {question}
                </Typography>
            </Box>
        </div>
    )

}