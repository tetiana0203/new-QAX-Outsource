import React from 'react';

import { useFormik } from "formik";
import IntlTelInput from "react-intl-tel-input";

import "react-intl-tel-input/dist/main.css";

import "./contactUs.scss";

import mail from "./mail.svg";


const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="contacts-us" id="contact-us">
      <div className="container">
        <div className="contact-us-block">
          <div className="contact-us-title">
            <h2>Contact Us </h2>
            <img src={mail} alt="mail" />
          </div>

          <form noValidate onSubmit={formik.handleSubmit}>
            <div>
              <div>
                <input
                  type="text"
                  id="name_input"
                  name="name"
                  className="input-fields"
                  placeholder="Name*"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  required
                />
                <div className="error-mesage">This field is required</div>
                <div className="error-mesage">At least 2 characters long</div>
                <div className="error-mesage">Max 75 characters long</div>
                <div className="error-mesage">Invalid name entered</div>
              </div>
            </div>

            <div>
              <div>
                <input
                  type="text"
                  id="email_input"
                  name="email"
                  className="input-fields"
                  placeholder="Email*"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
                <div className="error-mesage">This field is required</div>
                <div className="error-mesage">
                  Invalid email address entered
                </div>
                <div className="error-mesage">Max 100 characters allowed</div>
              </div>
            </div>

            <div>
              <IntlTelInput
              preferredCountries={['ua']}
                containerClassName="intl-tel-input"
                inputClassName="form-control input-fields"
                //type="tel"
                //id="phone_input"
                //name="phone"
                //onChange={formik.handleChange}
                value={formik.values.phone}
                //required
              />
              <div className="error-mesage">The phone is to short</div>
              <div className="error-mesage">The phone is to long</div>
              <div className="error-mesage">Invalid phone number entered</div>
            </div>

            <div>
              <div>
                <input
                  className="input-fields"
                  name="message"
                  id="comment_input input-fields"
                  placeholder="Message*"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></input>
                <div></div>
                <div className="error-mesage">Max 1000 characters allowed</div>
                <div className="error-mesage">This field is required</div>
              </div>
            </div>

            <div>
              <label htmlFor="form-agree" className="privacy-checkbox">
                <input
                  type="checkbox"
                  id="form-agree"
                  name="form-agree-name"
                  value="form-agree-value"
                />
                <span>
                  <img alt="" />
                </span>

                <span id="checkbox-text">
                  * I agree with processing of my personal data.{" "}
                  <a href="privacypolicy.html" target="_blank">
                    Details.
                  </a>{" "}
                </span>
              </label>
              <div className="error-mesage">This field is required</div>
            </div>

            <button
              type="submit"
              className="button-send"
              id="button_send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
