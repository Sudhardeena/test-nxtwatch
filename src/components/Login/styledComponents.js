import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 1000px;
  height: 100vh;
  margin: auto;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  width: 50%;
  padding: 50px;
  border-radius: 10px;
  ${props => props.theme === 'light' && 'box-shadow: 0 0 20px #e2e8f0;'}
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#000000'};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: roboto;
`
export const Logo = styled.img`
  width: 200px;
  margin: 10px;
`
export const FormElement = styled.form`
  width: 100%;
`

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
`
export const LabelElement = styled.label`
  color: ${props => (props.theme === 'light' ? '#616e7c' : '#ffffff')};
  margin-bottom: 5px;
  font-family: roboto;
`

export const ShowPasswordLabel = styled(LabelElement)`
  color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
  margin-left: 10px;
  font-size: 20px;
`

export const InputElement = styled.input`
  padding: 15px;
  color: grey;
  font-family: roboto;
  outline: none;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 5px;
  border-radius: 5px;
  width: 100%;
  font-size: 20px;
  border-color: #cbd5e1;
`
export const PassWordInputElement = styled(InputElement)`
  background-color: transparent;
  margin-bottom: 20px;
`

export const LoginBtn = styled.button`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 13px;
  color: #ffffff;
  font-family: roboto;
  background-color: #3b82f6;
  font-size: 20px;
  margin-top: 10px;
`
export const ErrorMssg = styled.p`
  font-size: 15px;
  color: #ff0b37;
  font-family: roboto;
`
