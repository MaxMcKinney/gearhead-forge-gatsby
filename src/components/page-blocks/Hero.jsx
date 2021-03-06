import React from 'react';
import styled, { keyframes } from 'styled-components';

import Button from '../Button';

import heroBG from '../../images/hero.jpg';

export default function Hero() {
    const heroAction = e => {
        console.log('Clicked');
        const heroContainer = document.getElementById('heroContainer');
        window.scrollTo({
            top: heroContainer.clientHeight,
            behavior: 'smooth',
        });
    };

    return (
        <HeroContainer id="heroContainer">
            <HeroSubHeader>Long Live</HeroSubHeader>
            <HeroHeader>The Glorious Thunder</HeroHeader>
            <HeroDescription>
                Gearhead Forge is a group of enthusiasts passionately keeping
                the flame of hot rodding alive by building uniquely aggressive
                cars and forging a lifestyle.
            </HeroDescription>
            <HeroAction>
                <Button
                    text="View Latest Content"
                    onClick={heroAction}
                    type="regular"
                />
            </HeroAction>
        </HeroContainer>
    );
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 900px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;

    background-image: url(${heroBG});
    background-size: cover;
    background-position: center;
`;

const HeroHeader = styled.h1`
    color: var(--accent-color);
    margin-bottom: 40px;
    animation: ${fadeIn} 1s;
`;

const HeroSubHeader = styled.h2`
    color: var(--accent-color);
    animation: ${fadeIn} 0.5s;
`;

const HeroDescription = styled.p`
    line-height: 2.6rem;
    max-width: 415px;
    margin-bottom: 48px;
    animation: ${fadeIn} 2s;
`;

const HeroAction = styled.div`
    animation: ${fadeIn} 2.2s;
`;
