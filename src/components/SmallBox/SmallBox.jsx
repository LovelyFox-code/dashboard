import React from 'react';
import style from './SmallBox.module.css';

function SmallBox(props) {
    console.log(props.percentage);
    return (
        <div className={style.box}>
            <div className={style.row}>
                <p>{props.name}</p>
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
            <div className={style.row}>
            <h1>{props.number}</h1>
                <div className={style.percentage}>
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

                    
                    <p>{props.percentage}%</p>
                </div>
            </div>
        </div>

    )
}

export default SmallBox;