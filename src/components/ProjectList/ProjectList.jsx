import Card from "../Card/Card";
import styles from './ProjectList.module.scss';
import NavLinkArrow from "../NavLinkArrow/NavLinkArrow";

function ProjectList({ projects = [], title }) {

  return (
    <div className={styles.list}>
    {
      title && (
        <h3 className={`${styles.project__recommend_title}`}>Посмотрите еще:</h3>
      )
    }
      <ul className={styles.project_list}>
        {projects.map((project, i) => {
          return <Card card={project} key={i} />;
        })}
      </ul>
      <div className={styles.button_container}>
        <NavLinkArrow className={styles.button_container__link} alignSelf={'center'} link={'/portfolio'} title={'посмотреть все'} />
      </div>
    </div>
  );
}

export default ProjectList;
