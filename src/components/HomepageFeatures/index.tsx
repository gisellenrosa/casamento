import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: ReactNode;
  description: ReactNode;
};
const FeatureList: FeatureItem[] = [
  {
    title: 'Construído para o Trabalho em Equipe 🤝',
    img:( <img src="/img/jg_mountain.jpg" alt="Josue e Giselle Montanha colrida" style={{ width: '50%', borderRadius: '12px' }} />),
    description: (
      <>
        Nosso casamento é como uma arquitetura bem feita: papéis claros, objetivos compartilhados e apoio em cada sprint.
        As tarefas são documentadas, os PRs são respeitados e ninguém faz deploy sozinho.
      </>
    ),
  },
  {
    title: 'Foco no que Realmente Importa 💡',
    img: <img src="/img/jg_focus.jpg" alt="Josue e Giselle Montanha colrida" style={{ width: '50%', borderRadius: '12px' }} />,
    description: (
      <>
        Priorizamos o que nos aproxima: conexão, paz, metas financeiras e bem-estar emocional.
        Fazemos debug com carinho e organizamos com intenção.
      </>
    ),
  },
  {
    title: 'Movido a Amor (e React) ❤️⚛️',
    img: <img src="/img/jg_love.jpg" alt="Josue e Giselle Montanha colrida" style={{ width: '50%', borderRadius: '12px' }} />,
    description: (
      <>
        Nossa vida roda com React e rotina — mas o verdadeiro motor é o amor, o respeito e os sonhos que construímos juntos.
        Evoluímos a cada commit, versão após versão.
      </>
    ),
  },
];


function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">{img}</div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
