import { ChangeEvent, useState } from 'react';
import styles from '../Modal/Modal.module.scss';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';

interface FuzzySearchProps {
  options: string[];
  onChange: (value: string) => void;
}

const FuzzySearch = function ({ options, onChange }: FuzzySearchProps) {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);
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
  };
  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setQuery(value); // Обновить строку поиска до выбранного значения
    onChange(value); // Вызвать внешний onChange
    setResults([]); // Очистить результаты после выбора
  };

  return (
    <div style={{ position: 'relative' }}>
      <Combobox value={selectedOption} onChange={handleSelect}>
        <ComboboxInput
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className={styles.input}
        />
        <ComboboxOptions className={styles.dropdown}>
          {results.map((result) => (
            <ComboboxOption
              key={result}
              value={result}
              className={`${styles.option} ${
                selectedOption === result ? styles.optionSelected : ''
              }`}
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
