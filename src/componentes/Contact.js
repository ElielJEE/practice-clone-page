import React from 'react'
import useContact from './useContact';
import ValidateContact from './ValidateContact';
import './Contact.css'

const Contact = () => {
    const { handleChange, values, handleSubmit, errors } = useContact(ValidateContact);

    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Contact</h1>
                <hr></hr>
            </div>
            <div className="contact-content">
                <div className="contact-side1">
                    E-mail/Telf:
                    <br></br>
                    <ul>
                        <li>
                            <a href="tel:+50582748033">
                                <span>&#xf095; +505 8274-8033</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:eliel123escobar@gmail.com">
                                <span>&#xf199; eliel123escobar@gmail.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="contact-side2">
                    <form className="form">
                        <div className="form-row">
                            <input
                                id="name"
                                name="name" 
                                type="text" 
                                placeholder="Name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            <input
                                id="phone"
                                name="phone" 
                                type="text" 
                                placeholder="Phone"
                                pattern="[0-9]{0-20}"
                                value={values.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="error-name">
                            {errors.name}
                        </div>
                        <div className="form-column">
                            <input
                                id="email"
                                name="email"
                                type="Email"
                                placeholder="Email address"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <div className="error-email">
                                {errors.name}
                            </div>
                            <textarea 
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Message"
                                value={values.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="submit-btn" id="btn" onClick={handleSubmit}>Contact Us</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact