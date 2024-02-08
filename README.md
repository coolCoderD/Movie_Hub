# MovieHub App
# Live Link:- https://65c44420d7d2ae1b3bb8d6d9--bright-florentine-d50508.netlify.app/

MovieHub is a React application that allows users to search for and display information about movies. It uses the OMDB API to fetch movie data.

## Components

### App

The main component representing the entire MovieHub application.

#### State

- `movies`: An array of movie objects retrieved from the OMDB API.
- `search`: The current search query entered by the user.

#### Functions

- `getRandomSearchTerm()`: Generates a random search term from a predefined list of keywords.
- `searchMovies(title)`: Fetches movie data from the OMDB API based on the provided title.
- `handleKeyPress(e)`: Handles the 'Enter' key press event, triggering a search when pressed.
- `useEffect()`: Executes the initial search with a randomly selected keyword.

#### JSX Structure

The App component renders the following elements:

- Heading (`<h1>`) with the title "MovieHub".
- Search input (`<input>`) allowing users to enter search queries.
- Search icon (`<img>`) triggering a movie search when clicked.
- Container (`<div>`) displaying movie cards if there are search results.
- Empty message (`<div>`) displayed when no movies are found.

### MovieCard

A functional component responsible for rendering individual movie cards.

#### Props

- `m`: An individual movie object with properties such as `imdbID`, `Title`, `Year`, `Poster`, and `Type`.

#### JSX Structure

- Three divs containing movie details: year, poster image (with placeholder if not available), and type and title.

## Functionality

- Users can search for movies by entering a query and pressing 'Enter' or clicking the search icon.
- The application displays a set of movie cards with details for each movie retrieved from the OMDB API.
- Initial search is performed with a randomly selected keyword from a predefined list.

