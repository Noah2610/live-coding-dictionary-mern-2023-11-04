import { useEffect, useState } from "react";
import WordResult from "./components/WordResult";

function App() {
    const [word, setWord] = useState("");
    const [wordResults, setWordResults] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((res) => res.json())
            .then((json) => setWordResults(json));
    };

    return (
        <>
            <h1>Hello World</h1>

            <form onSubmit={onSubmit}>
                <input type="text" value={word} onChange={(event) => setWord(event.target.value)} />
                <button type="button" onClick={() => setWord("")}>Clear</button>
            </form>

            {wordResults !== null && (
                wordResults[0] ? <WordResult wordResult={wordResults[0]} /> : wordResults.message
            )}
        </>
    );
}

export default App;
