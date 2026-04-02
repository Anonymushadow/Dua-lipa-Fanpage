import "./Footer.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LegalDWCMention } from "../LegalDWCMention/LegalDWCMention";

export const Footer = () => {
    const location = useLocation();
    const disclaimerLocation = location.pathname === "/disclaimer";

    return (
        <footer className="footer">
            <p className="footer__text">
                ©
                <LegalDWCMention text="DWC" />
                2026 | Unofficial fictional fan page |
                <NavLink to={disclaimerLocation ? "/" : "/disclaimer"} className="footer__disclamer__link">
                    [{disclaimerLocation ? "Back to Home" : "Disclaimer"}]
                </NavLink>
            </p>
        </footer>
    );
}