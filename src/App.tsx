import { contact, experience, profile, projects, skills } from './data'

const SectionTitle = ({ label }: { label: string }) => (
  <div className="section-title">
    <span className="section-bar" />
    <h2>{label}</h2>
  </div>
)

function App() {
  return (
    <div className="page">
      <header className="hero" id="home">
        <nav className="nav">
          <div className="brand">Kimfolio</div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src={profile.image || '/placeholder-profile.jpg'} 
              alt={`${profile.name} 프로필 사진`}
              className="profile-image"
              onError={(e) => {
                // 이미지가 없을 경우 플레이스홀더 표시
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YxZjVmOSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </div>
          <div className="profile-intro">
            <h2 className="profile-name">{profile.name}</h2>
            <p className="profile-intro-text">{profile.intro}</p>
          </div>
        </div>

        <div className="hero-tags">
          <span>Computer Engineering Dept.</span>
          <span>Full Stack & Systems</span>
          <span>OS · Network · Algorithm</span>
        </div>

        <div className="hero-content">
          <div>
            <p className="eyebrow">{profile.role}</p>
            <h1>{profile.tagline}</h1>
            <p className="lead">{profile.summary}</p>
            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>{profile.availability}</span>
            </div>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                최근 작업 보기
              </a>
              <a className="btn ghost" href={`mailto:${profile.email}`}>
                연락하기
              </a>
            </div>
          </div>
          <div className="hero-card code-panel">
            <div className="code-panel-header">
              <span>/systems/portfolio.log</span>
              <span className="status-dot" />
            </div>
            <pre>
{`const interests = ['Distributed Systems', 'Realtime Game Dev', 'DevOps'];
const dna = {
  major: 'Computer Engineering',
  mindset: 'Problem Solver',
  currentFocus: ['Full Stack', 'Simulation']
};`}
            </pre>
          </div>
        </div>
      </header>

      <main>
        <section id="projects">
          <SectionTitle label="Selected Projects" />
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-headline">
                  <a
                    className="project-icon-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} ${project.icon ? '플레이하기' : '방문하기'}`}
                  >
                    {project.icon ? (
                      <img src={project.icon} alt={`${project.name} 아이콘`} />
                    ) : (
                      <div className="project-icon-placeholder">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2L2 7L12 12L22 7L12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 17L12 22L22 17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 12L12 17L22 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </a>
                  <div className="project-headline-text">
                    <p className="project-period">{project.period}</p>
                    <h3>{project.name}</h3>
                  </div>
                </div>
                <div className="project-video">
                  {project.video ? (
                    (() => {
                      const videoUrl = project.video;
                      // YouTube URL 처리
                      if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                        let embedUrl = '';
                        if (videoUrl.includes('youtube.com/embed')) {
                          embedUrl = videoUrl;
                        } else if (videoUrl.includes('youtu.be/')) {
                          const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0] || '';
                          embedUrl = `https://www.youtube.com/embed/${videoId}`;
                        } else if (videoUrl.includes('youtube.com/watch')) {
                          const videoId = videoUrl.split('v=')[1]?.split('&')[0] || '';
                          embedUrl = `https://www.youtube.com/embed/${videoId}`;
                        }
                        return (
                          <iframe
                            src={embedUrl}
                            title={`${project.name} 시연 영상`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="project-video-iframe"
                          />
                        );
                      }
                      // Vimeo URL 처리
                      if (videoUrl.includes('vimeo.com')) {
                        let embedUrl = '';
                        if (videoUrl.includes('player.vimeo.com')) {
                          embedUrl = videoUrl;
                        } else {
                          const videoId = videoUrl.split('vimeo.com/')[1]?.split('?')[0] || '';
                          embedUrl = `https://player.vimeo.com/video/${videoId}`;
                        }
                        return (
                          <iframe
                            src={embedUrl}
                            title={`${project.name} 시연 영상`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            className="project-video-iframe"
                          />
                        );
                      }
                      // 로컬 비디오 파일
                      return (
                        <video
                          src={videoUrl}
                          controls
                          className="project-video-element"
                          preload="metadata"
                        >
                          브라우저가 비디오 태그를 지원하지 않습니다.
                        </video>
                      );
                    })()
                  ) : (
                    <div className="project-video-placeholder">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="project-video-placeholder-icon"
                      >
                        <path
                          d="M8 5V19L19 12L8 5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="project-video-placeholder-text">시연 영상 준비 중</p>
                    </div>
                  )}
                </div>
                <p className="project-summary">{project.summary}</p>
                <p className="project-impact">{project.impact}</p>
                <ul className="chip-list">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionTitle label="Capabilities" />
          <div className="skills">
            <div>
              <h3>Core Stack</h3>
              <ul>
                {skills.core.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>UI · Experience</h3>
              <ul>
                {skills.ui.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Tooling</h3>
              <ul>
                {skills.tooling.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience">
          <SectionTitle label="Experience" />
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.company} className="experience-card">
                <div>
                  <p className="project-period">{item.period}</p>
                  <h3>
                    {item.role} · {item.company}
                  </h3>
                </div>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <SectionTitle label="Next Step" />
          <div className="contact-card">
            <div>
              <p>새로운 팀과 함께할 대화를 기다리고 있어요.</p>
              <p>아이디어가 있다면 편하게 메시지 주세요.</p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={contact.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={contact.linkedIn} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={contact.resume} target="_blank" rel="noreferrer">
                Resume ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {profile.name}. Made with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App

