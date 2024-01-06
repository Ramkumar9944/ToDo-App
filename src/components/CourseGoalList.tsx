import { CourseGoals } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: CourseGoals[];
  onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  return (
    <>
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
