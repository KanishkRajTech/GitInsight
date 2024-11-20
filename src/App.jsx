
import { ThemeProvider } from './Contex/Theme'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Componets/Header'
import SearchBar from './Componets/SearchBar'
import Card from './Componets/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }



  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  const [username, setUsername] = useState("KanishkRajTech"); 


  const handleSearch = (username) => {
    setUsername(username);
  };
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className= '  '>
        <Header/>
        <SearchBar onSearch={handleSearch}/>
        <Card username={username}  />
      </div>
        
    </ThemeProvider>
  )
}

export default App
