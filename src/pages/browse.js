import React from 'react';
import { useContent } from '../hooks';
import { selectionFilterByAttribute }  from '../utils';
import { BrowseContainer } from '../containers';

export default function Browse() {
  const { series } = useContent('series');
  const { movies } = useContent('movies');

  const filteredMovies = selectionFilterByAttribute(movies, 'genre');
  const filteredSeries = selectionFilterByAttribute(series, 'genre');

  console.log(selectionFilterByAttribute(series, 'genre'));
  return <BrowseContainer slides={{movies: filteredMovies, series: filteredSeries}}/>;
}
