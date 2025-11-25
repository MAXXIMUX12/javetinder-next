import "../styles/filters.css";

export default function Filters() {
  return (
    <div className="container">

      <header className="header">
        <h1 className="header-title">Filter</h1>

        <div className="header-icons">
          <img src="/imgs/notificaciones.png" alt="notificaciones" className="icon" />
          <img src="/imgs/ajustes.png" alt="ajustes" className="icon" />
        </div>
      </header>

      <main className="filter-box">

        <div className="section">
          <div className="section-title">
            <span>Gender</span>
          </div>

          <div className="option"><span>Women</span></div>
          <div className="option"><span>Men</span></div>
        </div>

        <div className="section">
          <div className="section-title">
            <span>Faculty</span>
          </div>

          <div className="option"><span>Economic and admin. Sciences</span></div>
          <div className="option"><span>Humanities and social Sciences</span></div>
          <div className="option"><span>Health Sciences</span></div>
          <div className="option"><span>Creation and Habitat</span></div>
          <div className="option"><span>Engineering and Sciences</span></div>
        </div>

      </main>

      <footer className="footer">
        <img src="/imgs/javetinder.png" className="footer-icon" alt="fuego" />
        <img src="/imgs/calendario.png" className="footer-icon" alt="calendario" />
        <img src="/imgs/chat.png" className="footer-icon" alt="chat" />
        <img src="/imgs/perfil.png" className="footer-icon" alt="perfil" />
      </footer>

    </div>
  );
}
