import "../styles/notifications.css";

export default function Notifications() {
  return (
    <div className="container">

      <header className="header">
        <h1 className="logo-text">JaveTinder</h1>

        <div className="icons">
          <img src="/imgs/notificaciones.png" alt="campana" className="icon" />
        </div>
      </header>

      <div className="content-box">

        <h2 className="title">Notifications</h2>

        <div className="notification">
          <p>There is a new event!</p>
          <img src="/imgs/calendario.png" alt="evento" className="notif-icon" />
        </div>

        <div className="notification">
          <p>You have a message from Valentina</p>
          <img src="/imgs/perfil2.png" alt="mensaje" className="notif-icon" />
        </div>

        <div className="notification">
          <p>You matched with Sarah</p>
          <img src="/imgs/perfil2.png" alt="perfil" className="notif-icon" />
        </div>

        <div className="notification">
          <p>You matched with Sarah</p>
          <img src="/imgs/perfil2.png" alt="perfil" className="notif-icon" />
        </div>

      </div>

      <footer className="footer">
        <img src="/imgs/javetinder.png" className="logo" alt="fuego" />
        <img src="/imgs/calendario.png" className="calendario" alt="calendario" />
        <img src="/imgs/chat.png" className="chat" alt="chat" />
        <img src="/imgs/perfil.png" className="perfil" alt="perfil" />
      </footer>

    </div>
  );
}
