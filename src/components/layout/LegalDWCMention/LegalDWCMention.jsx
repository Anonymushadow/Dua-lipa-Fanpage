import "./LegalDWCMention.css";

export const LegalDWCMention = ({ text }) => {
    return (
        <strong>
            <a
                className="footer__legal__credits__link"
                href="https://deathwolfcompany.com.ar/"
                target="_blank"
                data-text={text}
            >
                {text}
            </a>
        </strong>
    );
}