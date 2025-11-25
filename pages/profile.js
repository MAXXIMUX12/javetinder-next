import Head from "next/head";
import "../styles/profile.css";

export default function Pag4() {
  return (
    <>
      <Head>
        <title>JaveTinder - Perfil</title>
      </Head>

      <div className="container">
        <header className="header">
          <h1 className="title">JaveTinder</h1>

          <div className="header-icons">
            <img src="/imgs/notificaciones.png" alt="notificaciones" className="icon" />
            <img src="/imgs/ajustes.png" alt="ajustes" className="icon" />
          </div>
        </header>

        <main className="profile-card">
          <div className="profile-info">
            <h2>Nombre</h2>
            <p className="subtitle">Información</p>
          </div>

          <div className="profile-image"></div>

          <div className="description">
            <p>...</p>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-icons">
            <img src="/imgs/javetinder.png" className="icon" />
            <img src="/imgs/calendario.png" className="icon" />
            <img src="/imgs/chat.png" className="icon" />
            <img src="/imgs/perfil.png" className="icon" />
          </div>
        </footer>
      </div>
    </>
  );
}
