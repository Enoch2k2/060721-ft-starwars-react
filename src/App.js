import React, { useState, useEffect } from 'react';
import List from './components/List';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [index, setIndex] = useState(80);

  useEffect(() => {
    fetch('http://localhost:3001/characters')
      .then(resp => resp.json())
      .then(data => setCharacters(data))
    // let nextUrl = "https://swapi.dev/api/people";
    // let charData = [];

    // while (nextUrl) {
    //   const response = await fetch(nextUrl);
    //   const data = await response.json();
    //   nextUrl = data.next;
    //   charData = [...charData, ...data.results]
    // }

    // for (let i = 0; i < charData.length; i++) {
    //   const character = charData[i];
    //   const response = await fetch(character.homeworld);
    //   const data = await response.json();
    //   character.homeworld = data.name

    //   await fetch('http://localhost:3001/characters', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(character)
    //   })
    // }

  }, [])
  return (
    <div className="App">
      <h1>Star Wars!</h1>
      <List
        characters={ characters }
        index={ index }
      />
    </div>
  )
}

export default App;
