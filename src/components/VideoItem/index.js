import {
  LinkElement,
  VideoListElement,
  VideoImg,
  VideoInfoDiv,
  ChannelLogo,
  InfoDiv,
  TitleText,
  Text,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    channel,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <LinkElement to={`/videos/${id}`}>
            <VideoListElement>
              <VideoImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfoDiv>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <InfoDiv>
                  <TitleText theme={theme}>{title}</TitleText>
                  <Text>{name}</Text>
                  <Text>
                    {viewCount} views . {publishedAt}
                  </Text>
                </InfoDiv>
              </VideoInfoDiv>
            </VideoListElement>
          </LinkElement>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
