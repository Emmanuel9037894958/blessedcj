import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

function SearchNav() {
  const [searchText, setSearchText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // window.location.reload();

    if (searchText.trim() === '') {
      
      setErrorMessage('⚠️ Please enter something before searching.');

   
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }

    setSearchText('');

    setTimeout(() => {
      setErrorMessage('⚠️ Error occurred while loading your search.');

      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }, 500);
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex items-center rounded-full bg-gray-100 fixed z-50 px-2"
      >
        <button type="submit">
          <SearchIcon className="size-6 text-gray-600" />
        </button>
        <input
          type="text"
          placeholder="Search products..."
          className="pl-2 w-48 h-10 bg-transparent focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>

      
      {errorMessage && (
        <div className="mt-16 ml-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded max-w-xs shadow transition-opacity duration-300">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default SearchNav;
