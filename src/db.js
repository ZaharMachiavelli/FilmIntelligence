import gatsby from "@/assets/gatsby.jpg"
import borat from "@/assets/borat.jpg"

const data = [
    {name:"Великий Гэтсби", genre:"drama", relation: "emotions", single: true, year: "10", actors: ["Леонардо Ди Каприо", "Тоби Магуайр"], mark: 7.9, image: gatsby} ,
    {name:"Борат", genre:"comedy", relation: "chill", single: false, year: "00", actors: ["Саша Барон Коэн",], mark: 6.7, image: borat }
];


export const getFilms = () => {
	return new Promise(resolve => setTimeout(() => resolve({ data: data }), 200))
}

export const setFilm = ({name, genre, relation, single, year, actors }) => {
    data.push({ name: name, genre: genre, relation: relation, single: single, year: year, actors: actors})
}