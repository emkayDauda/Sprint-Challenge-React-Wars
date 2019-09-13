import React from 'react';
import styled from 'styled-components';
import male from '../../images/man.svg'
import female from '../../images/girl-avatar.svg'



function Person({person}){
    const src = person.gender === 'male' ? male : female;

    const StyledPerson = styled.div`
    border: .2rem solid white;
    border-radius: 3rem;
    padding-top: 2.5rem;
    width: 30%;
    margin: 1.3rem 1rem;

    img {
        width: 85%;
        height: 25rem;
        border-radius: 2rem;
        margin: 0 auto;
    }

    p {
        color: white;
    }

`

    const EyeP = styled.p`
        color: white;

        span {
            color: ${person.eye_color}
        }
    `

    const Name = styled.p`
        font-family: 'Tangerine', serif;
        font-size: 4rem;
    `
    
    return(
        <StyledPerson>
            <img src={src} alt=""/>
            <Name>{person.name}</Name>
            <div>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
            </div>
            <EyeP>Eye color: <span >{person.eye_color}</span> </EyeP>
            <p>Hair color: {person.hair_color}</p>
            <p>Gender: {person.gender}</p>
        </StyledPerson>
    )
}

export default Person;