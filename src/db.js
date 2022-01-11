import gatsby from "@/assets/gatsby.jpg"

const data = [
    {name:"Великий Гэтсби", genre:"drama", relation: "emotions", single: true, year: "10", actors: ["Леонардо Ди Каприо", "Тоби Магуайр"], mark: 7.9, image: gatsby }
];


export const getFilms = () => {
	return new Promise(resolve => setTimeout(() => resolve({ data: data }), 200))
}

export const setFilm = ({name, genre, relation, single, year, actors }) => {
    data.push({ name: name, genre: genre, relation: relation, single: single, year: year, actors: actors})
}