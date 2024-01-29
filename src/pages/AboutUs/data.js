import { ENGLISH, SPANISH } from "../../context/languaje/types";
import Banner1 from "../../assets/Banners/Banner1.png";
import Banner2 from "../../assets/Banners/Banner2.png";
import Banner4 from "../../assets/Banners/Banner4.jpg";

export const title = {
  [SPANISH]: "Sobre Nosotros",
  [ENGLISH]: "About Us",
};

export const mainDescription = {
  [SPANISH]: () => (
    <>
      <h3>¡Bienvenido Coachboost!</h3>
      <p>
        A nuestra Academia profesional de League of Legends! Donde aprenderás a
        jugar bien al jueguito y subirás si o si a tu división soñada, te lo
        garantizamos.
      </p>
      <p>
        Contamos con coaches que son o fueron proplayers para que alcances tu
        meta junto a nosotros!
      </p>
      <p>
        Somos un grupo dedicado de jugadores altamente calificados y
        experimentados apasionados por ayudar a otros a alcanzar los rangos
        deseados en el juego.
      </p>
    </>
  ),
  [ENGLISH]: () => (
    <>
      <h3>Welcome to Coachboost!</h3>
      <p>
        To our professional League of Legends Academy! Where you will learn how
        to play the game well and you will climb to your dream division, we
        guarantee it.
      </p>
      <p>
        We have coaches who are or were proplayers for you to reach your goal
        with us! goal together with us!
      </p>
      <p>
        We are a dedicated group of highly skilled and experienced players
        passionate about helping others achieve their desired ranks in the game.
        desired ranks in the game.
      </p>
    </>
  ),
};

export const bannerMision = {
  img: Banner1,
  side: "left",
  [SPANISH]: () => (
    <>
      <h3>Nuestra misión</h3>
      <p>
        es proporcionar servicios de impulso de primer nivel a los jugadores que
        desean mejorar su rendimiento en el juego y su experiencia en general.
      </p>
      <p>
        Con años de experiencia y un compromiso inquebrantable con la
        excelencia, nos hemos convertido en la opción preferida para aquellos
        que buscan mejorar su clasificación de ELO.
      </p>
    </>
  ),
  [ENGLISH]: () => (
    <>
      <h3>Our Mission</h3>
      <p>
        is to provide top-notch boosting services to players who want to improve
        their gaming performance and overall experience.
      </p>
      <p>
        With years of experience and an unwavering commitment to excellence, we
        have become the preferred choice for those looking to improve their ELO
        rating. looking to improve their ELO rating.
      </p>
    </>
  ),
};

export const bannerTeam = {
  img: Banner2,
  side: "right",
  [SPANISH]: () => (
    <>
      <h3>Nuestro equipo</h3>
      <p>
        está compuesto por los mejores jugadores de la industria (Latam), y nos
        enorgullece brindar servicios rápidos, confiables y seguros a nuestros
        clientes.
      </p>
      <p>
        Ya sea que esté buscando subir de rango o simplemente quiera divertirse
        jugando en un nivel superior, estamos aquí para ayudarlo.
      </p>
    </>
  ),
  [ENGLISH]: () => (
    <>
      <h3>Our team</h3>
      <p>
        is composed of the best players in the industry (Latam), and we are
        proud to provide fast, reliable and secure services to our customers.
      </p>
      <p>
        Whether you're looking to move up the ranks or just want to have fun
        playing at a higher level, we're here to help.
      </p>
    </>
  ),
};

export const bannerSecurity = {
  img: Banner4,
  side: "left",
  [SPANISH]: () => (
    <>
      <h3>Seguridad y confidencialidad</h3>
      <p>
        Entendemos lo importante que es la seguridad de tu cuenta y tus datos
        personales. Por lo tanto, hemos implementado medidas rigurosas para
        garantizar que todas las transacciones y la información proporcionada se
        mantengan completamente seguras y confidenciales.
      </p>
    </>
  ),
  [ENGLISH]: () => (
    <>
      <h3>Security and confidentiality</h3>
      <p>
        We understand how important the security of your account and personal
        data is. Therefore, we have implemented rigorous measures to ensure that
        all transactions and information provided are kept completely secure and
        confidential.
      </p>
    </>
  ),
};

export const text = {
  [SPANISH]: `Si tu NO tienes el tiempo para subir de elo y mereces estar en una
            mejor división por trolls o malos jugadores no te preocupes!
            Nosotros subiremos por ti para que puedas tener una mejor
            experiencia de juego en tus partidas clasificatorias!`,
  [ENGLISH]: `If you do NOT have the time to move up in elo and you deserve 
            to be in a better division because of trolls or bad players 
            better division because of trolls or bad players don't worry! 
            We will move up for you so you can have a better playing 
            experience in your experience in your qualifying games!`,
};

export const text2 = {
  title: {
    [SPANISH]: "¿Qué nos hace destacar?",
    [ENGLISH]: "What makes us stand out?",
  },
  description: {
    [SPANISH]: `Profesionalismo: Nos enorgullecemos de contar con un equipo de entrenadores altamente capacitados y calificados, cada uno con un historial comprobado de éxito en el juego. Nuestros entrenadores tienen una profunda comprensión de las estrategias, tácticas y mecánicas del juego, lo que les permite brindar asesoramiento personalizado y valioso a nuestros clientes.`,
    [ENGLISH]: `Professionalism: We pride ourselves on having a team of highly trained and qualified coaches, each with a proven track record of success in the game. Our coaches have a deep understanding of the strategies, tactics and mechanics of the game, allowing them to provide personalized and valuable advice to our clients.`,
  },
};

export const text3 = {
  title: {
    [SPANISH]: "Apoyo continuo",
    [ENGLISH]: "Ongoing support",
  },
  description: {
    [SPANISH]: `Nuestro compromiso no se detiene después de una sesión de coaching o un servicio de elobost. Estamos aquí para brindarte apoyo y orientación a lo largo de tu viaje en League of Legends. Queremos ser parte de tu crecimiento como jugador y celebrar tus éxitos contigo.`,
    [ENGLISH]: `Our commitment doesn't stop after a coaching session or elobost service. We are here to provide you with support and guidance throughout your League of Legends journey. We want to be a part of your growth as a player and celebrate your successes with you.`,
  },
};
