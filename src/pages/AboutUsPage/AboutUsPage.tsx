import { ContactLink } from "components/Layout/styles";
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
import { faGithub, faLinkedinIn, faXing } from "@fortawesome/free-brands-svg-icons";

function AboutUsPage() {
  return (
    <AboutUsContainer>
      <AboutUsTitle>Our team:</AboutUsTitle>
      <AboutUsWrapper>
        <DeveloperCard>
            <DeveloperInfoContainer>
                <DeveloperImg />
                <DeveloperInfo>
                    <DeveloperName>Nataliia Kyrylenko</DeveloperName>
                    <DeveloperName>Frontend Developer</DeveloperName>
                </DeveloperInfo>
            </DeveloperInfoContainer>
          <IconContainer>
            <ContactLink
              href="https://www.linkedin.com/in/nata-kyrylenko/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
            </ContactLink>
            <ContactLink
              href="https://www.xing.com/profile/Nataliia_Kyrylenko/web_profiles?expandNeffi=true"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXing}  size="2x" />
            </ContactLink>
            
            <ContactLink
              href="https://github.com/NataKyrylenko"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} size="2x"/>
            </ContactLink>
          </IconContainer>
        </DeveloperCard>

        <DeveloperCard>
            <DeveloperInfoContainer>
                <DeveloperImg />
                <DeveloperInfo>
                    <DeveloperName>Name</DeveloperName>
                    <DeveloperName>Developer</DeveloperName>
                </DeveloperInfo>
            </DeveloperInfoContainer>
          <IconContainer>
            <ContactLink
              href="#/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
            </ContactLink>
            <ContactLink
              href="#"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXing}  size="2x" />
            </ContactLink>
            
            <ContactLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} size="2x"/>
            </ContactLink>
          </IconContainer>
        </DeveloperCard>

        <DeveloperCard>
            <DeveloperInfoContainer>
                <DeveloperImg />
                <DeveloperInfo>
                    <DeveloperName>Name</DeveloperName>
                    <DeveloperName>Developer</DeveloperName>
                </DeveloperInfo>
            </DeveloperInfoContainer>
          <IconContainer>
            <ContactLink
              href="#/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
            </ContactLink>
            <ContactLink
              href="#"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXing}  size="2x" />
            </ContactLink>
            
            <ContactLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} size="2x"/>
            </ContactLink>
          </IconContainer>
        </DeveloperCard>

        <DeveloperCard>
            <DeveloperInfoContainer>
                <DeveloperImg />
                <DeveloperInfo>
                    <DeveloperName>Name</DeveloperName>
                    <DeveloperName>Developer</DeveloperName>
                </DeveloperInfo>
            </DeveloperInfoContainer>
          <IconContainer>
            <ContactLink
              href="#/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
            </ContactLink>
            <ContactLink
              href="#"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXing}  size="2x" />
            </ContactLink>
            
            <ContactLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} size="2x"/>
            </ContactLink>
          </IconContainer>
        </DeveloperCard>

        <DeveloperCard>
            <DeveloperInfoContainer>
                <DeveloperImg />
                <DeveloperInfo>
                    <DeveloperName>Name</DeveloperName>
                    <DeveloperName>Developer</DeveloperName>
                </DeveloperInfo>
            </DeveloperInfoContainer>
          <IconContainer>
            <ContactLink
              href="#/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
            </ContactLink>
            <ContactLink
              href="#"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXing}  size="2x" />
            </ContactLink>
            
            <ContactLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} size="2x"/>
            </ContactLink>
          </IconContainer>
        </DeveloperCard>

        <DeveloperCard>
            <DeveloperInfoContainer>
                <DeveloperImg />
                <DeveloperInfo>
                    <DeveloperName>Name</DeveloperName>
                    <DeveloperName>Developer</DeveloperName>
                </DeveloperInfo>
            </DeveloperInfoContainer>
          <IconContainer>
            <ContactLink
              href="#/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
            </ContactLink>
            <ContactLink
              href="#"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXing}  size="2x" />
            </ContactLink>
            
            <ContactLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} size="2x"/>
            </ContactLink>
          </IconContainer>
        </DeveloperCard>

        
      </AboutUsWrapper>
    </AboutUsContainer>
  );
}

export default AboutUsPage;
