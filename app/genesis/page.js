export default function Genesis() {
  return (
    <main style={{ maxWidth: "1000px", margin: "40px auto", padding: "20px" }}>
      <h1>🏆 Genesis League Dicky</h1>

      <p>
        Welcome to the Genesis League section. Here you can find the official
        guide and exclusive artwork.
      </p>

      <a
        href="/Genesis_League_Guide.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          margin: "20px 0",
          padding: "15px 25px",
          background: "#0077ff",
          color: "white",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        📄 Open Genesis League Guide
      </a>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: "30px"
      }}>
        <img
          src="/genesisleague.jpeg"
          alt="Genesis League"
          style={{ width: "100%", borderRadius: "20px" }}
        />

        <img
          src="/dickyloop.jpeg"
          alt="Dicky Loop"
          style={{ width: "100%", borderRadius: "20px" }}
        />
      </div>
    </main>
  );
}
