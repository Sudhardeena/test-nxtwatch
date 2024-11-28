import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 1000px;
  height: 100vh;
  max-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#181818'};
`
export const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  max-height: 90%;
`
export const ContentContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  max-height: 100%;
`
export const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const BannerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Logo = styled.img`
  width: 150px;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
`

export const Text = styled.p`
  font-size: 20px;
  margin: 5px 0;
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border-style: solid;
  padding: 5px 10px;
  border-width: 1px;
  color: #000000;
  border-color: #000000;
  font-size: 20px;
  font-family: roboto;
`
export const VideosSetion = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const SearchFeildContainer = styled.div`
  display: flex;
`
export const SearchInput = styled.input`
  border-style: solid;
  padding: 10px;
  border-width: 1px;
  color: ${props => (props.theme === 'light' ? '#909090' : '#616e7c')};
  border-color: ${props => (props.theme === 'light' ? '#909090' : '#383838')};
  font-size: 20px;
  width: 350px;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : 'transparent'};
  outline: none;
`

export const SearchButton = styled.button`
  border-style: solid;
  padding: 10px;
  border-width: 1px;
  color: ${props => (props.theme === 'light' ? '#909090' : '#616e7c')};
  border-color: ${props => (props.theme === 'light' ? '#909090' : '#383838')};
  font-size: 20px;
  width: 80px;
  background-color: ${props =>
    props.theme === 'light' ? '#f4f4f4' : '#383838'};
`

export const VideosList = styled.ul`
  flex-grow: 1;
  width: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
export const LoaderContainer = styled.div`
  flex-grow: 1;
  padding-top: 200px;
  text-align: center;
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
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  border: none;
  padding: 5px 10px;
  color: #ffffff;
  font-size: 20px;
`
export const ErrorContainer = styled(NoResultsContainer)``

export const ErrorImg = styled(NoResultsImg)``

export const ErrorHeading = styled(NoResultHeading)``

export const ErrorText = styled(NoResultsText)``
