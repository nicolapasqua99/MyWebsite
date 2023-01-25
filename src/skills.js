import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { primary, secondary, tertiary } from './configs/colors';

const TitleList = styled.h2`
    position: relative;
    padding-top: 12vh;
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
    padding-top: 5vh;
    left: 5vw;
    width: 92vw;
    height: auto;
    line-height: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content:
    z-index: 200;
    display: flex;
`

const Section = styled.div`
    position: relative;
    width: 20vw;
    margin: 5vh 1.5vw;
    height: auto;
    & div div{
        height: 20%;
        width: 20%;
        margin: auto;
    }
    & div svg{
        height: 100%;
        width: 100%;
    }
`

const TitleSection = styled.h3`
    line-height: 3.5rem;
    font-size: 3.5rem;
    font-weight: 200;
    text-align: center;
    color: ${props => props.color || 'black'}; 
`

const SectionDesc = styled.p`
    margin-top: 2vh;
    line-height: 3rem;
    font-size: 2rem;
    text-align: center;
    color: ${props => props.color || 'black'}; 
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
                <TitleList color={this.state.secondaryColor}>
                    What I can do
                </TitleList> 
                <Container>
                    <Section>
                        <ReactSVG src="./img/icons/vscode.svg" />
                        <TitleSection color={this.state.secondaryColor}>
                            I'm a Developer
                        </TitleSection>
                        <SectionDesc color={this.state.secondaryColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, nisi non dictum porta, nisl urna rutrum eros, ut tempor leo est ac diam. Nullam accumsan in mauris vitae bibendum. Duis congue ut quam in scelerisque. Mauris hendrerit auctor sapien ut fringilla. Maecenas bibendum neque id massa lacinia pulvinar. Aenean volutpat consequat massa. Morbi et tortor sit amet quam rhoncus aliquet. Praesent vehicula turpis felis, a faucibus lacus laoreet et. Nulla non velit fermentum, luctus arcu sit amet, mattis massa. Fusce porttitor eros non libero vulputate, vitae tristique turpis eleifend. Maecenas fermentum risus at ex scelerisque, in sollicitudin purus placerat. Curabitur in sapien laoreet diam pulvinar placerat. Sed ut porta risus. Donec tincidunt massa et odio malesuada imperdiet.
                        </SectionDesc>
                    </Section>
                    <Section>
                        <ReactSVG src="./img/icons/figma.svg" />
                        <TitleSection color={this.state.secondaryColor}>
                            I'm an UX Designer
                        </TitleSection>
                        <SectionDesc color={this.state.secondaryColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, nisi non dictum porta, nisl urna rutrum eros, ut tempor leo est ac diam. Nullam accumsan in mauris vitae bibendum. Duis congue ut quam in scelerisque. Mauris hendrerit auctor sapien ut fringilla. Maecenas bibendum neque id massa lacinia pulvinar. Aenean volutpat consequat massa. Morbi et tortor sit amet quam rhoncus aliquet. Praesent vehicula turpis felis, a faucibus lacus laoreet et. Nulla non velit fermentum, luctus arcu sit amet, mattis massa. Fusce porttitor eros non libero vulputate, vitae tristique turpis eleifend. Maecenas fermentum risus at ex scelerisque, in sollicitudin purus placerat. Curabitur in sapien laoreet diam pulvinar placerat. Sed ut porta risus. Donec tincidunt massa et odio malesuada imperdiet.
                        </SectionDesc>
                    </Section>
                    <Section>
                        <ReactSVG src="./img/icons/coursera.svg" />
                        <TitleSection color={this.state.secondaryColor}>
                            I'm a Learner
                        </TitleSection>
                        <SectionDesc color={this.state.secondaryColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, nisi non dictum porta, nisl urna rutrum eros, ut tempor leo est ac diam. Nullam accumsan in mauris vitae bibendum. Duis congue ut quam in scelerisque. Mauris hendrerit auctor sapien ut fringilla. Maecenas bibendum neque id massa lacinia pulvinar. Aenean volutpat consequat massa. Morbi et tortor sit amet quam rhoncus aliquet. Praesent vehicula turpis felis, a faucibus lacus laoreet et. Nulla non velit fermentum, luctus arcu sit amet, mattis massa. Fusce porttitor eros non libero vulputate, vitae tristique turpis eleifend. Maecenas fermentum risus at ex scelerisque, in sollicitudin purus placerat. Curabitur in sapien laoreet diam pulvinar placerat. Sed ut porta risus. Donec tincidunt massa et odio malesuada imperdiet.
                        </SectionDesc>
                    </Section>
                    <Section>
                        <ReactSVG src="./img/icons/reddit.svg" />
                        <TitleSection color={this.state.secondaryColor}>
                            I'm a Geek
                        </TitleSection>
                        <SectionDesc color={this.state.secondaryColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, nisi non dictum porta, nisl urna rutrum eros, ut tempor leo est ac diam. Nullam accumsan in mauris vitae bibendum. Duis congue ut quam in scelerisque. Mauris hendrerit auctor sapien ut fringilla. Maecenas bibendum neque id massa lacinia pulvinar. Aenean volutpat consequat massa. Morbi et tortor sit amet quam rhoncus aliquet. Praesent vehicula turpis felis, a faucibus lacus laoreet et. Nulla non velit fermentum, luctus arcu sit amet, mattis massa. Fusce porttitor eros non libero vulputate, vitae tristique turpis eleifend. Maecenas fermentum risus at ex scelerisque, in sollicitudin purus placerat. Curabitur in sapien laoreet diam pulvinar placerat. Sed ut porta risus. Donec tincidunt massa et odio malesuada imperdiet.
                        </SectionDesc>
                    </Section>
                </Container>
                
            </>
        );
    }
}

export default Skills;
