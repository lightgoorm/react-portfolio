import { util } from "../utils/util.js";

const Section07 = ({ type }) => {
    return (
        <article id="end">
            <div className="container-inner">
                <h5 className="title">감사합니다.</h5>
                <p>
                    {util.replace(type, 
                        "사용자 중심 사고와 강한 오너십으로 데이터를 기반으로 서비스 개선과 성공을 위해 끊임없이 고민하는 웹 개발자입니다"
                    )}
                </p>
            </div>
        </article>
    )
}

export default Section07