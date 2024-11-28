import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkElement = styled(Link)`
  text-decoration: none;
  margin-right: 10px;
  margin-bottom: 20px;
`
export const VideoListElement = styled.li`
  width: 230px;
  display: flex;
  flex-direction: column;
`
export const VideoImg = styled.img`
  width: 100%;
`
export const VideoInfoDiv = styled.div`
  width: 100%;
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
  font-size: 15px;
  color: ${props => (props.theme === 'light' ? '#383838' : '#f9f9f9')};
  margin-top: 0;
  margin-bottom: 5px;
`
export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 13px;
  color: #475569;
`
