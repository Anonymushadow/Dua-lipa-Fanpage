import "./Disclaimer.css";

export const Disclaimer = ()=> {
    return (
        <section className="disclaimer">
            <div className="disclaimer__content">
                <img src="/images/Disclaimer/dwc-image.png" alt="" className="disclaimer__dwc__image" />
                <div className="disclaimer__content__container">
                    <p className="disclaimer__title">Disclaimer</p>
                    <p className="disclaimer__description">
                        This is a fictional fan page created by Death Wolf Company as a personal project to practice web design and programming. DWC is not affiliated with Dua Lipa, her team or official representatives. Just an exercise to show off my skills and celebrate an artist who inspires me!
                    </p>
                </div>
                <img src="/images/Disclaimer/dl-image.png" alt="" className="disclaimer__dl__image" />
            </div>
        </section>
    )
}