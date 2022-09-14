import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:+20-101-297-5458">+20-101-297-5458</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:seif_fire2@hotmail.com">seif_fire2@hotmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at a time
          </Slogan>
        </CompanyContainer>

        <SocialIcons href='https://github.com'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/seif-elkady/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://itch.io/dashboard'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
      
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
