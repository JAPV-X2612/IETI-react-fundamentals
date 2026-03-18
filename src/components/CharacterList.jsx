import { charactersInformation } from '../data/charactersInformation';
import { CharacterCard } from './CharacterCard';

export const CharacterList = () => (
    <>
      {charactersInformation.map((character) => (
          <CharacterCard key={character.name} name={character.name} imageURL={character.imageURL}/>
      ))}
    </>
);
