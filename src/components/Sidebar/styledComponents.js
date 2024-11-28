import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarElement = styled.div`
  width: 25%;
  background-color: black;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#212121'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
`
export const Tablist = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  margin: 0;
`

export const TabItem = styled.li`
  width: 100%;
  list-style: none;
  background-color: ${props => {
    if (props.theme === 'light') {
      return props.active === true ? '#cbd5e1' : 'transparent'
    }
    return props.active === true ? '#383838' : 'transparent'
  }};
`

export const TabLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  padding: 10px 20px;
`
export const TabIcon = styled.div`
  color: ${props => (props.active === true ? '#ff0000' : '#383838')};
  margin-right: 20px;
`

export const TabText = styled.p`
  color: ${props => {
    if (props.theme === 'light') {
      return props.active === true ? '#000000' : '#383838'
    }
    return props.active === true ? '#ffffff' : '#cccccc'
  }};
  font-size: 20px;
  margin: 0;
  font-family: roboto;
`
export const CommunicationDetails = styled.div`
  width: 100%;
  font-family: roboto;
  padding: 10px 20px;
`
export const SocialMediaLogos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
`
export const SocialMediaLogo = styled.img`
  width: 40px;
  margin-right: 20px;
`

export const ContactText = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : '#ffffff')};
  font-weight: bold;
  font-size: 30px;
`
export const EnjoyText = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : '#f4f4f4')};
  font-size: 20px;
  font-weight: bold;
`
