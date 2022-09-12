import React from 'react';
import styled from 'styled-components';
import { primary, secondary, tertiary } from './configs/colors';

const TitleList = styled.h2`
    position: relative;
    padding-top: 16vh;
    left: 0vh;
    width: 100vw;
    line-height: 6rem;
    font-size: 4rem;
    font-weight: 600;
    text-align: center;
    color: ${props => props.color || 'black'}; 
`

const Container = styled.div`
    position: relative;
    padding-top: 52vh;
    left: 20vw;
    width: 60vw;
    height: auto;
    line-height: 6rem;
`

const DescContact = styled.h3`
    position: relative;
    top: 2vh;
    left: 0vw;
    margin: auto;
    width: auto;
    line-height: 3.5rem;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    color: ${props => props.color || 'black'};  
`

const Contact = styled.p`
    position: relative;
    padding-top: 5vh;
    padding-bottom: 3vh;
    left: 0vh;
    margin: auto;
    max-width: 50vw;
    line-height: 3rem;
    font-size: 4rem;
    font-weight: 400;
    text-align: center;
    color: ${props => props.color || 'black'}; 
   
`

class Contacts extends React.Component{
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
              <TitleList color={this.state.secondaryColor}>
                    Get in Touch with me on my Social
               </TitleList> 
               <Container>
                    <DescContact color={this.state.secondaryColor}>
                        Or send me an email at
                    </DescContact>
                    <Contact color={this.state.secondaryColor}>
                        nicolapasqua99@gmail.com
                    </Contact>
               </Container>
            </>
        );
    }
}

export default Contacts;
