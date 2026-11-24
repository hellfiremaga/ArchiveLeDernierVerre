import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Erika - 15ans - Chrétienne',
    src: '/ArchiveLeDernierVerre/img/Erika/01.jpg',
    description: (
      <>
        Sportive et en forme, enjouée, énergique, ouverte d'esprit, jeune femme chic qui aime ce qu'elle fait. Au cours de mes interactions, j'aime à la fois donner et recevoir du plaisir - j'aime être touché doucement, et surtout, j'aime une langue sur ma chatte, qui est la meilleure façon de m'exciter. J'ai hâte de passer un moment sensuel, inoubliable, ensemble.
        <form action='https://discord.gg/HDjKc8U8qn' target="_blank">
        <button
          style={{
            backgroundColor: '#7289da',
            borderRadius: 30,
            color: 'white',
            cursor: 'pointer',
            margin: "20px",
            padding: "10px",
          }}>ENCULE MOI EN CLIQUANT ICI !</button>
        </form>
      </>
    ),
  },
  {
    title: 'Erika - 20ans - Juive',
    src: '/ArchiveLeDernierVerre/img/Erika/00.jpg',
    description: (
      <>
        Très proche de ses sous, sa formation de comptable et de tireuse au lance-roquette vous permettra de l'utiliser au meilleur escient. Elle apprécie particulièrement les iraniens avec un gros nez et un short Ikéa.
        <form action='https://discord.gg/HDjKc8U8qn' target="_blank">
        <button
          style={{
            backgroundColor: '#7289da',
            borderRadius: 30,
            color: 'white',
            cursor: 'pointer',
            margin: "20px",
            padding: "10px",
          }}>JE TE SUCE SOUS CE LIEN !</button>
          </form>
      </>
    ),
  },
  {
    title: 'Jésus - 2023ans - Juif',
    src: '/ArchiveLeDernierVerre/img/Erika/03.jpg',
    description: (
      <>
        Moi on ne me baise pas, mais tu peux venir parler avec moi sur Twitch.
        <form action='https://www.twitch.tv/ask_jesus' target="_blank">
        <button
          style={{
            backgroundColor: '#7289da',
            borderRadius: 30,
            color: 'white',
            cursor: 'pointer',
            margin: "20px",
            padding: "10px",
          }}>CLIQUE POUR ME PARLER !</button>
          </form>
      </>
    ),
  },
  {
    title: 'Erika - 13ans - Musulmane',
    src: '/ArchiveLeDernierVerre/img/Erika/02.jpg',
    description: (
      <>
        Bonjour. Je suis une belle femme avec un look irrésistible. Sensuelle et élégante, je vous invite à découvrir la fougue de mon corps et l'urgence de mes lèvres. Je vous offre un moment de bonheur absolu et d'extase incroyable. Je peux être douce et apaisante. Vous serez captivé par mon attention et mon imagination. Je t'attendrai dans un appartement modeste et très propre, et en même temps je t'ouvrirai la porte, t'accueillant en lingerie sexy ou une belle robe.
        <form action='https://discord.gg/HDjKc8U8qn' target="_blank">
        <button
          style={{
            backgroundColor: '#7289da',
            borderRadius: 30,
            color: 'white',
            cursor: 'pointer',
            margin: "20px",
            padding: "10px",
          }}>CLIQUE POUR ME SAUTER</button>
        </form>
      </>
    ),
  },
  {
    title: 'Erika - 15ans - Chrétienne',
    src: '/ArchiveLeDernierVerre/img/Erika/03.png',
    description: (
      <>
        Magnifique blonde vous attend aujourd'hui pour visiter! Une fille magnifique sans complexes, une déesse de la volupté et une vraie féé égayeront votre soirée ennuyeuse. Vous pouvez me commander dans le service d'escorte ou dans l'agence où je fournis des services. Je peux venir à votre domicile si vous le souhaitez. Choisissez-moi pour les loisirs communs! 
        <form action='https://discord.gg/HDjKc8U8qn' target="_blank">
        <button
          style={{
            backgroundColor: '#7289da',
            borderRadius: 30,
            color: 'white',
            cursor: 'pointer',
            margin: "20px",
            padding: "10px",
          }}>MOI J'AIME PAR L'ANUS</button>
        </form>
      </>
    ),
  },
  {
    title: 'Erika - 14ans - Chrétienne',
    src: '/ArchiveLeDernierVerre/img/Erika/04.jpg',
    description: (
      <>
        Belle blonde BCBG, de bon niveau social et culturel... Serais à votre écoute pour vos désirs les plus charnels ... Je reste a votre entière disposition pour toutes questions me concernant, uniquement par sms merci.
        <form action='https://discord.gg/HDjKc8U8qn' target="_blank">
        <button
          style={{
            backgroundColor: '#7289da',
            borderRadius: 30,
            color: 'white',
            cursor: 'pointer',
            margin: "20px",
            padding: "10px",
          }}>CLIQUE ET DECOUVRE LE PLAISIR</button>
        </form>
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
