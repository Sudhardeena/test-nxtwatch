import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {
  PageContainer,
  BodyContainer,
  ContentContainer,
  LoaderContainer,
  BannerHeader,
  BannerLogoContainer,
  FaFireIcon,
  BannerHeading,
  VideosList,
  VideoListElement,
  LinkElement,
  VideoImg,
  InfoDiv,
  TitleText,
  Text,
  RetryBtn,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConst = {
  initial: 'INITIAL',
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Gaming extends Component {
  state = {
    apiStatus: apiStatusConst.initial,
    videosList: [],
  }

  componentDidMount = () => this.getVideosList()

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConst.inprogress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConst.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  renderInprogressView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <BannerHeader data-testid="banner" theme={theme}>
                <BannerLogoContainer theme={theme}>
                  <FaFireIcon />
                </BannerLogoContainer>
                <BannerHeading theme={theme}>Gaming</BannerHeading>
              </BannerHeader>
              <VideosList>
                {videosList.map(each => {
                  const {title, thumbnailUrl, viewCount, id} = each
                  return (
                    <LinkElement to={`/videos/${id}`} key={each.id}>
                      <VideoListElement>
                        <VideoImg src={thumbnailUrl} alt="video thumbnail" />
                        <InfoDiv>
                          <TitleText theme={theme}>{title}</TitleText>
                          <Text>{viewCount} Watching Worldwide</Text>
                        </InfoDiv>
                      </VideoListElement>
                    </LinkElement>
                  )
                })}
              </VideosList>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        const imgUrl =
          theme === 'light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <ErrorContainer>
            <ErrorImg src={imgUrl} alt="failure view" />
            <ErrorHeading theme={theme}>
              Oops! Something Went Wrong
            </ErrorHeading>
            <ErrorText theme={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </ErrorText>
            <RetryBtn type="button" onClick={this.getVideosList}>
              Retry
            </RetryBtn>
          </ErrorContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderResponsibleView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.inprogress:
        return this.renderInprogressView()
      case apiStatusConst.success:
        return this.renderSuccessView()
      case apiStatusConst.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <PageContainer data-testid="gaming" theme={theme}>
              <Header />
              <BodyContainer>
                <Sidebar activeTab="GAMING" theme={theme} />
                <ContentContainer>
                  {this.renderResponsibleView()}
                </ContentContainer>
              </BodyContainer>
            </PageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
