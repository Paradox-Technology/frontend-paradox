import type { NextPage } from 'next'
import { useState } from 'react'
import { Header } from '../components/Header/Header'

const Home: NextPage = () => {
  const [theme, setTheme] = useState("light")

  function handleTheme() {
    return setTheme(theme === "light" ? "dark" : "light")
  }

  console.log(theme)
  
  return (
    <>
      <Header handleTheme={handleTheme} />
      <div className={theme}>
        <div className='background'>
        <h1 className='text'>Hello word!</h1>
        </div>

      </div>
    </>
  )
}

export default Home
