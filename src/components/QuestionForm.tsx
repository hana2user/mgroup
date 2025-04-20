import React from 'react'; 
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Alert, Button } from '@mui/material';
import { useState } from 'react';

type Props = {
  onAsk: (question: string) => void;
}

export const QuestionForm: React.FC<Props> = ({ onAsk }) => {
    const [value, setValue] = useState<string>('');
    const [alert, setAlert] = useState<boolean>(false);

    function handleClick() {
      if(value == null || value === '') {
        setAlert(true);
      } else {
        onAsk(value);
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
      onClick={handleClick}>
        Ask about
      </Button>
    }
    </div>
  );
}
