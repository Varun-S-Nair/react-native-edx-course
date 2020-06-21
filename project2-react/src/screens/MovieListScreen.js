import React from "react";
import SectionListMovies from "./../sectionListMovies.js";
import { searchMovies } from "./../api.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router } from "react-router-dom";

// let movieList = [{"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","imdbID":"tt0076759","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"Star Wars: Episode V - The Empire Strikes Back","Year":"1980","imdbID":"tt0080684","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"Star Wars: Episode VI - Return of the Jedi","Year":"1983","imdbID":"tt0086190","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Star Wars: The Force Awakens","Year":"2015","imdbID":"tt2488496","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"},{"Title":"Star Wars: Episode I - The Phantom Menace","Year":"1999","imdbID":"tt0120915","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Star Wars: Episode III - Revenge of the Sith","Year":"2005","imdbID":"tt0121766","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"},{"Title":"Star Trek","Year":"2009","imdbID":"tt0796366","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"},{"Title":"Star Wars: Episode II - Attack of the Clones","Year":"2002","imdbID":"tt0121765","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BOWNkZmVjODAtNTFlYy00NTQwLWJhY2UtMmFmZTkyOWJmZjZiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"},{"Title":"Star Trek: Into Darkness","Year":"2013","imdbID":"tt1408101","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg"},{"Title":"Rogue One: A Star Wars Story","Year":"2016","imdbID":"tt3748528","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"}];

export default class MovieListScreen extends React.Component {
  state = {
    search: "",
    movieList: [],
  };

  handleChangeSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSearch = async () => {
    const movieList = await searchMovies(this.state.search);
    this.setState({ movieList });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleSearch();
  };

  handleSelectMovie = (movie) => {
    this.props.history.push({
      pathname: "./MovieDetailsScreen.js",
      state: { movie },
    });
    // this.props.navigation.navigate("Details", movie);
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          style={{
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            maxWidth: "330px",
            padding: "15px",
            margin: "auto",
          }}
        >
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleChangeSearch}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Search
          </Button>
        </Form>

        <div>
          <SectionListMovies
            onSelectMovie={this.handleSelectMovie}
            movieList={this.state.movieList}
          />
        </div>
      </div>
    );
  }
}
