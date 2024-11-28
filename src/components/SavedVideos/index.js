import {Component} from 'react'
import SavedVideoItem from '../SavedVideoItem'
import {
  PageContainer,
  BodyContainer,
  ContentContainer,
  NoResultsContainer,
  NoResultsImg,
  NoResultHeading,
  NoResultsText,
  BannerHeader,
  BannerLogoContainer,
  FaFireIcon,
  BannerHeading,
  VideosList,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, savedVideosList} = value
          // console.log(savedVideosList)
          const savedVideosListLength = savedVideosList.length
          return (
            <PageContainer data-testid="savedVideos" theme={theme}>
              <Header />
              <BodyContainer>
                <Sidebar activeTab="SAVED_VIDEOS" theme={theme} />
                <ContentContainer>
                  {savedVideosListLength > 0 ? (
                    <>
                      <BannerHeader data-testid="banner" theme={theme}>
                        <BannerLogoContainer theme={theme}>
                          <FaFireIcon />
                        </BannerLogoContainer>
                        <BannerHeading theme={theme}>
                          Saved Videos
                        </BannerHeading>
                      </BannerHeader>
                      <VideosList>
                        {savedVideosList.map(each => (
                          <SavedVideoItem key={each.id} videoDetails={each} />
                        ))}
                      </VideosList>
                    </>
                  ) : (
                    <NoResultsContainer>
                      <NoResultsImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <NoResultHeading theme={theme}>
                        No saved videos found
                      </NoResultHeading>
                      <NoResultsText theme={theme}>
                        You can save your videos while watching them
                      </NoResultsText>
                    </NoResultsContainer>
                  )}
                </ContentContainer>
              </BodyContainer>
            </PageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
