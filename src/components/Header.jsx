import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dropdown from "./Dropdown";
import { Outlet, Link } from "react-router-dom";

function Header() {
  const [visible, setVisible] = React.useState({
    companyState: false,
    featuresState: false,
  });

  function handleDrop(event) {
    let id = event.target.id;

    if (id === "featuresState") {
      setVisible((prevValue) => {
        return { companyState: false, featuresState: !visible.featuresState };
      });
    } else if (id === "companyState") {
      setVisible((prevValue) => {
        return { companyState: !visible.companyState, featuresState: false };
      });
    }
  }

  const rotateStyle = {
    transform: "rotate(180deg)",
  };

  return (
    <nav>
      <div className="main-nav">
        <h1>
          <Link to="/">AdSnap</Link>
        </h1>
        <div className="right-tags">
          <div className="dropdown-div">
            <p onClick={handleDrop} id="featuresState">
              Services{" "}
              <KeyboardArrowDownIcon
                style={
                  !visible.featuresState
                    ? { rotateStyle }
                    : { transform: "rotate(180deg)" }
                }
              />
            </p>
            {visible.featuresState ? <Dropdown name="services" /> : null}
          </div>
          <div className="dropdown-div">
            <p onClick={handleDrop} id="companyState">
              Company{" "}
              <KeyboardArrowDownIcon
                style={
                  !visible.companyState
                    ? { rotateStyle }
                    : { transform: "rotate(180deg)" }
                }
              />
            </p>
            {visible.companyState ? <Dropdown name="company" /> : null}
          </div>
          <p>
            <Link to="/pricing">Pricing</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
        </div>
      </div>
      <div className="contact-div">
        <Link to="/contact">
          <p className="contact">Contact</p>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
