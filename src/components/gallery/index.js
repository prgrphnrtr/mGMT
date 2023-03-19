import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'


const CardListx = [
  {
    title: 'Matthias',
    img: require('@site/static/img/siebels.jpg').default,
    description: (
      <>
        Macht das.
      </>
    ),

  },
  {
    title: 'Docusaurus',
    img: require('@site/static/img/prider.png').default,
    description: (
      <>
        ...kann alles!
      </>
    ),

  },
  {
    title: 'Konrad Farbenfroh',
    img: require('@site/static/img/prider.png').default,
    description: (
      <>
        ...gibt sein Bestes!
      </>
    ),

  },


  
];

export function Card({img, title, description}) {
  return (

<div class='col col--4' className={styles.feature}>
  <div class="card ">
    <div>
      <img
        src={img}
        alt="Image alt text"
        title={title}
      />
    </div>
    <div class="card__body">
      <center><h4>{title}</h4></center>
      <small>
        {description}
      </small>
    </div>

    <div class="card__footer">
      <Link to={"docs/"+title} class="button button--primary button--block">
        {'Visit '+title}
      </Link>
    </div>
  </div>
  <br></br>

  <svg className={styles.featureSvg} role="img" />


</div>





  );
}

export default function Cards() {
  return (
    <div>


      <section className={styles.features}>
      <div className="container">
  <div className="row">
    {SvgFeaturesList.map((props, idx) => (
      <SvgFeature key={idx} {...props} />
    ))}
  </div>
</div>

    </section>
    <section className={styles.features}>
      <div className="container">
      <div className="">
        </div>
        <div className="row">
          {CardListx.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
      </section>

    </div>
  );
}


const SvgFeaturesList = [
  {
    title: 'Work hard',
    Svg: require('@site/static/img/index.svg').default,
    description: (
      <>
        Sleeping is okay.
      </>
    ),
  },
  {
    title: 'Play hard',
    Svg: require('@site/static/img/index.svg').default,
    description: (
      <>
        Sleeping is okay.
      </>
    ),
  }
];

function SvgFeature({Svg, title, description}) {
  return (
    <div className={'col'}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 href="https://www.google.com">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    
  );
}

