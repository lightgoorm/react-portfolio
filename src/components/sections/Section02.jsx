import { useEffect, useRef, useMemo, Fragment } from "react";
import Animation from "../utils/animation.js";
import { util } from "../utils/util.js";

const Section02 = ({ data, isMobile, type }) => {
    const refContainer = useRef(null);
    const refCard = useRef(null);

    const refs = useMemo(() => ({
        container: refContainer,
        card: refCard,
    }), []);

    useEffect(() => {
        Animation.section03(refs);
    }, [refs]);

    return (
        <article id="about" ref={refs.container}>
            <div className="container-inner">
                <section>
                    {data.map((e, i) =>
                        <Fragment key={i}>
                            <div className={`item content-${i}`} ref={refCard}>
                                <h5>Q. {util.replace(type, e.title)}</h5>
                            </div>
                            <div className={`item content-${i}`} ref={refCard}>
                                <p>
                                    {util.replace(type, e.desc)}
                                </p>
                            </div>
                        </Fragment>
                    )}
                </section>
                
            </div>
        </article>
    )
}

export default Section02