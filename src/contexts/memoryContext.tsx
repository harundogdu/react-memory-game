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
};

const initialState = {
  cards: CardArray as IMemoryCard[],
  setCards: () => {},
  startGame: () => {},
  turn: 0
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

  useEffect(() => {
    shuffleCards();
  }, []);

  const value = {
    cards,
    setCards,
    startGame,
    turn
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
