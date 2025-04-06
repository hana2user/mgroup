import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Alert, Button } from '@mui/material';
import { useState } from 'react';

type Props = {
  setQuestion: (s: string) => void;
}

export const TextareaForm: React.FC<Props> = ({setQuestion}) => {
    const [value, setValue] = useState<string>('');
    const [alert, setAlert] = useState<boolean>(false);

    function setQuestionValue() {
      if(value == null || value === '') {
        setAlert(true);
      } else {
        setQuestion(value);
      }
        
    }
  return (
    <>
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Enter your question about Mgroup"
      style={{ width: 400 }}
      value={value}
      onChange={event => {
        if(alert) setAlert(false);
        setValue(event.target.value)}
    }
    />
    
    {alert ? <Alert variant="outlined" severity="warning">
      The question field must not be empty.
    </Alert> :
    <Button variant="outlined" onClick={setQuestionValue}>Ask about</Button>
    }
    </>
  );
}
