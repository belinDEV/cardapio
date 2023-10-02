import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setModalOpen] = useState(false)
  const handleOpenModal = () => {
     setModalOpen(prev => !prev)
     

  }
 
  return (

    <div className="container" >

      <h1> Cardapio </h1>
      <div className="card-grid">
        {data?.map(foodData =>
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Abrir novo</button>
    </div>

  )
}

export default App
