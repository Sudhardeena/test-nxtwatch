import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TabItem = styled.li`
  width: 100%;
  list-style: none;
  background-color: ${props => {
    if (props.theme === 'light') {
      return props.active === true ? '#cbd5e1' : 'transparent'
    }
    return props.active === true ? '#383838' : 'transparent'
  }};
`
export const TabLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  padding: 10px 20px;
`

export const TabIcon = styled.div`
  color: ${props => (props.active === true ? '#ff0000' : '#383838')};
  margin-right: 20px;
`
export const TabText = styled.p`
  color: ${props => {
    if (props.theme === 'light') {
      return props.active === true ? '#000000' : '#383838'
    }
    return props.active === true ? '#ffffff' : '#cccccc'
  }};
  font-size: 20px;
  margin: 0;
  font-family: roboto;
`
