// - Your challenge is to add a filter to do the following
//     - Show completed todos
//     - Show incomplete todos
//     - Show all todos

import { useState } from "react";

import "./TodoFilter.css";

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

  const filterChoices = ["Show Completed", "Show InCompleted", "Show All"];

  const [todoList, setTodoList] = useState({
    selectedFilter: "Show All",
    list: todos
  });

  const { selectedFilter, list } = todoList;

  const optionSelected = (option) => {
    switch (option) {
      case "Show Completed":
        setTodoList({
          selectedFilter: option,
          list: todos.filter((item) => item.completed)
        });
        break;
      case "Show InCompleted":
        setTodoList({
          selectedFilter: option,
          list: todos.filter((item) => item.completed === false)
        });
        break;
      case "Show All":
        setTodoList({
          selectedFilter: option,
          list: todos
        });
        break;
      default:
        setTodoList(todoList);
    }
  };

  return (
    <div className="todoFilter">
      <div className="filter__choices">
        {filterChoices.map((option) => (
          <button
            key={option}
            className={selectedFilter === option ? "selected" : "choice"}
            onClick={() => optionSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="TodoList">
        {list.map((item) => (
          <div className="todo__item" key={item.id}>
            <h3>{item.title}</h3>
            <h5>{item.completed ? "Completed" : "Incomplete"}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TodoFilter };
