import React from 'react';
import styled from 'styled-components';

import Person from './Person'
const StyledPeople = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

function People({people}) {
    return(
        <StyledPeople>
            {people.map(character => <Person person={character}/>)}
        </StyledPeople>
    )
}

export default People;