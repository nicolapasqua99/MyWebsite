import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';

const MyDescBigLeft = styled.div`
    z-index: 2;
    position: absolute;
    //top: calc(20vh + 4rem);
    left: 5vw;
    bottom: 0;
    width: 40vw;
    height: calc(78vh - 4rem);
    //background-color: ${props => props.primary || 'black'};
    font-weight: 600;
    font-size: 3rem;
`

const MyDescBigRight = styled.div`
    z-index: 2;
    position: absolute;
    //top: calc(20vh + 4rem);
    right: 5vw;
    bottom: 0;
    width: 40vw;
    height: calc(80vh - 4rem);
    //background-color: ${props => props.primary || 'black'};
    font-weight: 600;
    font-size: 3rem;
`

const MyDescBigImg = styled.img`
    z-index: 3;
    position: relative;
    top: 0;
    left: 0;
    width: auto;
    height: calc(78vh - 4rem);
`

const MyDescBigDesc = styled.p`
    z-index: 3;
    position: absolute;
    top: 5vh;
    right: 0vh;
    width: 60vw;
    height: 20vh;
    line-height: 6rem;
    font-size: 4rem;
    font-weight: 600;
    text-align: right;
    color: ${props => props.primary || 'black'};
`


const parallaxDataBio = [
    {
    start: '0vh',
    duration: '20vh',
        properties: [
            {
                startValue: -20,
                endValue: -20,
                unit: 'rem',
                property: 'translateY',
            },
        ],
    },
    {
    start: '20vh',
    duration: '80vh',
        properties: [
            {
                startValue: -20,
                endValue: 0,
                unit: 'rem',
                property: 'translateY',
            },
        ],
    },
];

class MySelf extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <>
                <MyDescBigLeft primary={ this.context.primaryColor } >
                    <Plx parallaxData={ parallaxDataBio }>
                        <MyDescBigImg src="./img/photocolorsoldnew.svg" />
                    </Plx>
                </MyDescBigLeft>
                <MyDescBigRight>
                    <MyDescBigDesc primary={ this.context.primaryColor } >
                    Hi! I'm Nicola Pasqualini and I'm studying Interface and Communication Technology at the University of Trento. I love to develop software or interfaces and think about how they will help people. My biggest passion is to get myself and my work every day better.
                    </MyDescBigDesc>
                </MyDescBigRight>
            </>
        );
    }
}

export default MySelf;
