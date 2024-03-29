import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import Plx from 'react-plx';
import { primary, secondary, tertiary } from './configs/colors';
import contacts from './configs/socialnames';


const MyUl = styled.ul`
    z-index: 20;
    position: fixed;
    top: 0vh;
    left: -2rem;
    width: 4rem;
    height: 4rem;
    transition: all .8s ease;
    & div{
        position: absolute;
        top: 0;
        left: 0;
    }
    & div li{
        position: absolute;
        height: 4rem;
        width: 4rem;
        transition: all .4s ease .4s;
    }
    & div li::before{
        content: '' ;
        position: absolute;
        top: 0rem;
        left: 0rem;
        height: 6rem;
        width: 6rem;
        background-color: #efeee5;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        clip-path: circle(0%);
        transform: translate(-1rem, -1rem);
        transition: all .8s ease 0s;
    }
    & div:hover li::before{
        transition: all .8s ease 0s;
        clip-path: circle(50%);
    }
    & div li svg{
        position: absolute;
        top: 0;
        left: 0;
        height 4rem;
        width: 4rem;
        padding: 0rem;
        z-index: 4;
        cursor:pointer;
    }
    & div li svg path{
        transition: all .8s ease 0s;
        opacity: 1;
    }
    & div li svg path, & div li svg rect{
        fill: inherit !IMPORTANT;
    }
    & div:hover li svg path, & div:hover li svg rect{
        transition: all .8s ease 0s;
    }
    & div:nth-of-type(1):hover li svg path{
        fill: #fb3958 !IMPORTANT;
    }
    & div:nth-of-type(2):hover li svg path{
        fill: #0077B7 !IMPORTANT;
    }  
    & div:nth-of-type(3):hover li svg path{
        fill: #0D1117 !IMPORTANT;
    }
`

function ContactList(props) {
    const list = props.list;
    const listItems = list.map((item, index) =>
        <Plx key={index + '_li'} parallaxData={ item.parallaxPosition }>
            <li>
                <span />
                <a target={"blank"} href={ item.link }>
                    <Plx parallaxData={ item.parallaxColor }>
                        <ReactSVG src={ item.src } />
                    </Plx>
                </a>
            </li>
        </Plx>
    );

    return (
            <MyUl>{listItems}</MyUl>
    );
}

class Social extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            primaryColor: primary,
            secondaryColor: secondary,
            tertiaryColor: tertiary,
            contacts: contacts,
        };
    }

    render() {
        return(
            <ContactList list={ this.state.contacts }/>
        );
    }
}

export default Social;
