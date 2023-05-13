interface IGenres {
    id: number
    name: string
}
export interface IGenre {
    genres: [
        IGenres
    ]

}