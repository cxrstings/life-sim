function TitleScreen({ onNewGame }) {
    return (
        <div style={{ textAlign: 'center', marginTop: '10vh' }}>
            <h1>Life-Sim</h1>
            <button onClick={onNewGame} style={{ margin: '1rem', padding: '1rem, 2rem' }}>
                New Game
            </button>
            <button style={{ margin: '1rem', padding: '1rem, 2rem' }}>
                Load Game
            </button>
        </div>
    );
}

export default TitleScreen;