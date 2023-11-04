export default function WordResult({ wordResult }) {
    return (
        <>
            <dl>
                <dt>Word</dt>
                <dd>{wordResult.word}</dd>

                {wordResult.meanings.map((meaning) => (
                    <>
                        <dt>{meaning.partOfSpeech}</dt>
                        <dd>{meaning.definitions[0].definition}</dd>
                    </>
                ))}
            </dl>
        </>
    );
}
