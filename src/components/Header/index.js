import './index.css'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {
  HeaderElememt,
  Logo,
  LapHeaderTabs,
  ThemButton,
  ProfileImg,
  LogoutButton,
  LogoutModal,
  LogoutContent,
  ConfirmBtn,
  CancelBtn,
  Text,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme, changeTheme} = value
        const imgUrl =
          theme === 'light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        return (
          <HeaderElememt theme={theme}>
            <Link to="/">
              <Logo src={imgUrl} alt="website logo" />
            </Link>
            <LapHeaderTabs>
              <ThemButton
                type="button"
                data-testid="theme"
                onClick={changeTheme}
              >
                {theme === 'light' ? (
                  <FaMoon className="styled-icon" />
                ) : (
                  <IoSunnyOutline className="styled-icon sun-icon" />
                )}
              </ThemButton>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                trigger={
                  <LogoutButton theme={theme} type="button">
                    Logout
                  </LogoutButton>
                }
                modal
              >
                {close => (
                  <LogoutModal className="modal">
                    <LogoutContent theme={theme}>
                      <Text theme={theme}>
                        Are you sure, you want to logout
                      </Text>
                      <CancelBtn type="button" onClick={close} theme={theme}>
                        Cancel
                      </CancelBtn>
                      <ConfirmBtn
                        type="button"
                        onClick={onLogout}
                        theme={theme}
                      >
                        Confirm
                      </ConfirmBtn>
                    </LogoutContent>
                  </LogoutModal>
                )}
              </Popup>
            </LapHeaderTabs>
          </HeaderElememt>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
