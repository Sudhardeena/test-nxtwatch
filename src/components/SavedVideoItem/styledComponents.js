import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
