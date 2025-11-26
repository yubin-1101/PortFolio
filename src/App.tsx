import { contact, experience, profile, projects, skills } from './data'
import DynamicBackground from './DynamicBackground';
import { useState } from 'react';

function App() {
  return (
    <>
      <DynamicBackground />
      <div className="blog-layout">
        {/* 블로그 헤더 */}
        <header className="blog-header">
          <div className="blog-header-content">
            <div className="site-title">
              <h1>Yubin DevLog</h1>
              <p>기술과 열정이 만나는 공간</p>
            </div>
            <nav className="blog-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
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
                  <article key={project.name} className="blog-post">
                    <div className="post-header">
                      <h3 className="post-title">{project.name}</h3>
                      <span className="post-date">{project.period}</span>
                    </div>
                    {/* 영상 공간 항상 표시 */}
                    <div className="post-video">
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
                                className="video-iframe"
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
                                className="video-iframe"
                              />
                            );
                          }
                          return (
                            <video
                              src={videoUrl}
                              controls
                              className="video-element"
                              preload="metadata"
                            />
                          );
                        })()
                      ) : (
                        <div className="video-placeholder">
                          <span style={{fontSize:'2.2rem'}}>🎬</span>
                          <div style={{color:'#888',marginTop:'8px'}}>시연 영상 준비 중</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="post-content">
                      <p>{project.summary}</p>
                      <div className="post-meta">
                        <span className="impact">✨ {project.impact}</span>
                      </div>
                    </div>

                    <div className="post-footer">
                      <div className="post-tags">
                        {project.tech.map((tech) => (
                          <a key={tech + '-' + project.name} href={`#tag-${typeof tech === 'string' ? tech : tech.name}`} className="post-tag">{typeof tech === 'string' ? tech : tech.name}</a>
                        ))}
                      </div>
                      <a href={project.link} target="_blank" rel="noreferrer" className="read-more">View Project →</a>
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
              <div className="skills-grid">
                <div className="skill-group">
                  <h4>Backend / Full Stack</h4>
                  <div className="skill-items">
                    {skills.core.map((skill, idx) => (
                      <span key={skill.name + '-' + idx} className="skill-item">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <h4>UI / UX</h4>
                  <div className="skill-items">
                    {skills.ui.map((skill, idx) => (
                      <span key={skill.name + '-' + idx} className="skill-item">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <h4>DevOps & Infrastructure</h4>
                  <div className="skill-items">
                    {skills.tooling.map((skill, idx) => (
                      <span key={skill.name + '-' + idx} className="skill-item">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
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
      </div>
    </>
  )
}

export default App
