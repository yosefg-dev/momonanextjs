import Head from 'next/head';
import Post from '../components/Post';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../styles/Post.module.css';
//import db from '../database';

export default function Home() {
  // jobcategroy = props.jobCategory;
  // jobinformation = props.jobInformation;
  return (
    <div className={styles.container}>
        <Head>
          <title>Momona Head Hunt</title>
          <link rel="icon" href="/momona.jpeg" />
        </Head>
      <div class="row">
        <div className={'col-sm-3'}><Post/></div>
        <div className={'col-sm-3'}><Post/></div>
        <div className={'col-sm-3'}><Post/></div>
        <div className={'col-sm-3'}><Post/></div>
      </div>
      



      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}
</div>
);
}

//export async function getServerSideProps(req, res) {
  // let jobCategory = await db.JobCategory.findAll()
  //  jobCategory = JSON.parse(JSON.stringify(jobcategroy))
  // let jobInformation = await db.JobInformation.findAll({ where: { JobCategoryID: jobCategoryJson.id } })
  // jobInformation = JSON.parse(JSON.stringify(jobInformation))
  // /*  const stringfyuser = JSON.parse(JSON.stringify(user)) */
  // return {
  //   props: { jobCategory: jobCategory, jobInformation: jobInformation },
  // }
//}
