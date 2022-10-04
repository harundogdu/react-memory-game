import { createContext, useState, useContext } from 'react';
import { IMemoryCard } from '../types/memoryCard';

type MemoryProviderType = {
  children: React.ReactNode;
};

type MemoryContextType = {
  cards: IMemoryCard[];
  setCards: React.Dispatch<React.SetStateAction<IMemoryCard[]>>;
};

const initialState = {
    cards: [
        {image : '/img/helmet.png', isFlipped: false, isMatched: false, name : 'Helmet'},
        {image : '/img/potion.png', isFlipped: false, isMatched: false, name : 'Potion'},
        {image : '/img/scroll.png', isFlipped: false, isMatched: false, name : 'Scroll'},
        {image : '/img/sword.png', isFlipped: false, isMatched: false, name : 'Sword'},
        {image : '/img/ring.png', isFlipped: false, isMatched: false, name : 'Ring'},
        {image : '/img/shield.png', isFlipped: false, isMatched: false, name : 'Shield'}
    ] as IMemoryCard[],
    setCards: () => {}
}

const MemoryContext = createContext<MemoryContextType>(initialState);

const MemoryProvider = ({ children }: MemoryProviderType) => {
  const [cards, setCards] = useState<IMemoryCard[]>(initialState.cards);

  const value = {
    cards,
    setCards
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
}

export { MemoryContext, MemoryProvider, useMemoryCards };
