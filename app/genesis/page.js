export default function Genesis() {
  return (
    <main>
      {/* Contenedor alineado: Botón a la izquierda, Logo a la derecha */}
      <div className="header-navigation">
        <a href="/" className="back-button">⬅ Back to Home</a>
        <img src="/PHOTO-Dicky.png" alt="Logo" className="corner-logo" />
      </div>

      <section>
        <h1>🏆 Genesis League Dicky</h1>

        <p>
          Welcome to the Genesis League section. Here you can find the official
          guide and exclusive artwork.
        </p>

        <a
          href="/Genesis_League_Guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="back-button"
          style={{ display: "inline-block", marginTop: "10px" }}
        >
          📄 Open Genesis League Guide
        </a>

        <div className="cards" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "30px" }}>
          <img
            src="/genesisleague.jpeg"
            alt="Genesis League"
            style={{ width: "100%", borderRadius: "20px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          />

          <img
            src="/dickyloop.jpeg"
            alt="Dicky Loop"
            style={{ width: "100%", borderRadius: "20px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          />
        </div>
      </section>
    </main>
  );
}
