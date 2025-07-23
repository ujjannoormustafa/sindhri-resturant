"use client";

import Data from "@data/sections/history.json";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const HistorySection = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
            {/* history */}
            <section className="sb-history sb-p-90-60">
                <div className="sb-bg-1">
                    <div></div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="sb-history-content">
                                <div className="sb-icon-frame sb-mb-30">
                                    <i className={Data.icon} style={{ fontSize: '48px', color: '#27ae60' }}></i>
                                </div>
                                <h2 className="sb-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="sb-text sb-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <p className="sb-text">{Data.content}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sb-history-image">
                                <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop" alt="Our History" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* history end */}
        </>
    );
};

export default HistorySection; 