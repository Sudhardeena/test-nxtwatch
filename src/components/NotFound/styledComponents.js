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
`
export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
