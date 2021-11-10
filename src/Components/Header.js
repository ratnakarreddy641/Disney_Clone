import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/727db050f3d075929746c082609a3547-v2.jpg" />
        </Nav>
        
    )
}

export default Header

const Nav = styled.nav`
    height:70px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x:hidden;
`
const Logo=styled.img`
    width:80px;
`
const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing=1.42px;
            position:relative;
            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom: -6px;
                opacity:0;
                transition: all 250ms;
                transform-origin: center;
                transform:scaleX(0);
            }
        }
        &:hover{
            span:after{
                opacity:1;
                transform:scaleX(1);
            }
        }
    }
`
const UserImg =styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;

`