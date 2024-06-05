import { ChangeEvent, useState } from 'react';
import styles from '../Modal/Modal.module.scss';

//Определение типов для пропсов компонента
interface FuzzySearchProps {
  options: string[];
  onChange: (value: string) => void;
}

const FuzzySearch = function ({ options, onChange }: FuzzySearchProps) {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex] = useState<number | null>(null);

  // Функция для выполнения нечеткого поиска
  const fuzzySearch = (query: string, options: string[]): string[] => {
    const lowerCaseQuery = query.toLowerCase();
    return options.filter((option) => option.toLowerCase().includes(lowerCaseQuery));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    const searchResults = fuzzySearch(value, options);
    setResults(searchResults);
    setIsOpen(true);
  };

  const handleSelect = (value: string) => {
    setQuery(value);
    setIsOpen(false);
    onChange(value);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }} onBlur={handleBlur}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && (
        <ul role="listbox" className={styles.ul}>
          {results.map((result, index) => (
            <li
              key={index}
              role="option"
              onMouseDown={() => handleSelect(result)}
              className={styles.li}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FuzzySearch;
