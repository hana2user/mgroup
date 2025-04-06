import { useState } from "react";
import { CheckEnter } from "./CheckEnter";
import { QuestionAnswer } from "./QuestionAnswer";

export const CheckMenu: React.FC = () => {
const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      {!check && <CheckEnter setCheck={setCheck} />}
      {check && <QuestionAnswer />}
    </>
  );
}