
import mock01 from '../assets/images/mock_chaski.png';
import mock02 from '../assets/images/mediaboxplayer.jpg';
import mock03 from '../assets/images/videosurveillance.png';
import mock04 from '../assets/images/portfolio.png';

import GitHubIcon from '@mui/icons-material/GitHub';

import '../assets/styles/Project.scss';
import Project from "./Project";

const Projects = () => {

    const projectsExample = [
        {
            name : 'Chasqui Web Puzzles',
            linkRepo : 'https://github.com/srodrigo23/puzzle-chaski.git',
            description : 'Puzzles for a Funny magazzine.', 
            mockImage : mock01
        }, 
        {
            name : 'MediaBoxPlayer',
            linkRepo : 'https://github.com/srodrigo23/mediaboxplayer.git',
            description : 'Android application for stream media files stored in services like Dropbox.', 
            mockImage : mock02
        },
        {
            name : 'Video Surveillance Smart System',
            linkRepo : 'https://github.com/srodrigo23/security-camera.git',
            description : 'System to video surveillance to detect persons, fire, smoke and movement powered with OpenCV.', 
            mockImage : mock03
        },
        {
            name : 'My Portfolio',
            linkRepo : 'https://github.com/srodrigo23/portfolio.git',
            description : 'Professional Portfolio to show dev experience.', 
            mockImage : mock04
        }
    ]
    return(
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                {
                    projectsExample.map((e, i)=>(
                        <Project
                            project={e}
                        />        
                    ))
                }
                {/* <div className="project">
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src=
                    {mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                    <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
                </div>
                <div className="project">
                    <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                    <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
                </div>
                <div className="project">
                    <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                    <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
                </div>
                <div className="project">
                    <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                    <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
                </div>
                <div className="project">
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                    <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                    <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
                </div>
                <div className="project">
                    <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                    <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
                </div>
                <div className="project">
                    <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                    <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                    <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
                </div> */}
            </div>
        </div>
    );
}

export default Projects;