import { useRef, type FormEvent, useState } from "react";

type AddGoal = {
  onAdd: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAdd }: AddGoal) => {
  const [error, setError] = useState<string>("");
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    const isValid =
      enteredGoal.trim().length !== 0 && enteredSummary.trim().length !== 0;

    if (isValid) {
      onAdd(enteredGoal, enteredSummary);
      event.currentTarget.value?.reset();
    } else {
      setError("Please provide valid values");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="goal">Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p style={{ color: "red" }}>{error}</p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
