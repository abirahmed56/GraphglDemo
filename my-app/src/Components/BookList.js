import { useQuery} from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookList(){
    const { loading, error, data } = useQuery(getBookQuery);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    return(
        <>
            <h3>List Of Books:</h3>
            {data.books.map((book) => (

                <li key={book.id}>{book.name}</li>
            ))}

            <br/>
            <br/>
        </>

    );
    
}

export default  BookList;