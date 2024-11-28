import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {
  PageContainer,
  BodyContainer,
  ContentContainer,
  LoaderContainer,
  ErrorContainer,
  ErrorHeading,
  ErrorImg,
  ErrorText,
  RetryBtn,
  TitleText,
  InfoContainer,
  InfoText,
  ButtonsContainer,
  LikeDislikeBtn,
  SavedBtn,
  Hr,
  VideoInfoDiv,
  ChannelLogo,
  InfoDiv,
  VideoInfoTitleText,
  VideoInfoText,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConst.initial,
    videoDetails: {},
    isLikeed: false,
    isDisLiked: false,
  }

  componentDidMount = () => this.getVideoDetails()

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConst.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const each = data.video_details
      const updatedData = {
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
          subscriberCount: each.channel.subscriber_count,
        },
        description: each.description,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        videoUrl: each.video_url,
        viewCount: each.view_count,
      }
      this.setState({
        videoDetails: updatedData,
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

  onClickLike = () => {
    const {isLikeed} = this.state
    if (isLikeed === false) {
      this.setState({isLikeed: true, isDisLiked: false})
    } else {
      this.setState({isLikeed: false})
    }
  }

  onClickDisLike = () => {
    const {isDisLiked} = this.state
    if (isDisLiked === false) {
      this.setState({isDisLiked: true, isLikeed: false})
    } else {
      this.setState({isDisLiked: false})
    }
  }

  renderSuccessView = () => {
    const {videoDetails, isLikeed, isDisLiked} = this.state
    const {
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, savedVideosList, saveVideo, removeVideo} = value
          console.log(savedVideosList)
          let isSaved = false
          savedVideosList.forEach(each => {
            if (each.id === videoDetails.id) {
              isSaved = true
            }
          })
          console.log(isSaved)
          const onSave = () => {
            if (isSaved) {
              removeVideo(videoDetails)
            } else {
              saveVideo(videoDetails)
            }
          }
          const savedBtnText = isSaved ? 'Saved' : 'Save'
          return (
            <>
              <ReactPlayer width="100%" url={videoUrl} controls />
              <TitleText theme={theme}>{title}</TitleText>
              <InfoContainer>
                <InfoText theme={theme}>
                  {viewCount} views . {publishedAt}
                </InfoText>
                <ButtonsContainer>
                  <LikeDislikeBtn active={isLikeed} onClick={this.onClickLike}>
                    <AiOutlineLike /> Like
                  </LikeDislikeBtn>
                  <LikeDislikeBtn
                    active={isDisLiked}
                    onClick={this.onClickDisLike}
                  >
                    <AiOutlineDislike /> Dislike
                  </LikeDislikeBtn>
                  <SavedBtn isSaved={isSaved} onClick={onSave}>
                    {savedBtnText}
                  </SavedBtn>
                </ButtonsContainer>
              </InfoContainer>
              <Hr />
              <VideoInfoDiv>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <InfoDiv>
                  <VideoInfoTitleText theme={theme}>{name}</VideoInfoTitleText>
                  <VideoInfoText theme={theme}>
                    {subscriberCount}subscribers
                  </VideoInfoText>
                  <TitleText theme={theme}>{description}</TitleText>
                </InfoDiv>
              </VideoInfoDiv>
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
            <RetryBtn type="button" onClick={this.getVideoDetails}>
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
            <PageContainer data-testid="videoItemDetails" theme={theme}>
              <Header />
              <BodyContainer>
                <Sidebar theme={theme} />
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

export default VideoItemDetails
