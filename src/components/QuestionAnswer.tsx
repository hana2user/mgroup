import React, { useCallback } from 'react'; 
import { useEffect, useState } from "react";
import { Answer } from "./Answer";
import { HoldQuestion } from "./HoldQuestion";
import { Alert, Button } from '@mui/material';
import { QuestionForm } from './QuestionForm';
import useWebSocket from 'react-use-websocket';

export const QuestionAnswer: React.FC = () => {

    const [question, setQuestion] = useState<string | null>(null);
    const [answer, setAnswer] = useState<string | null>(null);

    const wsUrl = process.env.REACT_APP_WS_SERVER || 'ws://home:5000';

    interface ServerMessage {
        content?: string;
        system?: string;
        error?: string;
    }

    const { sendJsonMessage, lastJsonMessage } = useWebSocket<ServerMessage>(wsUrl, {
        share: true,
        shouldReconnect: () => true,
      });

    useEffect(() => {
        if (lastJsonMessage) {
            if (lastJsonMessage.content) {
              setAnswer(prev => prev + '\n' + lastJsonMessage.content);
            }
            if (lastJsonMessage.system) {
                console.log(lastJsonMessage.system);
                const time = new Date();
                setAnswer(prev => prev + '\n[Server]: ' + time.toLocaleTimeString() + ' - ' + lastJsonMessage.system);
            }
            if (lastJsonMessage.error) {
              setAnswer('[Error]: ' + lastJsonMessage.error);
            }
          }
        }, [lastJsonMessage]);

    const onAsk = useCallback((msg: string) => {
        setQuestion(msg);
        setAnswer('');
        sendJsonMessage({ message: msg });
      }, [sendJsonMessage]);

    return (
        <div className="p-2 m-2 w-full sm:w-[600px] mx-auto flex flex-col items-center justify-center space-y-2">
            <img src="/Logo-color@1x.svg" alt='logo'/>
            {!question ?
            <QuestionForm onAsk={onAsk} /> :
            <HoldQuestion question={question} />
            }
            {question && !answer && 
            <Alert variant="outlined" severity="info">
                Please wait while the server responds.
            </Alert>}
            {answer && <Answer answer={answer} />}
            {answer && <Button variant="outlined" 
                  style={{ 
                    width: 200,
                  }}
                  onClick={() => {
                    setQuestion(null);
                    setAnswer(null);
                  }}
                  >
                    Ask else
                </Button>}
        </div>
    );

};