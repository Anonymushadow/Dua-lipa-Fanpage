import "./Contact.css";
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__header">
                <img src="/images/Contact/contact-image.png" alt="" className="contact__header__image" />
            </div>
            <div className="contact__container">
                <div className="contact__form">
                    <p className="contact__form__title">Contact</p>
                    <div className="contact__form__inputs">
                        <input type="text" className="contact__form__input" placeholder="Name" />
                        <input type="text" className="contact__form__input"  placeholder="Email"/>
                        <textarea className="contact__form__input"  placeholder="Message"></textarea>
                    </div>
                    <button className="contact__form__button">Send</button>
                </div>
                <ul className="contact__icons">
                    <li className="contact__icon"><FaInstagram /></li>
                    <li className="contact__icon"><FaFacebook /></li>
                    <li className="contact__icon"><FaTiktok /></li>
                    <li className="contact__icon"><FaTwitter /></li>
                    <li className="contact__icon"><FaYoutube /></li>
                </ul>
            </div>
        </section>
    );
} 