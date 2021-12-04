import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import socialdata from "../../../../socialdata.json"
import "./footer.css"

const FooterGrid = styled.div`
        background: #00001F;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        padding: 50px 150px;
        transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        height: 200px;
        align-items: center;
    `
    const FooterLinks = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        grid-gap: 40px;
    `
    const FooterHomeLink = styled.a`
        font-size: 24px;
    `

    const FooterDivider = styled.div`
        height: 1px;
    `

    const FooterSocialLink = styled.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-content: center;
        align-items: center;
        grid-gap: 10px;
        justify-items: center;
        a.social--link {
            font-size: 20px;
        }
    `
    const FooterTeamLink = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        grid-gap: 10px;
        width: 200px;
        justify-self: end;
        justify-items: center;
        a.team--link {
            font-size: 18px;

        }
    `
    const FooterSubLinks = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
    `
    const FooterSiteInfo = styled.div`
        display: grid;
        grid-template-rows: 1fr 1fr;
        p {
            font-size: 18px;
            font-weight: 200;
        }
    `
    const FooterPolicies = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        grid-gap: 10px;
        justify-self: end;
        justify-items: end;
        a.privacy--link{
            font-size: 18px;
            font-weight: 200;

        }
    `

const Footer = ({darkMode}) => (
        <FooterGrid className={`${darkMode} footer--grid`}>
            <FooterLinks>
                <FooterHomeLink>The Fable of Etheria</FooterHomeLink>
                <FooterSocialLink>
                    {socialdata.socialLink.map( sl => (
                        <a className="social--link" key={sl.id} href={sl.link}>{sl.title}</a>
                    ))}
                </FooterSocialLink>
                <FooterTeamLink>
                    {socialdata.teamLink.map( sl => (
                        <a className="team--link" key={sl.id} href={sl.link}>{sl.title}</a>
                    ))}
                </FooterTeamLink>
            </FooterLinks>
            <FooterDivider className="footer--divider"/>
            <FooterSubLinks>
                <FooterSiteInfo>
                    <p>2021, All right Reserved</p>
                    <p>Designed by ROCA IT</p>
                </FooterSiteInfo>
                <FooterPolicies>
                    {socialdata.privacyLink.map( sl => (
                        <a className="privacy--link" key={sl.id} href={sl.link}>{sl.title}</a>
                    ))}
                </FooterPolicies>
            </FooterSubLinks>
        </FooterGrid>
        
    )

export default Footer