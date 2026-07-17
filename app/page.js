export default function Home() {
  return (
    <main>
      <header>
        {/* Contenedor flexible para alinear logo y título en horizontal */}
        <div className="header-content">
          <img
            src="/PHOTO-Dicky.png"
            alt="DickySui Logo"
            className="logo-3d"
          />
          <h1 className="logo-title">$DICKY</h1>
        </div>

        <p className="subtitle">
          The funniest memecoin on the Sui blockchain 🚀
        </p>

        <div className="buttons">
          <a
            href="https://app.cetus.zone/swap/0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC/f862476e7d8469f637c38e5db5fa207044ab436d22b186a81493fd2992d4cbc9::dicky::DICKY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/cetus.png" alt="Cetus" />
            Buy Now
          </a>

          <a
            href="https://x.com/dicky_sui?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/x.png" alt="X" />
            Follow on X
          </a>

          <a
            href="https://discord.gg/Ubc2WAnTM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/discord.png" alt="Discord" />
            Join Discord
          </a>
              <a
  href="https://www.tiktok.com/@dicky_sui?"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/tiktok.jpg" alt="TikTok" />
  Follow on TikTok
</a>
        </div>
      </header>

      <section>
        <h2>About DickySui</h2>
        <p>
          Dicky is born on the Sui blockchain with a clear mission: to bring humor
          and mischief back to the ecosystem. We are not a scalability solution or
          a revolutionary DeFi platform; we are a blue character with glasses,
          wings, and an aerodynamic structure designed for only one thing:
          <strong> To always go up.</strong>
        </p>
        <p>
          We do not have the official seal of Sui (yet), but we were born with the
          firm intention of earning it, meme by meme. We are not the mascot that
          Sui chose, but we are the mascot that Sui deserves.
        </p>
      </section>

      <section>
        <h2>💰 Tokenomics</h2>
        <p>✅<strong>Total Supply:</strong> 1,000,000,000 $DICKY</p>
        <p>✅<strong>Token Distribution:</strong> 85% Initial Liquidity & 15% Creator reserve (marketing and project development). </p>
        <p>✅<strong>LP Burn (Liquidity Burn):</strong> No one can withdraw the floor of the project. 🚀</p>
        <p>✅<strong>Contract Renunciation:</strong> Once launched, we cannot issue more tokens or modify the rules. 🔒</p>
      </section>

      <section>
        <h2>🚀 Explore DickySui</h2>
        <div className="cards">
          <a
            href="/Dickycoin_Litepaper_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h3>📄 Litepaper</h3>
            <p>Read the official DickySui Litepaper.</p>
          </a>

          <a href="/memes" className="card">
            <h3>😂 Memes</h3>
            <p>Discover every meme created by the community.</p>
          </a>

          <a href="/genesis" className="card">
            <h3>🏆 Genesis League Dicky</h3>
            <p>Explore the official Genesis League guide and artwork.</p>
          </a>
        </div>
      </section>
    </main>
  );
}
