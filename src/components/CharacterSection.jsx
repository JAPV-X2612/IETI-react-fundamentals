import { currentTitles } from "../data/data";
import { CharacterList } from "./CharacterList";
import { CustomButton } from "./CustomButton";
import { InputSearch } from "./InputSearch";
import { Paragraph } from "./Paragraph";
import { TitleSection } from "./TitleSection";

export const CharacterSection = () => (
  <section>
    <TitleSection>Characters</TitleSection>
    <Paragraph>{`Showing ${currentTitles} titles`}</Paragraph>
    <InputSearch />
    <CustomButton>Gender</CustomButton>
    <CustomButton>Specie</CustomButton>
    <CustomButton>Sort by:</CustomButton>
    <CharacterList />
  </section>
);
