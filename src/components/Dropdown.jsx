import React from "react";

function Dropdown(props) {
  const featArr = [
    {
      name: "ToDo List",
      icon: <i class="fa-solid fa-list-check icon-todo"></i>,
    },
    {
      name: "Calender",
      icon: <i class="fa-solid fa-calendar-days icon-cal"></i>,
    },
    {
      name: "Reminders",
      icon: <i class="fa-solid fa-bell icon-rem"></i>,
    },
    {
      name: "Planning",
      icon: <i class="fa-solid fa-clock icon-plan"></i>,
    },
  ];

  function handleClick(event) {
    console.log(event.target.key);
  }

  const compArr = ["History", "Our Team", "Blog"];

  if (props.name === "feat") {
    return (
      <div className="dropdown-menu">
        {featArr.map((item) => {
          return (
            <p onClick={handleClick} key={item.name}>
              {item.icon}
              {item.name}
            </p>
          );
        })}
      </div>
    );
  } else if (props.name === "comp") {
    return (
      <div className="dropdown-menu">
        {compArr.map((item) => {
          return (
            <p onClick={handleClick} key={item}>
              {item}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Dropdown;
// "todo list", "calender", "reminder", "planning";
