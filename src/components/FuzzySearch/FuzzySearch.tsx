import { ChangeEvent, useState } from 'react';
import styles from '../Modal/Modal.module.scss';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';

//Определение типов для пропсов компонента
interface FuzzySearchProps {
  options: string[];
  onChange: (value: string) => void;
}

const FuzzySearch = function ({ options, onChange }: FuzzySearchProps) {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
      <Combobox value={selectedOption} onChange={setSelectedOption}>
        <ComboboxInput
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          onFocus={() => setIsOpen(true)}
        />
        <ComboboxOptions className={styles.ul}>
          {results.map((result) => (
            <ComboboxOption
              key={result}
              onMouseDown={() => handleSelect(result)}
              className={styles.li}
              value={result}
            >
              {result}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default FuzzySearch;
