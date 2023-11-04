import { Fragment } from "react";

export default function WordResult({ wordResult }) {
    return (
        <>
            <dl>
                <dt>Word</dt>
                <dd>{wordResult.word}</dd>

                {wordResult.meanings.map((meaning, i) => (
                    <Fragment key={i}>
                        <dt>{meaning.partOfSpeech}</dt>
                        <dd>{meaning.definitions[0].definition}</dd>
                    </Fragment>
                ))}
            </dl>
        </>
    );
}
