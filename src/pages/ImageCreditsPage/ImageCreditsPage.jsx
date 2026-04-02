import "./ImageCreditsPage.css";

export const ImageCreditsPage = () => {
    const images = [
        {
            src: "/images/Home/home-portrait.png",
            title: "Dua Lipa - Home",
            author: "Raph_PH",
            license: "CC BY 2.0",
            link: "https://creativecommons.org/licenses/by/2.0/",
            source: "https://commons.wikimedia.org/"
        },{
            src: "/images/About/about-image 1.png",
            title: "Dua Lipa - About 1",
            author: "Raph_PH",
            license: "CC BY 2.0",
            link: "https://creativecommons.org/licenses/by/2.0/",
            source: "https://commons.wikimedia.org/"
        },{
            src: "/images/About/about-image 2.png",
            title: "Dua Lipa - About 2",
            author: "Raph_PH",
            license: "CC BY 2.0",
            link: "https://creativecommons.org/licenses/by/2.0/",
            source: "https://commons.wikimedia.org/"
        },{
            src: "/images/About/about-image 3.png",
            title: "Dua Lipa - About 3",
            author: "Raph_PH",
            license: "CC BY 2.0",
            link: "https://creativecommons.org/licenses/by/2.0/",
            source: "https://commons.wikimedia.org/"
        },{
            src: "/images/About/about-image 4.png",
            title: "Dua Lipa - About 4",
            author: "Raph_PH",
            license: "CC BY 2.0",
            link: "https://creativecommons.org/licenses/by/2.0/",
            source: "https://commons.wikimedia.org/"
        },{
            src: "/images/About/about-image 5.png",
            title: "Dua Lipa - About 5",
            author: "Raph_PH",
            license: "CC BY 2.0",
            link: "https://creativecommons.org/licenses/by/2.0/",
            source: "https://commons.wikimedia.org/"
        },{
            src: "/images/Contact/contact-image.png",
            title: "Dua Lipa - Contact",
            author: "Raph_PH",
            license: "CC BY 2.0",
            link: "https://creativecommons.org/licenses/by/2.0/",
            source: "https://commons.wikimedia.org/"
        },{
            src: "/images/Disclaimer/dl-image.png",
            title: "Dua Lipa - Disclaimer",
            author: "Raph_PH",
            license: "CC BY 2.0",
            link: "https://creativecommons.org/licenses/by/2.0/",
            source: "https://commons.wikimedia.org/"
        },
    ];

    return (
        <section className="credits">
            <h2 className="credits__title">Image Credits</h2>

            <div className="credits__grid">
                {images.map((img, index) => (
                    <div key={index} className="credits__item">

                        <img
                            src={img.src}
                            alt={img.title}
                            className="credits__image"
                        />

                        <div className="credits__info">
                            <p><strong>{img.title}</strong></p>
                            <p>Author: {img.author}</p>
                            <p>
                                License:
                                <a href={img.link} target="_blank" rel="noreferrer">
                                    {img.license}
                                </a>
                            </p>
                            <p>
                                Source:
                                <a href={img.source} target="_blank" rel="noreferrer">
                                    Wikimedia Commons
                                </a>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};