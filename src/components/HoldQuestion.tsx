import { Box, Typography } from "@mui/material";

type Props = {
    question: string;
}

export const HoldQuestion: React.FC<Props> = ({ question }) => {

    return (
        <>
            <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '1.2rem', color: 'gray' }}>
                    {question}
                </Typography>
            </Box>
        </>
    )

}