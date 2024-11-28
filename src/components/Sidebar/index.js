import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  SidebarElement,
  Tablist,
  CommunicationDetails,
  SocialMediaLogos,
  SocialMediaLogo,
  ContactText,
  EnjoyText,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import TabListItem from '../TabListItem'

const tabList = [
  {id: 'HOME', icon: <AiFillHome />, route: '/', tabName: 'Home'},
  {id: 'TRENDING', icon: <FaFire />, route: '/trending', tabName: 'Trending'},
  {
    id: 'GAMING',
    icon: <SiYoutubegaming />,
    route: '/gaming',
    tabName: 'Gaming',
  },
  {
    id: 'SAVED_VIDEOS',
    icon: <MdPlaylistAdd />,
    route: '/saved-videos',
    tabName: 'Saved videos',
  },
]

const Sidebar = props => {
  const {activeTab} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <SidebarElement theme={theme}>
            <Tablist>
              {tabList.map(each => (
                <TabListItem
                  key={each.id}
                  theme={theme}
                  tabItemDetails={each}
                  activeTab={activeTab}
                />
              ))}
            </Tablist>
            <CommunicationDetails>
              <ContactText theme={theme}>CONTACT US</ContactText>
              <SocialMediaLogos>
                <SocialMediaLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMediaLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaLogos>
              <EnjoyText theme={theme}>
                Enjoy! Now to see your channels and recommendations!
              </EnjoyText>
            </CommunicationDetails>
          </SidebarElement>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Sidebar
