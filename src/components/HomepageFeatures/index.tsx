import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

// TODO
// Free illustrations: https://undraw.co/illustrations
const FeatureList: FeatureItem[] = [
    {
        title: '1st',
        Svg: require('@site/static/img/leaders.svg').default,
        description: (
            <>
                Clap a lot
            </>
        ),
    },
    {
        title: '2st',
        Svg: require('@site/static/img/speech.svg').default,
        description: (
            <>
              Shake your Hand When you come and leave the stage
            </>
        ),
    },
    {
        title: '3st',
        Svg: require('@site/static/img/gatherings.svg').default,
        description: (
            <>
              Turn your phone into the Silent Mode
            </>
        ),
    },
    {
      title: '4st',
      Svg: require('@site/static/img/Money.svg').default,
      description: (
          <>
            Please pay the room fee to the Kakao Bank 차영주
          </>
      ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
