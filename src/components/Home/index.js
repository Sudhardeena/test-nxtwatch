import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {MdSearch} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import {
  PageContainer,
  BodyContainer,
  ContentContainer,
  BannerContainer,
  BannerHeader,
  Logo,
  CloseBtn,
  Text,
  GetItNowButton,
  VideosSetion,
  SearchFeildContainer,
  SearchInput,
  SearchButton,
  VideosList,
  LoaderContainer,
  NoResultsContainer,
  NoResultsImg,
  NoResultHeading,
  NoResultsText,
  RetryBtn,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConst = {
  initial: 'INITIAL',
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConst.initial,
    videosList: [],
  }

  componentDidMount = () => this.getVideosList()

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConst.inprogress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
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

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  onSearch = () => this.getVideosList()

  onRemoveBanner = () => this.setState({showBanner: false})

  renderInprogressView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    if (videosList.length > 0) {
      return (
        <VideosList>
          {videosList.map(each => (
            <VideoItem key={each.id} videoDetails={each} />
          ))}
        </VideosList>
      )
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <NoResultsContainer>
              <NoResultsImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoResultHeading theme={theme}>
                No Search results found
              </NoResultHeading>
              <NoResultsText theme={theme}>
                Try different key words or remove search filter
              </NoResultsText>
              <RetryBtn type="button" onClick={this.getVideosList}>
                Retry
              </RetryBtn>
            </NoResultsContainer>
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
    const {showBanner} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <PageContainer data-testid="home" theme={theme}>
              <Header />
              <BodyContainer>
                <Sidebar activeTab="HOME" theme={theme} />
                <ContentContainer>
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerHeader>
                        <Logo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseBtn
                          type="button"
                          onClick={this.onRemoveBanner}
                          data-testid="close"
                        >
                          <IoMdClose />
                        </CloseBtn>
                      </BannerHeader>
                      <Text>Buy Nxt Watch Premium prepaid plans with</Text>
                      <Text>UPI</Text>
                      <GetItNowButton type="button">GET IT NOW</GetItNowButton>
                    </BannerContainer>
                  )}
                  <VideosSetion>
                    <SearchFeildContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        theme={theme}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        theme={theme}
                        onClick={this.onSearch}
                      >
                        <MdSearch />
                      </SearchButton>
                    </SearchFeildContainer>
                    {this.renderResponsibleView()}
                  </VideosSetion>
                </ContentContainer>
              </BodyContainer>
            </PageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
