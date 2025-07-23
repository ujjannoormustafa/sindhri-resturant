"use client";

import Data from "@data/sections/popular-dishes.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const PopularDishesSection = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    const stars = [ '', '', '', '', '' ];

    return (
        <>
            {/* popular dishes */}
            <section className="sb-popular-dishes sb-p-90-60">
                <div className="sb-bg-2">
                    <div></div>
                </div>
                <div className="container">
                    <div className="sb-group-title sb-mb-60">
                        <div className="sb-left">
                            <h2 className="sb-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="sb-text" dangerouslySetInnerHTML={{__html : Data.description}} />
                        </div>
                        <div className="sb-right">
                            <Link href={Data.button.link} className="sb-btn">
                                <span className="sb-icon">
                                    <img src="/img/ui/icons/menu.svg" alt="icon" />
                                </span>
                                <span>{Data.button.label}</span>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="row">
                        {Data.items.map((item, key) => (
                        <div className="col-lg-3 col-md-6" key={`popular-dish-${key}`}>
                            <div className="sb-menu-item sb-mb-30">
                                <div className="sb-cover-frame">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="sb-card-tp">
                                    <h4 className="sb-card-title">{item.title}</h4>
                                    <div className="sb-price"><sub>{item.currency}</sub> {item.price}</div>
                                </div>
                                <div className="sb-description">
                                    <p className="sb-text sb-mb-15">{item.text}</p>
                                    <ul className="sb-stars">
                                        {stars.slice(0, item.rating).map((star_item, star_key) => (
                                        <li key={`popular-dish-${key}-rating-star-${star_key}`}><i className="fas fa-star"></i></li>
                                        ))}
                                        <li><span>({item.rating} ratings)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* popular dishes end */}
        </>
    );
};

export default PopularDishesSection; 