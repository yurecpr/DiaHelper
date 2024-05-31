import Button from "components/Button/Button";
import {
  ButtonsWrap,
  HomeContainer,
  TextContainer,
  TextContent,
} from "./styles";

export default function HomePage() {
  return (
    <HomeContainer>
      <TextContainer>
        <TextContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, consectetur! Ab, fugiat maiores optio nulla aliquid
          laboriosam veniam ad officia hic esse, debitis quod eos blanditiis
          impedit quam eveniet asperiores!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim ullam omnis repudiandae quasi quod voluptate!
        </TextContent>
        <ButtonsWrap>
          <Button name="START" />
          <Button name="LEARN MORE" />
        </ButtonsWrap>
      </TextContainer>
    </HomeContainer>
  );
}
