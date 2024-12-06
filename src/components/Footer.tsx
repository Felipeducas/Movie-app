import React from "react";

function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                <h3>LocalMoviesFD</h3>
              </a>
              <p className="footer-text">
                Esta página compila 9 de mis películas y series favoritas que he visto en los últimos años. Aquí encontrarás una breve descripción de cada una de ellas.
              </p>
            </div>
  
          
  
            <ul className="footer-list">
              <li>
                <h3 className="footer-list-title">Contacto</h3>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#" className="footer-link">
                  <i className="bx bxs-map-alt"></i> Calle 26 # 12-34, Cali, Colombia
                </a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#" className="footer-link">
                  <i className="bx bxs-contact"></i> +57 322-453 23 22
                </a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#" className="footer-link">
                  <i className="bx bxs-envelope"></i> LocalMoviesFD@gmail.com
                </a>
              </li>
            </ul>
  
            <ul className="footer-list">
              <li>
                <h3 className="footer-list-title">Horario de atención</h3>
              </li>
              <li>
                <p className="footer-link" style={{ marginBottom: '20px' }}>
                  Lunes - viernes:
                </p>
              </li>
              <li>
                <p className="footer-link" style={{ marginBottom: '20px' }}>
                  Sábados 
                </p>
              </li>
              <li>
                <p className="footer-link" style={{ marginBottom: '20px' }}>
                  8:00Am - 6:00Pm
                </p>
              </li>
              <li>
                <p className="footer-link" style={{ marginBottom: '20px' }}>
                  8:00Am - 12:00Pm
                </p>
              </li>
            </ul>
          </div>
  
          <div className="footer-bottom">
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <i className="ri-facebook-box-line"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i className="ri-twitter-x-line"></i>
                </a>
              </li>
            </ul>
  
            <p className="copyright">
              Todos los derechos reservados &copy; 2024 LocalMoviesFD | sitio web creado por <a href="#"> Felipe Duarte</a>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;