import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import GoalImage from "./assets/goals.jpg";
import "./App.css";
import { useState } from "react";
import NewGoal from "./components/NewGoal";

export type CourseGoals = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  const addGoalHandler = (goal: string, summary: string) => {
    const newGoal: CourseGoals = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <div>
        <Header image={{ src: GoalImage, alt: "Goal Image" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoal onAdd={addGoalHandler} />
        <CourseGoalList goals={goals} onDelete={deleteGoalHandler} />
      </div>
    </main>
  );
}

export default App;
