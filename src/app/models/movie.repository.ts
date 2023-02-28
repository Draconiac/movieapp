import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor(){
        this.movies = [
            {id: 1, title: "film 1", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aperiam alias odio inventore ullam nobis tenetur illo, adipisci maxime blanditiis magnam corrupti eos sint, asperiores natus quod voluptatibus saepe non!", imageUrl: "1.jpg", isPopular: false, datePublished: new Date(1990,10,10)},
            {id: 2, title: "film 2", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aperiam alias odio inventore ullam nobis tenetur illo, adipisci maxime blanditiis magnam corrupti eos sint, asperiores natus quod voluptatibus saepe non!", imageUrl: "2.jpg", isPopular: true, datePublished: new Date(1990,10,10)},
            {id: 3, title: "film 3", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aperiam alias odio inventore ullam nobis tenetur illo, adipisci maxime blanditiis magnam corrupti eos sint, asperiores natus quod voluptatibus saepe non!", imageUrl: "3.jpg", isPopular: true, datePublished: new Date(1990,10,10)},
            {id: 4, title: "film 4", description: "Film açıklama 4 ", imageUrl: "4.jpg", isPopular: false, datePublished: new Date(1990,10,10)}
        ]
    }

    getMovies(): Movie[]{
        return this.movies;
    }

    getPopularMovies(){
        return this.movies.filter(movie => movie.isPopular);
    }

    getMovieById(id: number): Movie | undefined{
        return this.movies.find(i => i.id == id) 
    }
}