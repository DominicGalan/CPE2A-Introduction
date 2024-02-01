import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>HI, I'm Dominic, I'm  a  computer engineering student.</p>
        <p>My hobbies are singing, drawing, and dancing.
          I take up the course of computer engineering because it has a high salary rate and I'm the only one who chooses the computer engineering in my family.
          I see myself in 5 years being a CEO of the Nijisanji EN and part of the higher company in Japan and have a happy family.</p>
        <p>
          A strong grasp and command of the fundamentals of web development, including HTML, CSS, JavaScript, and pertinent frameworks (such as React, Angular, and Vue).{' '}
          The capacity to debug code efficiently and understand and solve complicated issues. {' '}
          Understanding of online security best practices and concepts, including input validation, safe authentication, and defense against common vulnerabilities (e.g., SQL Injection, Cross-Site Scripting).
        </p>
      </section>
    </Layout>
  );
}