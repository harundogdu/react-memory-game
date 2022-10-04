import { createContext, useState, useContext, useEffect } from 'react';
import { IMemoryCard } from '../types/memoryCard';
import { CardArray } from '../utils/fake_db';

type MemoryProviderType = {
  children: React.ReactNode;
};

type MemoryContextType = {
  cards: IMemoryCard[];
  setCards: React.Dispatch<React.SetStateAction<IMemoryCard[]>>;
  startGame: () => void;
  turn: number;
  handleCardItemClick: (card: IMemoryCard) => void;
};

const initialState = {
  cards: CardArray as IMemoryCard[],
  setCards: () => {},
  startGame: () => {},
  turn: 0,
  handleCardItemClick: () => {}
};

const MemoryContext = createContext<MemoryContextType>(initialState);

const MemoryProvider = ({ children }: MemoryProviderType) => {
  const [cards, setCards] = useState<IMemoryCard[]>(initialState.cards);
  const [turn, setTurn] = useState<number>(initialState.turn);

  const shuffleCards = () => {
    const shuffledCards = [...CardArray, ...CardArray]
      .sort(() => Math.random() - 0.5)
      .map(card => {
        return { ...card, id: Math.random() };
      });

    setCards(shuffledCards);
  };

  const startGame = () => {
    shuffleCards();
  };

  const handleCardItemClick = (card: IMemoryCard) => {
    setCards(prevCard =>
      prevCard.map(c => {
        if (c.id === card.id) {
          card.isFlipped = true;
          return card;
        }
        return c;
      })
    );
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const value = {
    cards,
    setCards,
    startGame,
    turn,
    handleCardItemClick
  };

  return (
    <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>
  );
};

const useMemoryCards = () => {
  const context = useContext(MemoryContext);
  if (context === undefined) {
    throw new Error('useMemoryCards must be used within a MemoryProvider');
  }
  return context;
};

export { MemoryContext, MemoryProvider, useMemoryCards };
