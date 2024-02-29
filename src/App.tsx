import { ReactNode, useState } from "react";

const Card = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="min-h-80 max-w-5xl rounded bg-white p-5 shadow-lg">
      {children}
    </div>
  );
};

const AnswerCard = ({ onOpen }: any) => {
  return (
    <>
      <Card>
        <div className="" onClick={onOpen}>
          close
        </div>
      </Card>
    </>
  );
};

const QuestionCard = ({ onOpen }: any) => {
  return (
    <>
      <Card>
        <div className="flex flex-col" onClick={onOpen}>
          <div className="p-5">Quiz System Analysis</div>
          <div className="flex flex-col justify-center gap-4 p-5 text-3xl font-extralight">
            <p>
              1. Object oriented systems analysis and design is more feasible
              than ever today due to:
            </p>
            <ul className="flex flex-col gap-2 pl-6">
              <li>
                a. The increased speed of processors and storage (and decrease
                in cost - aka "Moore's Law")
              </li>
              <li>b. Textbooks on object oriented analysis and design</li>
              <li>
                c. The recent discovery by Bill Gates of the object oriented
                paradigm
              </li>
              <li>d. Graphical User Interfaces</li>
              <li>e. Neo's use of object orientated SA&D in the Matrix</li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      {!isOpen ? (
        <QuestionCard onOpen={() => setIsOpen(!isOpen)} />
      ) : (
        <AnswerCard onOpen={() => setIsOpen(!isOpen)} />
      )}
    </div>
  );
}

export default App;
