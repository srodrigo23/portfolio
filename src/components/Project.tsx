
import GitHubIcon from '@mui/icons-material/GitHub';
import { FC } from 'react';

/**
 * 
 * Project name, link github, description
 * @returns 
 */

type ProjectType = {
    name: string,
    linkRepo: string,
    description: string,
    mockImage : string,
};

interface ProjectProps {
    project: ProjectType
}

const Project :FC<ProjectProps> = ({project}):JSX.Element =>{
    return (
        <div className="project">
            <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
                <img 
                    src={project.mockImage}
                    height={350}
                    className="zoom" alt="thumbnail" width="100%"
                />
            </a>
            <a target="_blank" rel="noreferrer">
                <h2 className='project-title'>{project.name}</h2>
                <a href={`${project.linkRepo}`} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            </a>
            <p>{project.description}</p>    
        </div>
    )
} 

export default Project;