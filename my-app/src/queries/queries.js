import { gql } from "@apollo/client";

const getAuthorQuery = gql`
  query getAuthor {
    authors {
      name
      id
    }
  }
`

const getBookQuery = gql`
query getBook {
    books{
        name
        id
    }
}
`
const addBookMutation = gql`
  mutation createBook($name: String!, $genre: String!, $authorid: String!) {
    addBook(name: $name, genre: $genre, authorid: "agd23") {
      name,
      genre,
      authorid
    }
  }
`

const addAuthorMutation = gql`
  mutation createAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name,
      age
    }
  }
`

// mutation{
//   addBook(name:"The pleasure",genre:"Sci-Fi",authorid:"1"){
//     name
//     id
//   }
// }
export {getAuthorQuery, getBookQuery, addBookMutation, addAuthorMutation};