import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  PageContainer,
  FormContainer,
  Logo,
  FormElement,
  InputFieldContainer,
  LabelElement,
  InputElement,
  PassWordInputElement,
  ShowPasswordLabel,
  LoginBtn,
  ErrorMssg,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showErrorMssg: false,
    errMssg: '',
  }

  onChangeUserName = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onTogglePassord = event => this.setState({showPassword: event.target.checked})

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      const token = data.jwt_token
      Cookies.set('jwt_token', token, {
        expires: 30,
        path: '/',
      })
      history.replace('/')
    } else {
      console.log(data)
      this.setState({showErrorMssg: true, errMssg: data.error_msg})
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const {
      showPassword,
      username,
      password,
      showErrorMssg,
      errMssg,
    } = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          console.log(theme)
          const imgUrl =
            theme === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <PageContainer theme={theme}>
              <FormContainer theme={theme}>
                <Logo src={imgUrl} alt="website logo" />
                <FormElement onSubmit={this.onSubmit}>
                  <InputFieldContainer>
                    <LabelElement htmlFor="userName" theme={theme}>
                      USERNAME
                    </LabelElement>
                    <InputElement
                      id="userName"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChangeUserName}
                    />
                  </InputFieldContainer>
                  <InputFieldContainer>
                    <LabelElement htmlFor="password" theme={theme}>
                      PASSWORD
                    </LabelElement>
                    <PassWordInputElement
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                    />
                    <div>
                      <input
                        type="checkbox"
                        id="showPassword"
                        onChange={this.onTogglePassord}
                      />
                      <ShowPasswordLabel htmlFor="showPassword" theme={theme}>
                        Show Password
                      </ShowPasswordLabel>
                    </div>
                  </InputFieldContainer>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {showErrorMssg && <ErrorMssg>{errMssg}</ErrorMssg>}
                </FormElement>
              </FormContainer>
            </PageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
