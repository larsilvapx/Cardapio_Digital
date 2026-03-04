import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { CreateModal } from './components/create-modal/create-modal';
import { useFoodData } from './hooks/UseFoodData';

function App() {

  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className='container'>

      <header className="header">
    <h1> Cardápio Digital</h1>
    </header>

      {/* GRID DE CARDS */}
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            key={foodData.id}
            price={foodData.price}
            title={foodData.title}            
            image={foodData.image}
          />
        ))}
      </div>

      {/* BOTÃO SEPARADO */}
      <button className="new-button" onClick={handleOpenModal}>
        Novo Item
      </button>

      {/* MODAL FORA DO GRID */}
      {isModalOpen && (
        <CreateModal closeModal={handleCloseModal}/>
      )}

    </div>
  );
}

export default App;