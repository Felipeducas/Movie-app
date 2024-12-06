import React, { useState } from "react";
import Footer from './components/Footer'; 
import "./App.css";
import MovieList from "./components/MovieList";


const App: React.FC = () => {
  const [movies] = useState([
    {id:1, title: "La Sociedad de la Nieve", Duracion: 2.25, genero: "Drama, Historia", image: "LSDLN.jpg", },
    {id:2, title: "Minions", Duracion: 1.31, genero: " Animación, aventura, comedia", image: "minions.jpg"},
    {id:3, title: "La Casa de Papel", Duracion: 45,genero: "Acción, Drama", image: "3572084.webp"},
    {id:4, title: "How to Get Away with Murder", Duracion: 3.870, genero: "Drama legal, Susp Crimen", image: "HTGAWM.jpg"},
    {id:5, title: "Réplicas", Duracion: 2820, genero: "Ciencia ficción, drama, suspenso", image: "Réplicas.jpg"},
    {id:6, title: "You", Duracion: 2000, genero: "Drama", image: "You.jpg"},
    {id:7, title: "Sense 8", Duracion: 2208, genero: "Ciencia ficción, fantasía, drama", image: "sense8.jpg"},
    {id:8, title: "Gambito de Dama", Duracion: 3630, genero: "Drama, psicológico", image: "gambitodedama.jpg"},
    {id:9, title: "La Tumba de las Luciérnagas", Duracion: 89, genero: "Animación, drama, bélica", image: "LTDLL.jpg"},


  ]);

  return (
    <>
    <div className="app-container">
      <h1>My Favorite Movies</h1>
      <MovieList movies={movies} />
    </div>
    <Footer />
    </>
      );
}

export default App;