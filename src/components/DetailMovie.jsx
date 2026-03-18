import { director, movieName, posterMovie, producer, realeseDate } from '../data/data';
import { AdditionalInformation } from './AdditionalInformation';
import { ButtonNavigation } from './ButtonNavigation';
import { Paragraph } from './Paragraph';
import { Poster } from './Poster';
import { TitleSection } from './TitleSection';

export const DetailMovie = () => (
    <section>
      <ButtonNavigation text="Back"/>
      <TitleSection>{movieName}</TitleSection>
      <Paragraph>Grave of the Fireflies</Paragraph>
      <Poster imageURL={posterMovie.imageURL} name={posterMovie.name}/>
      <AdditionalInformation title={producer.title} information={producer.information}/>
      <AdditionalInformation title={realeseDate.title} information={realeseDate.information}/>
      <AdditionalInformation title={director.title} information={director.information}/>
    </section>
);
