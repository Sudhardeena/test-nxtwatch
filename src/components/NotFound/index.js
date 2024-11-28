import {Component} from 'react'
import {
  PageContainer,
  BodyContainer,
  ContentContainer,
  NoResultsImg,
  NoResultHeading,
  NoResultsText,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          const imgUrl =
            theme === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          return (
            <PageContainer theme={theme}>
              <Header />
              <BodyContainer>
                <Sidebar theme={theme} />
                <ContentContainer>
                  <NoResultsImg src={imgUrl} alt="not found" />
                  <NoResultHeading theme={theme}>
                    Page Not Found
                  </NoResultHeading>
                  <NoResultsText theme={theme}>
                    we are sorry, the page you requested could not be found.
                  </NoResultsText>
                </ContentContainer>
              </BodyContainer>
            </PageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
