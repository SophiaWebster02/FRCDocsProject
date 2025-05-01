import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '2025 Robot, Bruce',
    Svg: require('@site/static/img/Robot.svg').default,
    description: (
      <>
        Bruce was designed to compete in the FRC 2025 game REEFSCAPE. The robot has an endeffector, arm, elevator, climber, and drive train that have been programmed to mostly autonomously move through the competition field.
      </>
    ),
  },
  {
    title: 'MapleSim/Advantage Kit',
    Svg: require('@site/static/img/Controller.svg').default,
    description: (
      <>
        Our team uses MapleSim to simulate robot actions before testing them on the game field. This allows us to program and test code before our robot is built our while we are practicing. 
      </>
    ),
  },
  {
    title: 'Autonoumous',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
