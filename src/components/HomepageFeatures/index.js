import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'TJAP3',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        一款在电脑端运行的太鼓达人模拟器，玩家可以通过游玩TJAP3来练习南梦宫本家的游戏谱面，也可以游玩玩家制作的自制谱面。最开始为psp的一款自制软件，后来在3DS上也有人制作了同名软件。
      </>
    ),
  },
  {
    title: '分支',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        目前广为玩家所知的版本为TJAP3(TJAPlayer3)，其他版本还有TJAP2、BetterTaikoCatsCaffe、以及opentaiko等。
      </>
    ),
  },
  {
    title: '明显优势',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        太鼓达人模拟器并不只限于TJAP3以及它的分支版本，但只有TJAP3是开源的且至今仍有维护，不仅功能和性能上十分优秀，并都有提升的空间。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
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
