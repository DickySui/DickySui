export default function Memes() {
  const memes = [
    "/memes/meme1.jpeg",
    "/memes/meme2.jpeg",
  ];

  const shareMeme = async (meme) => {
    const url = window.location.origin + meme;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "DickySui Meme",
          text: "Check out this DickySui meme!",
          url,
        });
      } catch (e) {}
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <main>
      <h1>😂 DickySui Memes</h1>

      <p>
        Welcome to the official DickySui meme collection.
      </p>

      <div className="memes-grid">
        {memes.map((meme, index) => (
          <div className="meme-card" key={index}>
            <a href={meme} target="_blank" rel="noopener noreferrer">
              <img src={meme} alt={`Meme ${index + 1}`} />
            </a>

            <button onClick={() => shareMeme(meme)}>
              🔁 Share
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
