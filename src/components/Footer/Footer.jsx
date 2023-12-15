import style from './Footer.module.scss'

export const Footer = () => {
    return (
      <footer >
        <div className={style.address}>
          <p>Adresse: <br />
            Kongens alle 23<br />
            Valby
          </p>
          <p>Links: <br />
            <a href="#">booking.nu</a> <br />
            <a href="#">koncertpladser.dk</a>
          </p>
          <p>Kontakt: <br />
            mail: booki@it.dk <br />
            Tlf: 22331122
            </p>
        </div>
      </footer>
    );
  };
