import { contact, experience, profile, projects, skills } from './data'
import DynamicBackground from './DynamicBackground';
import { useState, useEffect } from 'react';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 정확히 페이지 맨 위(0px)일 때만 헤더 보이기
      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      }
      // 그 외에는 헤더 숨기기
      else {
        setIsHeaderVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'ai'>('frontend');
  // 프론트엔드/백엔드/AI&툴 기술 분류
  const frontendSkills = [
    skills.core.find(s => s.name === 'TypeScript'),
    skills.core.find(s => s.name === 'React'),
    skills.core.find(s => s.name === 'Next.js'),
    ...skills.ui,
  ].filter(Boolean);
  const backendSkills = [
    skills.core.find(s => s.name === 'Node.js'),
    skills.core.find(s => s.name === 'NestJS'),
    skills.core.find(s => s.name === 'Prisma'),
    ...skills.tooling,
  ].filter(Boolean);
  // AI & Tools는 tooling 전체로 대체
  const aiSkills = [...skills.tooling].filter(Boolean);
  return (
    <>
      <DynamicBackground />
      <div className="blog-layout">
        {/* 블로그 헤더 */}
        <header className={`blog-header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
          <div className="blog-header-content">
            <div className="site-title">
              <h1>Yubin DevLog</h1>
              <p>기술과 열정이 만나는 공간</p>
            </div>
            <div className="header-controls">
              <nav className="blog-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
              </nav>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="dark-mode-toggle"
                title={isDarkMode ? '라이트 모드' : '다크 모드'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </header>

        {/* 메인 레이아웃 */}
        <div className="blog-main">
          {/* 사이드바 */}
          <aside className="blog-sidebar">
            {/* 작가 소개 */}
            <div className="author-card">
              <img 
                src={profile.image || '/placeholder-profile.jpg'} 
                alt={profile.name}
                className="author-image"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YxZjVmOSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
              <h3>{profile.name}</h3>
              <p className="author-role">{profile.role}</p>
              <p className="author-bio">{profile.intro}</p>
              <div className="author-stats">
                <div className="stat">
                  <span className="stat-label">Projects</span>
                  <span className="stat-value">{projects.length}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Experience</span>
                  <span className="stat-value">{experience.length}</span>
                </div>
              </div>
              <div className="author-links">
                <a href={contact.github} target="_blank" rel="noreferrer" title="GitHub">🐙</a>
                <a href={contact.linkedIn} target="_blank" rel="noreferrer" title="LinkedIn">💼</a>
                <a href={`mailto:${contact.email}`} title="Email">✉️</a>
              </div>
            </div>


          </aside>

          {/* 메인 컨텐츠 */}
          <main className="blog-content">
            {/* 홈 배너 */}
            <section id="home" className="blog-hero">
              <h1>{profile.tagline}</h1>
              <p className="hero-subtitle">{profile.summary}</p>
              <div className="hero-meta">
                <span>📍 {profile.location}</span>
                <span>🕐 {profile.availability}</span>
              </div>
            </section>

            {/* 카테고리 섹션 완전 제거 */}

            {/* About 섹션 */}
            <section id="about" className="blog-section">
              <h2>👋 About Me</h2>
              <article className="blog-post">
                <div className="post-content">
                  <p>{profile.summary}</p>
                  <h3>Core Skills</h3>
                  <div className="skills-showcase">
                    {skills.core.map((skill, idx) => (
                      <span key={skill.name + '-' + idx} className="skill-badge">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </section>

            {/* Projects 섹션 */}
            <section id="projects" className="blog-section">
              <h2>📝 Featured Projects</h2>
              <div className="blog-posts">
                {projects.slice(0, 5).map((project) => (
                  <article key={project.name} className="project-card-modern">
                    {/* 왼쪽: 프로젝트 배경 영역 */}
                    <div className="project-card-left">
                      <div className="project-card-bg">
                        {/* 프로젝트 아이콘/제목 */}
                        <div className="project-card-header">
                          {project.icon ? (
                            <img src={project.icon} alt={project.name} className="project-icon" />
                          ) : (
                            <div className="project-icon-placeholder">📦</div>
                          )}
                          <div className="project-card-title">
                            <h3>{project.name}</h3>
                            <p>{project.period}</p>
                          </div>
                        </div>

                        {/* 비디오 공간 */}
                        <div className="project-video-container">
                          {project.video ? (
                            (() => {
                              const videoUrl = project.video;
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
                                    className="project-video"
                                  />
                                );
                              }
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
                                    className="project-video"
                                  />
                                );
                              }
                              return (
                                <video
                                  src={videoUrl}
                                  controls
                                  className="project-video"
                                  preload="metadata"
                                />
                              );
                            })()
                          ) : (
                            <div className="project-video-placeholder">
                              <span>🎬</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 오른쪽: 프로젝트 정보 영역 */}
                    <div className="project-card-right">

                      {/* 설명만 표시 */}
                      <p className="project-description">{project.summary}</p>

                      {/* 기술 스택 */}
                      <div className="project-tech-section">
                        <h4>기술 스택</h4>
                        <div className="project-tech-tags">
                          {project.tech.map((tech) => {
                            if (typeof tech === 'string') {
                              return (
                                <span key={tech + '-' + project.name} className="tech-badge">
                                  {tech}
                                </span>
                              );
                            } else if (tech && typeof tech === 'object' && (tech as any).name) {
                              return (
                                <span key={(tech as any).name + '-' + project.name} className="tech-badge">
                                  {(tech as any).name}
                                </span>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>

                      {/* 액션 버튼 */}
                      <div className="project-actions">
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="btn btn-primary"
                        >
                          <span>▶️</span>
                          상세 보기
                        </button>
                        <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-secondary">
                          <span>🔗</span>
                          라이브 데모
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Experience 섹션 */}
            <section id="experience" className="blog-section">
              <h2>💼 Experience</h2>
              <div className="experience-timeline">
                {experience.map((exp) => (
                  <div key={exp.company} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3 className="exp-title">{exp.role}</h3>
                      <p className="exp-company">{exp.company}</p>
                      <p className="exp-period">{exp.period}</p>
                      <ul className="exp-details">
                        {exp.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills 섹션 */}
            <section id="skills" className="blog-section">
              <h2>🛠️ Tech Stack</h2>
              <div className="tech-tabs">
                <button
                  className={`tech-tab${activeTab === 'frontend' ? ' active' : ''}`}
                  onClick={() => setActiveTab('frontend')}
                >
                  <span className="tab-icon" role="img" aria-label="frontend">💻</span>
                  Frontend
                </button>
                <button
                  className={`tech-tab${activeTab === 'backend' ? ' active' : ''}`}
                  onClick={() => setActiveTab('backend')}
                >
                  <span className="tab-icon" role="img" aria-label="backend">⚙️</span>
                  Backend
                </button>
                <button
                  className={`tech-tab${activeTab === 'ai' ? ' active' : ''}`}
                  onClick={() => setActiveTab('ai')}
                >
                  <span className="tab-icon" role="img" aria-label="ai">🤖</span>
                  AI & Tools
                </button>
              </div>
              <div className="skills-grid">
                {activeTab === 'frontend' && (
                  <div className="skill-items">
                    {frontendSkills.map((skill, idx) =>
                      skill ? (
                        <span key={skill.name + '-' + idx} className="skill-item">
                          <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          {skill.name}
                        </span>
                      ) : null
                    )}
                  </div>
                )}
                {activeTab === 'backend' && (
                  <div className="skill-items">
                    {backendSkills.map((skill, idx) =>
                      skill ? (
                        <span key={skill.name + '-' + idx} className="skill-item">
                          <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          {skill.name}
                        </span>
                      ) : null
                    )}
                  </div>
                )}
                {activeTab === 'ai' && (
                  <div className="skill-items">
                    {aiSkills.length > 0 ? aiSkills.map((skill, idx) =>
                      skill ? (
                        <span key={skill.name + '-' + idx} className="skill-item">
                          <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          {skill.name}
                        </span>
                      ) : null
                    ) : <span style={{color:'#888'}}>AI 및 툴 관련 기술 정보가 없습니다.</span>}
                  </div>
                )}
              </div>
            </section>

            {/* Contact 섹션 */}
            <section id="contact" className="blog-section contact-section">
              <h2>💬 Get In Touch</h2>
              <article className="blog-post">
                <p className="contact-intro">새로운 기회나 협업에 대해 이야기하고 싶으신가요? 언제든지 연락해주세요!</p>
                <div className="contact-links">
                  <a href={`mailto:${contact.email}`} className="contact-btn email">
                    <span>✉️</span>
                    <span>Email</span>
                  </a>
                  <a href={contact.github} target="_blank" rel="noreferrer" className="contact-btn github">
                    <span>🐙</span>
                    <span>GitHub</span>
                  </a>
                  <a href={contact.linkedIn} target="_blank" rel="noreferrer" className="contact-btn linkedin">
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </a>
                  <a href={contact.resume} target="_blank" rel="noreferrer" className="contact-btn resume">
                    <span>📄</span>
                    <span>Resume</span>
                  </a>
                </div>
              </article>
            </section>
          </main>
        </div>

        {/* 푸터 */}
        <footer className="blog-footer">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </footer>

        {/* 상세 보기 모달 */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
              
              <div className="modal-header">
                <div className="modal-icon">
                  {selectedProject.icon ? (
                    <img src={selectedProject.icon} alt={selectedProject.name} />
                  ) : (
                    <span>📦</span>
                  )}
                </div>
                <div className="modal-title-section">
                  <h2>{selectedProject.name}</h2>
                  <p className="modal-period">{selectedProject.period}</p>
                </div>
              </div>

              <div className="modal-body">
                {/* 설명 */}
                <section className="modal-section modal-section-split">
                  <div className="modal-description-left">
                    <h3>📖 프로젝트 설명</h3>
                    <p>{selectedProject.summary.split('\n\n')[0]}</p>
                  </div>
                  {selectedProject.summary.includes('|') && (
                    <div className="modal-test-accounts">
                      <h3>🔐 테스트 계정</h3>
                      <div className="test-account-list">
                        {selectedProject.summary.split('\n').slice(2).map((line, idx) => {
                          const [role, credentials] = line.split(' - ');
                          const [email, password] = credentials.split(' | ');
                          return (
                            <div key={idx} className="test-account-item">
                              <div className="account-role">{role}</div>
                              <div className="account-email">{email}</div>
                              <div className="account-password">
                                <span className="pwd-label">비밀번호:</span>
                                <span className="pwd-value">{password}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </section>

                {/* 주요 기능 */}
                {(selectedProject as any).features && (selectedProject as any).features.length > 0 && (
                  <section className="modal-section">
                    <h3>✨ 주요 기능</h3>
                    <ul className="feature-list">
                      {(selectedProject as any).features.map((feature: string, idx: number) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* 영향도 */}
                <section className="modal-section">
                  <h3>💫 프로젝트 영향도</h3>
                  <p className="impact-highlight">{selectedProject.impact}</p>
                </section>

                {/* 기술 스택 */}
                <section className="modal-section">
                  <h3>🛠️ 기술 스택</h3>
                  <div className="modal-tech-tags">
                    {selectedProject.tech.map((tech, idx) => {
                      const techName = typeof tech === 'string' ? tech : (tech as any)?.name || '';
                      return (
                        <span key={idx} className="modal-tech-badge">
                          {techName}
                        </span>
                      );
                    })}
                  </div>
                </section>

                {/* 액션 */}
                <div className="modal-actions">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-primary"
                  >
                    <span>🔗</span>
                    라이브 데모 방문
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="btn btn-secondary"
                  >
                    <span>✕</span>
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
