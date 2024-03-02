import { ReactNode, useState } from "react";

const Card = ({
  header,
  children,
  footer,
}: {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}) => {
  return (
    <div className="h-[50vh] w-[50vw] rounded-2xl bg-white p-5 shadow-lg">
      <div className="flex flex-col">
        <div className="p-5 text-3xl font-bold">{header}</div>
        <div className="p-5">{children}</div>
        <div className="p-5">{footer}</div>
      </div>
    </div>
  );
};

const AnswerCard = ({ onOpen }: any) => {
  const header = "Answer";

  return (
    <>
      <Card header={header}>
        <div
          className="flex h-full w-full items-center justify-center"
          onClick={onOpen}
        >
          close
        </div>
      </Card>
    </>
  );
};

const QuestionCard = ({ onOpen }: any) => {
  const header = "Quiz";
  return (
    <>
      <Card header={header}>
        <div className="text-2xl font-extralight" onClick={onOpen}>
          <p>
            1. Object oriented systems analysis and design is more feasible than
            ever today due to:
          </p>
          <ul className="flex flex-col gap-2 pl-6">
            <li>
              a. The increased speed of processors and storage (and decrease in
              cost - aka "Moore's Law")
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
      </Card>
    </>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen items-center justify-center bg-emerald-900">
      {!isOpen ? (
        <QuestionCard onOpen={() => setIsOpen(!isOpen)} />
      ) : (
        <AnswerCard onOpen={() => setIsOpen(!isOpen)} />
      )}
    </div>
  );
}

export default App;
