import { ReactNode } from "react";
import { CourseGoals } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CourseGoals[];
  onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="info">
        You have no course goals yet. Start adding some goals!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length > 5) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You are collecting lot of goals. Don't put too much on your plate.
      </InfoBox>
    );
  } else if (goals.length > 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You are collecting lot of goals. Don't put too much on your plate.
      </InfoBox>
    );
  } else if (goals.length > 3) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You are collecting lot of goals. Don't put too much on your plate.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {
              <CourseGoal
                id={goal.id}
                title={goal.title}
                description={goal.description}
                onDelete={onDelete}
              />
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
