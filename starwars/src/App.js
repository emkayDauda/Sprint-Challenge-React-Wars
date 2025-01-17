import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

import People from './components/People/People'

const peopleApi = 'https://swapi.co/api/people/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [peopleFetched, setPeopleFetched] = useState([])
  const [url, setUrl] = useState(peopleApi)
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(url)
    .then(response => {
      console.log(response.data)
      const characters = response.data.results;
      setPeopleFetched(characters);
      setNext(response.data.next)
      setPrevious(response.data.previous)
      // console.log(`Next => ${next}`)
    })
    .catch(error => {
      console.log(error);
      
    })
  }, [url]);

  function onNextClicked(url){
      if(url && url !== "" ) setUrl(url)
  }

  const StyledButton = styled.button`
    padding: 1rem 2rem;
    border-radius: 3rem;
    font-family: 'Lato', serif;
    background: gray;
    margin: 2rem;
    color: white;
    font-size: 1.6rem;
  `

  const GreenButton = styled(StyledButton)`
    background: green;
  `

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <People people={peopleFetched}/>
      <StyledButton onClick={() => onNextClicked(previous)}>Previous</StyledButton>
      <GreenButton onClick={() => onNextClicked(next)}>Next</GreenButton>
    </div>
  );
}

export default App;
