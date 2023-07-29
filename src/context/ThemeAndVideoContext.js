import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'HOME',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})
export default ThemeAndVideoContext
