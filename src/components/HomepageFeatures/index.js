import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Research',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
        Learn about new technologies and techniques.
      </>
    ),
  },
  {
    title: 'Explore',
    Svg: require('@site/static/img/compass.svg').default,
    description: (
      <>
        Discover solutions, platforms, and methodologies.
      </>
    ),
  },
  {
    title: 'Prototype',
    Svg: require('@site/static/img/document.svg').default,
    description: (
      <>
        Grow your knowledge, expand your toolset, develop
        new products.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
