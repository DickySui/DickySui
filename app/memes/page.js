"use client";

const memes = [
  {
    id: 1,
    image: "/memes/meme1.jpeg",
  },
  {
    id: 2,
    image: "/memes/meme2.jpeg",
  },
];

export default function Memes() {
  return (
    <main className="memes-page">
      {/* Contenedor alineado: Botón a la izquierda, Logo a la derecha */}
      <div className="header-navigation">
        <a href="/" className="back-button">⬅ Back to Home</a>
        <img src="/PHOTO-Dicky.png" alt="Logo" className="corner-logo" />
      </div>

      <h1>😂 DickySui Meme Gallery</h1>

      <p className="subtitle">
        The funniest memes on the Sui blockchain.
      </p>

      <div className="memes-grid">
        {memes.map((meme) => (
          <div className="meme-card" key={meme.id}>
            <a
              href={meme.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={meme.image}
                alt="Dicky Meme"
              />
            </a>

            <div className="meme-actions">
              <div className="stats">
                <span>❤️ Coming Soon</span>
                <span>👁️ Coming Soon</span>
              </div>

              <div className="share-buttons">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      window.location.origin + meme.image
                    );
                    alert("Meme link copied!");
                  }}
                >
                  📋 Copy Link
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
