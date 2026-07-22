"use client";

const memes = [
  // Memes con extensión .jpeg
  { id: 1, image: "/memes/meme01.jpeg" },
  { id: 2, image: "/memes/meme02.jpeg" },

  // Memes con extensión .jpg
  { id: 3, image: "/memes/meme03.jpg" },
  { id: 4, image: "/memes/meme04.jpg" },
  { id: 5, image: "/memes/meme05.jpg" },
  { id: 6, image: "/memes/meme06.jpg" },
  { id: 7, image: "/memes/meme07.jpg" },
  { id: 8, image: "/memes/meme08.jpg" },
  { id: 9, image: "/memes/meme09.jpg" },
  { id: 10, image: "/memes/meme10.jpg" },
  { id: 11, image: "/memes/meme11.jpg" },
  { id: 12, image: "/memes/meme12.jpg" },
  { id: 13, image: "/memes/meme13.jpg" },
  { id: 14, image: "/memes/meme14.jpg" },
  { id: 15, image: "/memes/meme15.jpg" },
  { id: 16, image: "/memes/meme16.jpg" },
  { id: 17, image: "/memes/meme17.jpg" },
  { id: 18, image: "/memes/meme18.jpg" },
  { id: 19, image: "/memes/meme19.jpg" },
  { id: 20, image: "/memes/meme20.jpg" },
  { id: 21, image: "/memes/meme21.jpg" },
  { id: 22, image: "/memes/meme22.jpg" },
  { id: 23, image: "/memes/meme23.jpg" },
  { id: 24, image: "/memes/meme24.jpg" },
  { id: 25, image: "/memes/meme25.jpg" },
  { id: 26, image: "/memes/meme26.jpg" },
  { id: 27, image: "/memes/meme27.jpg" },
  { id: 28, image: "/memes/meme28.jpg" },
  { id: 29, image: "/memes/meme29.jpg" },
  { id: 30, image: "/memes/meme30.jpg" },
  { id: 31, image: "/memes/meme31.jpg" },
  { id: 32, image: "/memes/meme32.jpg" },
  { id: 33, image: "/memes/meme33.jpg" },
  { id: 34, image: "/memes/meme34.jpg" },
  { id: 35, image: "/memes/meme35.jpg" },
  { id: 36, image: "/memes/meme36.jpg" },
  { id: 37, image: "/memes/meme37.jpg" },
  { id: 38, image: "/memes/meme38.jpg" },
  { id: 39, image: "/memes/meme39.jpg" },
  { id: 40, image: "/memes/meme40.jpg" },
  { id: 41, image: "/memes/meme41.jpg" },
  { id: 42, image: "/memes/meme42.jpg" },
  { id: 43, image: "/memes/meme43.jpg" },
  { id: 44, image: "/memes/meme44.jpg" },
  { id: 45, image: "/memes/meme45.jpg" },
  { id: 46, image: "/memes/meme46.jpg" },
  { id: 47, image: "/memes/meme47.jpg" },
  { id: 48, image: "/memes/meme48.jpg" },
  { id: 49, image: "/memes/meme49.jpg" },
  { id: 50, image: "/memes/meme50.jpg" },
  { id: 51, image: "/memes/meme51.jpg" },
  { id: 52, image: "/memes/meme52.jpg" },
  { id: 53, image: "/memes/meme53.jpg" },
  { id: 54, image: "/memes/meme54.jpg" },
  { id: 55, image: "/memes/meme55.jpg" },
  { id: 56, image: "/memes/meme56.jpg" },
  { id: 57, image: "/memes/meme57.jpg" },
  { id: 58, image: "/memes/meme58.jpg" },
  { id: 59, image: "/memes/meme59.jpg" },
  { id: 60, image: "/memes/meme60.jpg" },
  { id: 61, image: "/memes/meme61.jpg" },
  { id: 62, image: "/memes/meme62.jpg" },
  { id: 63, image: "/memes/meme63.jpg" },
  { id: 64, image: "/memes/meme64.jpg" },
  { id: 65, image: "/memes/meme65.jpg" },
  { id: 66, image: "/memes/meme66.jpg" },
  { id: 67, image: "/memes/meme67.jpg" },
  { id: 68, image: "/memes/meme68.jpg" },
  { id: 69, image: "/memes/meme69.jpg" },
  { id: 70, image: "/memes/meme70.jpg" },
  { id: 71, image: "/memes/meme71.jpg" },
  { id: 72, image: "/memes/meme72.jpg" },
  { id: 73, image: "/memes/meme73.jpg" },
  { id: 74, image: "/memes/meme74.jpg" },
  { id: 75, image: "/memes/meme75.jpg" },
  { id: 76, image: "/memes/meme76.jpg" },
{ id: 76, image: "/memes/696B2B11-B9E1-4412-A029-6C045E88F37A.png" },
];

export default function Memes() {
  return (
    <main className="memes-page">
      {/* Contenedor alineado: Botón a la izquierda, Logo a la derecha */}
      <div className="header-navigation">
        <a href="/" className="back-button">⬅ Back to Home</a>
        <img src="/PHOTO-Dicky.png" alt="Logo" className="corner-logo" />
      </div>

      <h1>😂 Dicky_Sui Meme Gallery</h1>

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
