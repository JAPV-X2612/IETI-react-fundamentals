import { icon } from '../data/data';
import { ButtonNavigation } from './ButtonNavigation';
import { Icon } from './Icon';

export const NavBar = () => (
    <nav>
      <Icon imageURL={icon.imageURL} name={icon.name}/>
      <ButtonNavigation text="Films"/>
      <ButtonNavigation text="Characters"/>
    </nav>
);
