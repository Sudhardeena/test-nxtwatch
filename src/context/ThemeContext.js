import React from 'react'

const ThemeContext = React.createContext({
  theme: '',
  changeTheme: () => {},
  savedVideosList: [],
  saveVideo: () => {},
  removeVideo: () => {},
})

export default ThemeContext
