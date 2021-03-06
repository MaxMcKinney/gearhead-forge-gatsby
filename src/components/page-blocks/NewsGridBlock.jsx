import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NewsGridBlock = props => {
    return (
        (props.flipped === false && (
            <NewsGridContainer>{props.children}</NewsGridContainer>
        )) ||
        (props.flipped === true && (
            <NewsGridContainerFlipped>
                {props.children}
            </NewsGridContainerFlipped>
        ))
    );
};

const NewsGridContainer = styled.div`
    width: 100%;
    height: 100vh;
    /*max-height: 900px;*/
    min-height: 900px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        'firstItem secondItem'
        'firstItem thirdItem'
        'firstItem thirdItem';

    > *:first-child {
        grid-area: firstItem;
        border-right: 1px solid #2a2a2a;
    }
    > *:nth-child(2) {
        grid-area: secondItem;
        border-bottom: 1px solid #2a2a2a;
    }
    > *:nth-child(3) {
        grid-area: thirdItem;
    }
    @media (max-width: 790px) {
        height: initial;
        grid-template-columns: 1fr;
        grid-template-areas:
            'firstItem'
            'secondItem'
            'thirdItem';
        grid-template-rows: min-content;
        grid-gap: 40px;
        padding-top: 40px;
        padding-bottom: 40px;
        > *:first-child {
            border-right: none;
        }
        > *:nth-child(2) {
            border-bottom: none;
        }
    }
`;

const NewsGridContainerFlipped = styled(NewsGridContainer)`
    grid-template-areas:
        'secondItem firstItem'
        'thirdItem firstItem'
        'thirdItem firstItem';
    > *:first-child {
        border-left: 1px solid #2a2a2a;
    }
`;

NewsGridBlock.defaultProps = {
    flipped: false,
};

NewsGridBlock.propTypes = {
    flipped: PropTypes.bool.isRequired,
};

export default NewsGridBlock;
