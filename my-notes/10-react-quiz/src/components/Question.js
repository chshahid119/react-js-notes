import Options from "./Options";
import { useQuiz } from "./hooks/QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  console.log(questions);
  return (
    <div>
      <h4>{questions}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
