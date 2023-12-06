import { Search } from '../components/Search/Search';
import { useState } from 'react';
import { SearchMovieList } from '../components/SearchMovieList/SearchMovieList';

export default function Movies() {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value);
  }

  return <>
    <Search submit={handleSubmit} />
    <SearchMovieList query={query} />
  </>
}
