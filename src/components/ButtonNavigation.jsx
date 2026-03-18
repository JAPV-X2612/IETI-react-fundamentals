export const ButtonNavigation = ({icon, text}) => (
    <button>
      {icon && <img src={icon} alt={text}/>}
      <p>{text}</p>
    </button>
);
