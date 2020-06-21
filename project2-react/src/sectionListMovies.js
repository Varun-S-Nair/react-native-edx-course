import React from "react";
import Row from './Row.js';
import ReactSectionList from 'react-sectionlist';

const renderSectionHeader = item => <div>{item.title}</div>

const SectionListMovies = props => {
    const movies = props.movieList.reduce((obj, movie) => {
        const firstLetter = movie.Title[0].toUpperCase();
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), movie],
        };
    }, {});
    
    const sections = Object.keys(movies)
    .sort()
    .map(letter => ({
      data: movies[letter],
      title: letter,
    }));

    return (
        <ReactSectionList 
            sections={sections} 
            renderItem={(item) => <Row {...item} onSelectMovie={props.onSelectMovie} />}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={item => item.Title}
            style={{padding: 10}}
        />
    );
}

export default SectionListMovies;