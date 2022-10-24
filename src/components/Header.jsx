import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dropdown from "./Dropdown";

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
        <h1>AdSnap</h1>
        <div className="right-tags">
          <div className="dropdown-div">
            <p onClick={handleDrop} id="featuresState">
              Features{" "}
              <KeyboardArrowDownIcon
                style={
                  !visible.featuresState
                    ? { rotateStyle }
                    : { transform: "rotate(180deg)" }
                }
              />
            </p>
            {visible.featuresState ? <Dropdown name="feat" /> : null}
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
            {visible.companyState ? <Dropdown name="comp" /> : null}
          </div>
          <p>Careers</p>
          <p>About</p>
        </div>
      </div>
      <div className="login-div">
        <p>Login</p>
        <p className="register">Register</p>
      </div>
    </nav>
  );
}

export default Header;
