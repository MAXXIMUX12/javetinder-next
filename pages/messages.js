import "../styles/messages.css";

export default function Messages() {
  return (
    <div className="container">

      <header className="header">
        <h1 className="header-title">Messages</h1>

        <div className="header-icons">
          <img src="/imgs/notificaciones.png" alt="notificaciones" className="icon" />
          <img src="/imgs/ajustes.png" alt="ajustes" className="icon" />
        </div>
      </header>

      <main className="messages">

        <div className="message">
          <img src="/imgs/perfil2.png" alt="Valentina" className="profile-icon" />
          <div className="text">
            <strong>Valentina X</strong>
            <p>Bien, gracias</p>
          </div>
          <span className="notif-dot"></span>
        </div>

        <div className="message">
          <img src="/imgs/perfil2.png" alt="Sarah" className="profile-icon" />
          <div className="text">
            <strong>Sarah X</strong>
            <p>You have a new Match. Say hi to Sarah!</p>
          </div>
          <span className="notif-dot"></span>
        </div>

        <div className="message">
          <img src="/imgs/perfil.png" alt="Fulanita" className="profile-icon" />
          <div className="text">
            <strong>Fulanita de tal</strong>
          </div>
        </div>

        <div className="message">
          <img src="/imgs/perfil2.png" alt="Fulanita" className="profile-icon" />
          <div className="text">
            <strong>Fulanita de tal</strong>
          </div>
        </div>

      </main>

      <footer className="footer">
        <img src="/imgs/javetinder.png" className="footer-icon" alt="home" />
        <img src="/imgs/calendario.png" className="footer-icon" alt="calendar" />
        <img src="/imgs/chat.png" className="footer-icon" alt="chat" />
        <img src="/imgs/perfil.png" className="footer-icon" alt="perfil" />
      </footer>

    </div>
  );
}
