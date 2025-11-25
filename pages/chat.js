import "../styles/chat.css";

export default function Chat() {
  return (
    <div className="container">

      <header className="header">
        <a href="#" className="back-btn">◄</a>

        <div className="user-info">
          <img src="/imgs/perfil.png" className="profile-pic" alt="perfil" />
          <span className="username">Fulanita de tal</span>
        </div>

        <span className="arrow">{">"}</span>
      </header>

      <hr className="divider" />

      <div className="chat-box">
        <div className="msg me">Hola</div>

        <div className="msg other">
          Hola Juan, ¿Cómo estás?
        </div>

        <div className="msg me">Bien y tú?</div>
      </div>

      <div className="input-box">
        <input type="text" placeholder="Message...." />
        <img src="/imgs/camara.png" className="cam-icon" alt="camara" />
      </div>

    </div>
  );
}
