import React from 'react';
import { ModeBtn,Input, Label } from './ModeBtn';
import style from './Navbar.module.css';
function Navbar() {
    return (
        <div className={style.nav}>
            <div className={style.logo}>
            <h1 >Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
            </div>
            <div className={style.row}>
            <ModeBtn>
                <Input/>
                <Label></Label>
            </ModeBtn>
            </div>
        </div>

       
    )
}

export default Navbar;