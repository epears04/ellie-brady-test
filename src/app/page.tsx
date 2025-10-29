import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>

        <h1 className={styles.name}>Ellie Pearson</h1>
        <h2 className={styles.title}>Tech Advisor at Hack4Impact-Cal Poly</h2>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>About Me</h3>
          <p className={styles.about}>
            Ellie Pearson is a computer science student at California Polytechnic State University - San Luis Obispo. 
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          <ul className={styles.list}>
            <li>Tech Lead - Hack4Impact, Go See Foundation</li>
            <li>Software Developer - Hack4Impact, Partners in Equestrian Therapy</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <ul className={styles.list}>
            <li>JavaScript, TypeScript</li>
            <li>React, Next.js, Node.js</li>
            <li>Python, Java, C</li>
            <li>MongoDB, mySQL</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
