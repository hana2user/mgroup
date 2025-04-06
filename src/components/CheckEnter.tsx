import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Alert, Button } from '@mui/material';

type Props = {
    setCheck: (b: boolean) => void;
}

export const CheckEnter: React.FC<Props> = ({ setCheck }) => {

    const [selectedValue, setSelectedValue] = useState<string>('');
    const [wrong, setWrong] = useState<boolean>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        if (wrong) {
            setWrong(false);
        }
    };

    function checkAnswer() {
        if (selectedValue === "Mgroup") {
            setCheck(true);
        } else {
            setWrong(true);
        }
    }

    return (
        <div className='w-full sm:w-[600px] mx-auto flex flex-col items-center justify-center space-y-4'>
            <img src="/Logo-color@1x.svg" alt='logo' />
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Which company does this logo represent?</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={selectedValue}
                    onChange={handleChange}
                >
                    <FormControlLabel value="Lgroup" control={<Radio />} label="Lgroup" />
                    <FormControlLabel value="Mgroup" control={<Radio />} label="Mgroup" />
                    <FormControlLabel value="Ngroup" control={<Radio />} label="Ngroup" />
                </RadioGroup>
            </FormControl>
            {selectedValue && !wrong && <Button 
                variant="outlined" 
                style={{ 
                width: 200,
                }}
                onClick={checkAnswer} >
                    Check the answer
                </Button>}
            {wrong && <Alert severity="error">You are wrong. This logo does not represent {selectedValue}</Alert>}

        </div>
    )
}