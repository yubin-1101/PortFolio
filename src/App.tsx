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
          <div className="hero-card">
            <p>Focus</p>
            <h3>UX · API · DevOps까지 잇는 풀스택 오너십</h3>
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
                  {project.icon ? (
                    <a
                      className="project-icon-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} 플레이하기`}
                    >
                      <img src={project.icon} alt={`${project.name} 아이콘`} />
                    </a>
                  ) : null}
                  <div className="project-headline-text">
                    <p className="project-period">{project.period}</p>
                    <h3>{project.name}</h3>
                  </div>
                  {!project.icon ? (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Visit ↗
                    </a>
                  ) : null}
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

