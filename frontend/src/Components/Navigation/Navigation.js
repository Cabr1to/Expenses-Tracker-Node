import React from "react";
import styled from "styled-components";
import {menuItems} from "../../utils/menuItems";
import {signout} from "../../utils/Icons";
// import avatar from '../../img/avatar.png'




function Navigation() {
    return (
        <NavStyled>
            <div className="user">
           <!-- <img src={avatar} alt="" /> !-->
                <div className="text">
                    <h2>Edu</h2>
                    <p>Your money</p>
                </div>
            </div>
            <ul className="menu-itens">
                {menuItems.map((item, i) => {
                    return (<li>
                        key={item.id}
                    >
                        {item.icon}
                        <span>{item.title}</span>

                    </li>)
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.div`

`;

export default Navigation;