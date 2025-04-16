import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <div className={styles.landing}>
      <div className={styles.centeredContent}>
          <Heading as="h1">Getting Started with</Heading>
          <img className={styles.logoSvg} role="img" src="img/new_logo_org.png" alt="Cloud Foundry Logo" />
          <Heading as="h2">Cloud Foundry is an open-source platform as a service (PaaS) that provides you with a choice of clouds, developer frameworks, and application services.</Heading>
      </div>
    </div>
  );
}
