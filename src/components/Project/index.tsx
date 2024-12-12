import { removeHyphensAndCapitalize } from '../../utils/helpers.js';
// import * as projects from '../../assets/index.js';

const Project: React.FC<{project: { name: string; repo: string; link: string; description: string;}}> = ({ project }) => {
  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
        src='https://placehold.co/600x400/EEE/31343C'
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
