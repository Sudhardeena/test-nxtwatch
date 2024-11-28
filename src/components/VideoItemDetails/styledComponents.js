import styled from 'styled-components'

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
  max-height: 100%;
  padding: 20px;
`
export const LoaderContainer = styled.div`
  flex-grow: 1;
  padding-top: 200px;
  text-align: center;
`
export const ErrorContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: roboto;
`

export const ErrorImg = styled.img`
  width: 50%;
`
export const ErrorHeading = styled.h1`
  color: ${props => (props.theme === 'light' ? '#181818' : '#ffffff')};
`
export const ErrorText = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : '#94a3b8')};
`
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  border: none;
  padding: 5px 10px;
  color: #ffffff;
  font-size: 20px;
`
export const TitleText = styled.p`
  font-size: 15px;
  color: ${props => (props.theme === 'light' ? '#383838' : '#f9f9f9')};
  margin: 20px 0;
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const LikeDislikeBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  margin: 0 10px;
`

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 13px;
`
export const InfoText = styled(Text)`
  color: #64748b;
`
export const SavedBtn = styled(LikeDislikeBtn)`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`
export const Hr = styled.hr`
  width: 100%;
  border-style: solid;
  height: 0;
  border-top: none;
  border-width: 1px;
  border-color: #64748b;
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
export const VideoInfoTitleText = styled.p`
  font-size: 15px;
  color: ${props => (props.theme === 'light' ? '#383838' : '#f9f9f9')};
  margin-top: 0;
  margin-bottom: 5px;
`
export const VideoInfoText = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 13px;
  color: #475569;
`
