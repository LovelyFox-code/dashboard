import React from "react";
import style from "./BigBox.module.css";


function BigBox(props) {

    return <div className={style.boxContainer}>
                <div className={style.box}>
            <div className={style.social}>
                <div className={style.logo}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="Path"
                            d={props.icon}
                            fill={props.fill}
                        />
                    </svg>
                </div>
                <p>@{props.user}</p>
            </div>
            <div className={style.followers}>
                <h1>{props.followers}</h1>
                <h3>Followers</h3>
            </div>
            <div className={style.scale}>
                <div className={style.arrow}>
                    <svg
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="Path 3"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 4L4 0L8 4H0Z"
                            fill="#1EB589"
                        />
                    </svg>
                </div>
                <div> <span></span> Today</div>
            </div>
        </div>
    </div>;
}

export default BigBox;
