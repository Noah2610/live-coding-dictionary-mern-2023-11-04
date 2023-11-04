import { Fragment } from "react";

export default function WordResult({ wordResult }) {
    const body = {
        word: wordResult.word,
    };

    const onAddFavorite = () => {
        fetch("http://localhost:8090/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    };

    return (
        <>
            <dl>
                <dt>Word</dt>
                <dd>{wordResult.word}</dd>

                {wordResult.meanings.map((meaning, i) => (
                    <Fragment key={i}>
                        <dt>{meaning.partOfSpeech}</dt>
                        <dd>
                            <ul>
                                {meaning.definitions.map(({ definition }, j) => (
                                    <li key={`${i}-${j}`}>
                                        {definition}
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    </Fragment>
                ))}
            </dl>

            <button type="button" onClick={onAddFavorite}>
                Add to Favorites
            </button>
        </>
    );
}
