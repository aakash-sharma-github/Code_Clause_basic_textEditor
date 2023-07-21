import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <strong>Text Editor</strong>
        </a>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input type="checkbox" onClick={props.changeMode} id="flexSwitchCheckDefault" className="form-check-input" />
            <lable className="form-check-lable" htmlFor="flexSwitchCheckDefault">Dark Mode</lable>
          </div>
        </div>
    </nav>
  );
}
