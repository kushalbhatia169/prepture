import React from "react";
import LoadImage from "../../components/getImage";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="about-container">
          {" "}
          <LoadImage src="about.jpg" className="img-responsive container-width left-container" alt="about"/>{" "}
          <div className="about-text container-width right-conainter">
            <h2>About Us</h2>
            {
              props.data ? props.data.paragraph.map((item, key) => {
                return <p id={item+key} key={item+key}>{item}</p>
              }) : <p>loading...</p>
            }
            <h3>Prepture is focused to support organizations in the area of </h3>
            <div className="list-style">
              <div className="col-lg-12">
                <ul>
                  {props.data
                    ? props.data?.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
              {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>*/} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
