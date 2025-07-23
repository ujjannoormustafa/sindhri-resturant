"use client";

import Data from "@data/sections/mission.json";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const MissionSection = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
            {/* mission */}
            <section className="sb-mission sb-p-90-60">
                <div className="sb-bg-1">
                    <div></div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="sb-mission-content">
                                <div className="sb-icon-frame sb-mb-30">
                                    <i className={Data.icon} style={{ fontSize: '48px', color: '#f39c12' }}></i>
                                </div>
                                <h2 className="sb-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="sb-text sb-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <p className="sb-text">{Data.content}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sb-mission-image">
                                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop" alt="Our Mission" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* mission end */}
        </>
    );
};

export default MissionSection; 