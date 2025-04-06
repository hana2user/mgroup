import React from 'react'; 
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Alert, Button } from '@mui/material';
import { useState } from 'react';

type Props = {
  setQuestion: (s: string) => void;
}

export const QuestionForm: React.FC<Props> = ({setQuestion}) => {
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
    <div className="w-full sm:w-[600px]">
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Enter your question about Mgroup"      
      style={{ 
        width: '100%',
        border: '2px solid lightgray',
        borderRadius: 4,
        padding: 8
       }}
      value={value}
      onChange={event => {
        if(alert) setAlert(false);
        setValue(event.target.value)} 
    }
    />
    
    {alert ? <Alert variant="outlined" severity="warning">
      The question field must not be empty.
    </Alert> :
    <Button variant="outlined" 
      style={{ 
        width: 200,
      }}
      onClick={setQuestionValue}>
        Ask about
      </Button>
    }
    </div>
  );
}
