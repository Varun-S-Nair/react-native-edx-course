export const searchMovies = async (props) => {
    const searchKey = await props.replace(" ", "+");
    const reponse = await fetch(`http://omdbapi.com/?apikey=d2790c60&s=${searchKey}`)
    const {Search} = await reponse.json();
    return Search;
}