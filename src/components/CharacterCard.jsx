export const CharacterCard = ({name, imageURL}) => (
    <>
      <img src={imageURL} alt={name}/>
      <p onClick={() => alert(name)}>{name}</p>
    </>
);
