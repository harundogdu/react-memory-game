import { Card } from '../../components';
import { useMemoryCards } from '../../contexts/memoryContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CardContainer = () => {
  const { cards, handleCardItemClick, disabledCards, checkWin, turn, startGame } =
    useMemoryCards();

  if (checkWin()) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      background: '#000',
      color: '#fff',
      title: "You've won!",
      text: `You took ${turn} turns to complete the game!`,
      icon: 'success',
      confirmButtonText: 'Play Again',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      preConfirm: () => {
        startGame();
      }
    });
  }

  return (
    <div className='card-container'>
      {cards.map((card, index) => (
        <Card
          card={card}
          key={card?.id || index}
          onClick={handleCardItemClick}
          disabled={disabledCards}
        />
      ))}
    </div>
  );
};

export default CardContainer;
