import {
  LinkElement,
  VideoListElement,
  VideoImg,
  InfoDiv,
  TitleText,
  Text,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {
    channel,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const {name} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <LinkElement to={`/videos/${id}`}>
            <VideoListElement>
              <VideoImg src={thumbnailUrl} alt="video thumbnail" />
              <InfoDiv>
                <TitleText theme={theme}>{title}</TitleText>
                <Text>{name}</Text>
                <Text>
                  {viewCount} views . {publishedAt}
                </Text>
              </InfoDiv>
            </VideoListElement>
          </LinkElement>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
