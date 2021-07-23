import React from 'react'
import StyledLi from './styled/StyledLi';

const List = ({ characters, index }) => {
  let charactersArray = characters.slice(index, index + 10);
  return (
    <ul>
      { charactersArray.map(character => <StyledLi>{character.name}</StyledLi>)}
    </ul>
  )
}

export default List
