import { useRef, useMemo, useEffect, useState } from "react";
import MarqueeComponents from "@/components/common/MarqueeComponents";

import Animation from "../utils/animation.js";

const Header = ({ isMobile, isVisible, func }) => {
    const refMarquee = useRef(null);

    const refs = useMemo(() => ({
        marquee: refMarquee
    }), []);

    useEffect(() => {
        Animation.layout.header(refs);
    }, [refs]);

    return (
        <header id="header">
            <div className="header-inner">
                {/* 로고 */}
                <section className="logo">
                    <a href="#intro">
                        <h1>프론트엔드</h1>
                        <h1 className="target">함운경</h1>
                    </a>
                </section>
                {/* 로고 END */}

                {/* 메뉴 */}
                { isMobile && <button type="button" onClick={() => func()}>=</button> }
                { !isMobile && 
                    <section className="menu">
                        <a href="#career">이력</a>
                        <a href="#skill">기술</a>
                        <a href="#education">개인공부</a>
                        <a href="#projects">프로젝트</a>
                    </section>
                }
                {/* 메뉴 END */}
            </div>
            <MarqueeComponents target={refMarquee} title={"THIS PAGE MADE BY REACT | GSAP | SCSS, TAKE A LOOK AROUND"} />
        </header>
    );
};

export default Header;