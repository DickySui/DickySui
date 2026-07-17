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

    <span>❤️ 0</span>

    <span>👁️ 0</span>

  </div>

  <div className="share-buttons">

    <a
      href={`https://twitter.com/intent/tweet?text=Check out this DickySui meme!&url=${window.location.origin}${meme.image}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      𝕏
    </a>

    <a
      href={`https://t.me/share/url?url=${window.location.origin}${meme.image}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Telegram
    </a>

    <a
      href={`https://wa.me/?text=${window.location.origin}${meme.image}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>

    <button
      onClick={() => {
        navigator.clipboard.writeText(window.location.origin + meme.image);
        alert("Link copied!");
      }}
    >
      Copy
    </button>

  </div>

</div>

          </div>

        ))}

      </div>

    </main>
  );
}
