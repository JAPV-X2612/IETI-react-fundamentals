import { firstPicture, secondPicture, thirdPicture, fourthPicture } from './data';
import ArtPicture from './components/ArtPicture';

export function App() {
    return (
        <section>
            <ArtPicture picture={firstPicture} />
            <ArtPicture picture={secondPicture} />
            <ArtPicture picture={thirdPicture} />
            <ArtPicture picture={fourthPicture} />
        </section>
    );
}