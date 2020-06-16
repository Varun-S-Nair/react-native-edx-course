import React from "react";
import { Text, SectionList } from "react-native";
import Row from './Row.js';

const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

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
        <SectionList 
            sections={sections} 
            renderItem={({item}) => <Row {...item} onSelectMovie={props.onSelectMovie} />}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={item => item.Title}
            style={{padding: 10}}
        />
    );
}

export default SectionListMovies;