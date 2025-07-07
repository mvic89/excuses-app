import { useEffect, useState } from 'react'
import './App.css'
import type { ExcusesType } from './utils/types'
import ExcusesCard from './component/ExcusesCard'
import Blackboard from './component/Blackboard'
import Header from './component/Header/Index'
import Footer from './component/Footer'

function App() {
  const [excuses, setExcuses] = useState<ExcusesType[]>([])
  const [selectedExcuse, setSelectedExcuse] = useState<ExcusesType | null>(null)

  useEffect(() => {
    fetch('https://excuser-three.vercel.app/v1/excuse/3')
      .then((res) => res.json())
      .then((data: ExcusesType[]) => setExcuses(data))
      .catch((err) => console.error('Something went wrong when fetching excuses:', err))
  }, [])

  const handleCardClick = (excuse: ExcusesType) => {
    setSelectedExcuse(excuse)
  }

  return (
    <div className='main-container'>
      <Header/>
      <div className='card-container'>
        {excuses.map((excuse) => (
          <ExcusesCard key={excuse.id} excuse={excuse} onClick={handleCardClick} isActive={selectedExcuse?.id === excuse.id}/>
        ))}
      </div>

      <Blackboard excuse={selectedExcuse} />
      <Footer/>
    </div>
  )
}

export default App