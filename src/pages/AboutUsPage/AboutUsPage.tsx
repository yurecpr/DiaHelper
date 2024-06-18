import { ContactLink } from "components/Layout/styles";
import {
  NataImage,
  YadyaImage,
  NastiiaImage,
  SvetaImage,
  AlexeyImage,
  DianaImage,
  YuriiImage,
} from "../../assets/image";
import {
  AboutUsContainer,
  AboutUsTitle,
  AboutUsWrapper,
  DeveloperCard,
  DeveloperImg,
  DeveloperInfo,
  DeveloperInfoContainer,
  DeveloperName,
  IconContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

const developers = [
  {
    name: "Nataliia Kyrylenko",
    role: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/nata-kyrylenko/",
    xing: "https://www.xing.com/profile/Nataliia_Kyrylenko/web_profiles?expandNeffi=true",
    github: "https://github.com/NataKyrylenko",
    // img: "tree/main/src/assets/Team/Nata.jpg",
    img: NataImage,
  },
  {
    name: "Yurii Bolharyn",
    role: "Team Lead",
    linkedin: "https://www.linkedin.com/in/yurii-bolharyn-30a92a293/",
    xing: "https://www.xing.com/profile/Yurii_Bolharyn/web_profiles?expandNeffi=true",
    github: "https://github.com/yurecpr",
    img: YuriiImage,
  },
  {
    name: "Svitlana Petrakova",
    role: "Backend Developer",
    linkedin: "https://www.linkedin.com/in/svitlana-petrakova-b67558314/",
    xing: "#",
    github: "#",
    img: SvetaImage,
  },
  {
    name: "Yadviga Demianova",
    role: "Backend Developer",
    linkedin: "#/",
    xing: "#",
    github: "https://github.com/YadyaDeman",
    img: YadyaImage,
  },
  {
    name: "Anastasiia Popova",
    role: "QA",
    linkedin: "http://www.linkedin.com/in/anastasiia-popova-851448314",
    xing: "#https://www.xing.com/profile/Anastasiia_Popova048461",
    github: "https://github.com/AnastasiiaPopova17",
    img: NastiiaImage,
  },
  {
    name: "Diana Lukovsky",
    role: "QA",
    linkedin: "https://www.linkedin.com/in/diana-lukovsky/",
    xing: "#",
    github: "https://github.com/DianaLukovskyi",
    img: DianaImage,
  },
  {
    name: "Alexei Ruscan",
    role: "Frontend Developer",
    linkedin: "#/",
    xing: "#",
    github: "https://github.com/AleksInPlay?tab=repositories",
    img: AlexeyImage,
  },
];
function AboutUsPage() {
  return (
    <AboutUsContainer>
      <AboutUsTitle>Our team:</AboutUsTitle>
      <AboutUsWrapper>
        {developers.map((dev, index) => (
          <DeveloperCard key={index}>
            <DeveloperImg src={dev.img} alt={`${dev.name}'s photo`} />
            <DeveloperInfoContainer>
              <DeveloperInfo>
                <DeveloperName>{dev.name}</DeveloperName>
                <DeveloperName>{dev.role}</DeveloperName>
              </DeveloperInfo>
            </DeveloperInfoContainer>
            <IconContainer>
              <ContactLink href={dev.linkedin} target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </ContactLink>
              <ContactLink href={dev.xing} target="_blank">
                <FontAwesomeIcon icon={faXing} size="2x" />
              </ContactLink>
              <ContactLink
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </ContactLink>
            </IconContainer>
          </DeveloperCard>
        ))}
      </AboutUsWrapper>
    </AboutUsContainer>
  );
}

export default AboutUsPage;
