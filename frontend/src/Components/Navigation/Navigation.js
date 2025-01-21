import React from "react";
import styled from "styled-components";
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

            </ul>
        </NavStyled>
    )
}

const NavStyled = styled.div`

`;

export default Navigation;