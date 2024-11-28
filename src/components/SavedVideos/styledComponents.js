import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'

export const PageContainer = styled.div`
  width: 1000px;
  height: 100vh;
  max-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
export const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  max-height: 90%;
`
export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 100%;
`
export const NoResultsContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: roboto;
`

export const NoResultsImg = styled.img`
  width: 50%;
`
export const NoResultHeading = styled.h1`
  color: ${props => (props.theme === 'light' ? '#181818' : '#ffffff')};
`
export const NoResultsText = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : '#94a3b8')};
`
export const BannerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 40px;
  background-color: ${props =>
    props.theme === 'light' ? '#f1f1f1' : '#231f20'};
  height: 80px;
`
export const BannerLogoContainer = styled.div`
  background-color: ${props =>
    props.theme === 'light' ? '#f1f5f9' : '#000000'};
  width: 50px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`
export const FaFireIcon = styled(FaFire)`
  color: #ff0b37;
`

export const BannerHeading = styled(NoResultHeading)`
  font-size: 25px;
`

export const VideosList = styled.ul`
  flex-grow: 1;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const LinkElement = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
`

export const VideoListElement = styled.li`
  width: 100%;
  display: flex;
`
export const VideoImg = styled.img`
  width: 50%;
  margin-right: 20px;
`
export const VideoInfoDiv = styled.div`
  width: 40%;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  font-family: roboto;
`

export const ChannelLogo = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const TitleText = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.theme === 'light' ? '#383838' : '#f9f9f9')};
  margin-top: 0;
  margin-bottom: 5px;
  line-height: 1.5;
`
export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 15px;
  color: #475569;
`
