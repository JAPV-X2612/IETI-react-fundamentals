export const CharacterCard = ({name, imageURL}) => {
  return (
      <>
        <img src={imageURL} alt=""/>
        <p onClick={() => alert(name)}>{name}</p>
      </>
  );
};
