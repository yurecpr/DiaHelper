import Button from "components/Button/Button";
import {
  ButtonsWrap,
  HomeContainer,
  TextContainer,
  TextContent,
} from "./styles";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <TextContainer>
        <TextContent>
          <p>Welcome to DiaHelper App!</p>Go directly to registration and let us
          create for you the best nutrition plan which helps you to live a
          healthy life. Or you can find all the necessary information on the
          diabetes by clicking on "Learn more" button. Change your lifestyle
          with DiaHelper!
        </TextContent>
        <ButtonsWrap>
          <Button name="START" onButtonClick={() => navigate("/login")} />
          <Button
            name="LEARN MORE"
            onButtonClick={() => navigate("/info-page")}
          />
        </ButtonsWrap>
      </TextContainer>
    </HomeContainer>
  );
}
