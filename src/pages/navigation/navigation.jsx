import React from "react";
import * as Styles from './navigation.styles';
import LoadImage from "../../components/getImage";
// import prepture from "../../asset/portfolio/prepture.png";

export const Navigation = (props) => {

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={Styles.navigationStyles}>
            <LoadImage height={34} width={34} imageUrl={props.data ? props.data.topMenuBar.titleImg : ""} alt="preture logo"/>&nbsp;{props.data ? props.data.topMenuBar.title : ""}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {
              props.data ? props.data.navLinks.map((item, index) => {
                return <li id={`${item.name}${index}`}>
                <a href={`#${item.name.toLowerCase()}`} className={`page-scroll`}>
                  {item.name}
                </a>
              </li>
              }) : null
            }
            {/* <li>
                <a href={props.data?.youtube ? props.data.youtube : "www.youtube.com"} className="page-scroll" style={ Styles.linkCusor } target="blank">
                  <i className="fa fa-youtube"></i>
                </a>
              </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
