import styled from 'styled-components'

export const HeaderElememt = styled.div`
  width: 100%;
  padding: 15px 30px;
  height: 10%;
  max-height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#212121'};
`

export const Logo = styled.img`
  width: 150px;
`

export const LapHeaderTabs = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemImg = styled.img`
  width: 50px;
`
export const ThemButton = styled.button`
  background-color: transparent;
  border: none;
`

export const ProfileImg = styled.img`
  width: 30px;
  margin: 0 20px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border-style: solid;
  padding: 5px 10px;
  border-width: 1px;
  color: ${props => (props.theme === 'light' ? '#3b82f6' : '#ffffff')};
  border-color: ${props => (props.theme === 'light' ? '#3b82f6' : '#ffffff')};
  font-size: 20px;
`
export const LogoutModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: roboto;
`
export const LogoutContent = styled.div`
  min-width: 300px;
  padding: 30px;
  background-color: #ffffff;
  text-align: center;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#212121'};
`

export const Text = styled.p`
  color: ${props => (props.theme === 'light' ? '#1e293b' : '#f8fafc')};
  font-size: 20px;
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  padding: 5px 10px;
  color: #ffffff;
  font-size: 20px;
`
export const CancelBtn = styled.button`
  background-color: transparent;
  border-style: solid;
  padding: 5px 10px;
  border-width: 1px;
  color: #94a3b8;
  border-color: #94a3b8;
  font-size: 20px;
  margin-right: 20px;
`
