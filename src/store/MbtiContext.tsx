import React from "react";
import { useState } from "react";

type MbitiContextType = {
  answerIds: (string | undefined)[];
  setAnswer: (id: string, index: number) => void;
};

const MbtiContext = React.createContext<MbitiContextType>(null);

const MbtiProvider = ({ children }: { children: React.ReactNode }) => {
  const [answerIds, setAnswerId] = useState(Array.from({ length: 4 }, () => undefined));

  const setAnswer = (id: string, index: number) => {
    const copy = [...answerIds];
    copy[index] = id;
    setAnswerId(copy);
  };

  return <MbtiContext.Provider value={{ answerIds, setAnswer }}>{children}</MbtiContext.Provider>;
};

export { MbtiContext, MbtiProvider };
