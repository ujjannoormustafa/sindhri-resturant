"use client";

import Data from "@data/sections/vision.json";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const VisionSection = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
            {/* vision */}
            <section className="sb-vision sb-p-90-60">
                <div className="sb-bg-2">
                    <div></div>
                </div>
                <div className="container">
                    <div className="row align-items-center flex-md-row-reverse">
                        <div className="col-lg-6">
                            <div className="sb-vision-content">
                                <div className="sb-icon-frame sb-mb-30">
                                    <i className={Data.icon} style={{ fontSize: '48px', color: '#e74c3c' }}></i>
                                </div>
                                <h2 className="sb-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="sb-text sb-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <p className="sb-text">{Data.content}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sb-vision-image">
                                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop" alt="Our Vision" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* vision end */}
        </>
    );
};

export default VisionSection; 