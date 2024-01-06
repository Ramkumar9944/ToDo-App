import { type FC, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({
  id,
  title,
  description,
  children,
  onDelete,
}) => {
  return (
    <article>
      <div key={id}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
