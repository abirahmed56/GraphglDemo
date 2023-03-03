import "./App.css";

//components
import BookList from "./Components/BookList";
import AddAuthor from "./Components/AddAuthor";
import AddBook from "./Components/AddBook";
//Apollo client setup
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1>This is abir</h1>
        <BookList/>
        <AddBook />
        <AddAuthor/>
      </ApolloProvider>
    </div>
  );
}

export default App;
