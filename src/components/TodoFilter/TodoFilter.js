import { useState } from "react";

const TodoFilter = () => {
  const todos = [
    {
      id: 1,
      title: "NeoG assignments",
      completed: false
    },
    {
      id: 2,
      title: "Pair programming session",
      completed: true
    },
    {
      id: 3,
      title: "Project submission",
      completed: false
    },
    {
      id: 4,
      title: "Coding practice",
      completed: true
    }
  ];

  const [todoList, setTodoList] = useState(todos);
};

export { TodoFilter };
