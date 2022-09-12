import React from 'react';
import styled from 'styled-components';
import { primary, secondary, tertiary } from './configs/colors';

const Intro = styled.h2`
    position: absolute;
    top: 12vh;
    left: 0vh;
    width: 100vw;
    line-height: 6rem;
    font-size: 4rem;
    font-weight: 600;
    text-align: center;
    color: ${props => props.color || 'black'};
`

const Skill = styled.span`
    position: absolute;
    z-index: 1;
    background-color: #28827d;
    top: ${props => props.top || '10'}vh;
    left: ${props => props.left || '10'}vw;
    width: ${props => props.dimension || '10'}vw;
    height: ${props => props.dimension || '10'}vw;
    text-align: center;
    border-radius: 50%;
    border: .25rem solid #EFEEE5;
    box-shadow: 0px 0px 15px #888888;
    &.info{
        cursor: alias;
        border: .75rem solid #EFEEE5;
    }
    &.info::after{
        content:'hover me';
        color: #EFEEE5;
        position: absolute;
        bottom: 35%;
        font-size: 1.5rem;
        left: 0;
        text-align:center;
        width: 100%;
    }
    & h3 {
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: ${props => props.font || '3'}rem;
        color: #EFEEE5;
        top: calc(${props => props.dimension || '10'}vw/2 - ${props => props.font || '3'}rem/2);
    }
    &:hover + h4{
        transition: opacity .4s ease;
        opacity: 1;
    }
`

const Arrow = styled.span`
    position: absolute;
    z-index: 0;
    top: ${props => props.top || '10'}vh;
    left: ${props => props.left || '10'}vw;
    width: ${props => props.lenght || '10'}vw;
    transform: rotate(${props => props.rotation || '10'}deg);
    height: 1rem;
    background-color:#EFEEE5;
    box-shadow: 0px 0px 15px #888888;
`

const Comment = styled.h4`
    position: absolute;
    z-index: 2;
    top: ${props => props.top || '10'}vh;
    left: ${props => props.left || '10'}vw;
    width: ${props => props.size || '10'}vw;
    padding: 1rem;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    height: auto;
    background-color: #EFEEE5;
    font-size: 2rem;
    box-shadow: 0px 0px 15px #888888;
    transition: opacity .4s ease;
    opacity: 0;
`

class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            primaryColor: primary,
            secondaryColor: secondary,
            tertiaryColor: tertiary,
        };
    }

    render() {
        return(
            <>
               <Intro color={this.state.secondaryColor}>
                    Some skills I've developed
               </Intro>
                <Skill dimension={"5"} top={"37"} left={"18"} font={"2"}>
                    <h3>
                        PHP
                    </h3>
               </Skill>
               <Arrow lenght={"5"} rotation={"30"} top={"32"} left={"22"}/>
               <Skill dimension={"5"} top={"25"} left={"18.5"} font={"2"}>
                    <h3>
                        PYTHON
                    </h3>
               </Skill>
               <Arrow lenght={"5"} rotation={"-20"} top={"40"} left={"22"}/>
               <Skill dimension={"5"} top={"48"} left={"21"} font={"2"}>
                    <h3>
                        AWS
                    </h3>
               </Skill>
               <Arrow lenght={"5"} rotation={"-50"} top={"48"} left={"23"}/>
               <Skill dimension={"5"} top={"51.5"} left={"27"} font={"2"}>
                    <h3>
                        FIREBASE
                    </h3>
               </Skill>
               <Arrow lenght={"5"} rotation={"-90"} top={"52"} left={"27.5"}/>
               <Skill className='info' dimension={"12"} top={"26"} left={"24"} font={"4"}>
                    <h3>
                        DEVELOPER
                    </h3>
               </Skill>
                <Comment top={"13"} left={"17"} size={"18"}>
                    I'm programming for years now, starting from the first day of High School. I used those 4 for languages and tools for some project like hosting this website or the project i've done to get my diploma. 
                </Comment>
               <Arrow lenght={"12"} rotation={"5"} top={"42"} left={"35"}/>
               <Skill className='info' dimension={"10"} top={"32"} left={"44"} font={"3.5"}>
                    <h3>
                        JAVASCRIPT
                    </h3>
               </Skill>
                <Comment top={"20"} left={"38"} size={"15"}>
                    I understand JS well, thanks to the lessons I attended at the University and partly from having read the documentation on my own
                </Comment>
               <Arrow lenght={"5"} rotation={"85"} top={"53"} left={"46.5"}/>
               <Arrow lenght={"12"} rotation={"-15"} top={"40"} left={"52"}/>
               <Skill dimension={"5"} top={"55"} left={"47"} font={"1.8"}>
                    <h3>
                        TYPESCRIPT
                    </h3>
               </Skill>
               <Skill className='info' dimension={"8"} top={"27"} left={"60"} font={"3"}>
                    <h3>
                        REACT
                    </h3>
               </Skill>
                <Comment top={"28"} left={"70"} size={"12"}>
                    I can easily use its simpler features, for the more complex ones I still have to rely on the docs
                </Comment>  
               <Skill  className='info'dimension={"12"} top={"67"} left={"34"} font={"4"}>
                    <h3>
                        DESIGNER
                    </h3>
               </Skill>
                <Comment top={"75"} left={"16"} size={"15"}>
                    I learned almost everything from the lessons I attended at university and I often found myself using Google's Material Design.
                </Comment>
               <Arrow lenght={"5"} rotation={"10"} top={"80"} left={"45"}/>
               <Skill dimension={"5"} top={"77"} left={"47.5"} font={"2"}>
                    <h3>
                        FIGMA
                    </h3>
               </Skill>
               <Skill dimension={"5"} top={"62"} left={"71"} font={"2"}>
                    <h3>
                        FUSION 360
                    </h3>
               </Skill>
               <Arrow lenght={"5"} rotation={"-55"} top={"60"} left={"74"}/>
               <Skill dimension={"8"} top={"47"} left={"74"} font={"2.6"}>
                    <h3>
                        3D PRINTING
                    </h3>
               </Skill>
            </>
        );
    }
}

export default Skills;
