import type { NextPage } from 'next'
import { useState } from 'react'
import { Header } from '../components/Header/Header'

const Home: NextPage = () => {
  const [theme, setTheme] = useState("light")

  function handleTheme() {
    return setTheme(theme === "light" ? "dark" : "light")
  }
  
  return (
    <>
      <Header handleTheme={handleTheme} theme={theme} />
      <div className={theme}>
        <div className='background'>
        <h1 className='text'>Vai toma sua gostosa vai toma! lançou a da braba em</h1>
        </div>

      </div>
    </>
  )
}

export default Home
