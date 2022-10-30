import React from "react";
import { Outlet, Link } from "react-router-dom";
import _ from "lodash";
import { ConstructionOutlined } from "@mui/icons-material";

function Dropdown(props) {
  const featArr = [
    {
      name: "Campaigns",
      icon: <i class="fa-solid fa-rectangle-ad icon-ad"></i>,
    },
    {
      name: "Creative",
      icon: <i class="fa-solid fa-icons icon-cont"></i>,
    },
    {
      name: "SEO",
      icon: <i class="fa-brands fa-searchengin icon-seo"></i>,
    },
    {
      name: "Sales",
      icon: <i class="fa-solid fa-chart-line icon-sales"></i>,
    },
  ];

  const compArr = ["History", "Our Team"];

  function handleClick(event) {
    console.log(event.target.key);
  }

  if (props.name === "services") {
    return (
      <div className="dropdown-menu">
        {featArr.map((item) => {
          return (
            <p onClick={handleClick} key={item.name}>
              <Link to={`/${_.toLower(item.name)}`}>
                {item.icon}
                {item.name}
              </Link>
            </p>
          );
        })}
      </div>
    );
  } else if (props.name === "company") {
    return (
      <div className="dropdown-menu">
        {compArr.map((item) => {
          let str = item.replace(/\s/g, "");
          console.log(str);
          return (
            <p onClick={handleClick} key={item}>
              <Link to={`/${_.toLower(str)}`}>{item}</Link>
            </p>
          );
        })}
      </div>
    );
  }
}

export default Dropdown;
// "todo list", "calender", "reminder", "planning";
