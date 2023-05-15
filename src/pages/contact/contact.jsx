import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import LoadImage from "../../components/getImage";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message, subject }, setState] = useState(initialState);
  const socialMediaLinks = props.data.socialMedia;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const CustomToast = ({text}) => (
    <div>
      <h5>Error!</h5>
      <ul>
        {text.map(item => {
          return <li className="text">Plesae Enter a valid <b style={{ color:"red" }}>{item}</b>.</li>
        })}
      </ul>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorFields = [];
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!name) {
      errorFields.push('Name');
    }
    if(!email || !emailRegex.test(email)) {
      errorFields.push('Email');
    }
    if(!subject) {
      errorFields.push('Subject');
    }
    if(!message) {
      errorFields.push('Message');
    }

    if(errorFields.length > 0) {
      toast.error(<CustomToast text={errorFields} />);
      return;
    } else {
      emailjs
      .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {name, email, subject, message}, process.env.REACT_APP_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank you, Your query has been sent successfully. Our Support team will get back to you shortly");
          clearState();
        },
        (error) => {
          toast.error("Oops, There is some error with the server. Meanwhile You can mail us or call us from the details given.");
          console.log(error.text);
        }
      );
    }

    
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={email}
                        placeholder="Email"
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="subject"
                        id="subject"
                        name="subject"
                        className="form-control"
                        value={subject}
                        placeholder="Subject"
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    value={message}
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? <a href={`tel:${props.data.phone1}`}> {props.data.phone1} </a> : <span>loading</span>}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Alternate Phone
                </span>{" "}
                {props.data ? <a href={`tel:${props.data.phone2}`}> {props.data.phone2} </a> : <span>loading</span>}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                { props.data ? <a href={`mailto:${props.data.email}`}>{props.data.email}</a> : <span>loading</span> }
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  {
                    Object.keys(socialMediaLinks).map((item, index) => {
                      return <li id={`${socialMediaLinks[item].iconClass}${index}`}>
                        <a href={socialMediaLinks[item] ? socialMediaLinks[item].link : "/"} target="blank">
                          <i className={socialMediaLinks[item].iconClass}></i>
                        </a>
                      </li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 <LoadImage src={props.data.footerImg} alt="." height={15} width={15} />&nbsp;Prepture.Com
          </p>
        </div>
      </div>
    </div>
  );
};
