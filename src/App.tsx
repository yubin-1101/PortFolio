import { contact, profile, projects, skills } from './data'
import { useState, useEffect } from 'react';
function SkillsSection() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'tools'>('frontend');

  return (
    <div className="skills-tabbed">
      <div className="skills-tabs">
        <button 
          className={`skill-tab ${activeTab === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveTab('frontend')}
        >
          <span className="tab-icon">💻</span> Frontend
        </button>
        <button 
          className={`skill-tab ${activeTab === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveTab('backend')}
        >
          <span className="tab-icon">⚙️</span> Backend
        </button>
        <button 
          className={`skill-tab ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          <span className="tab-icon">🤖</span> AI & Tools
        </button>
      </div>
      
      <div className="skills-tab-content">
        {activeTab === 'frontend' && (
          <div className="skill-grid">
            {skills.core.map((skill) => (
              <div key={skill.name} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
            {skills.ui.map((skill) => (
              <div key={skill.name} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'backend' && (
          <div className="skill-grid">
            {skills.tooling.filter(s => ['PostgreSQL', 'Redis', 'Docker'].includes(s.name)).map((skill) => (
              <div key={skill.name} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'tools' && (
          <div className="skill-grid">
            {skills.tooling.filter(s => ['AWS', 'GitHub Actions', 'Vercel'].includes(s.name)).map((skill) => (
              <div key={skill.name} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);
  const [taglineText, setTaglineText] = useState('');
  const [isTaglineComplete, setIsTaglineComplete] = useState(false);
  const [qrPattern, setQrPattern] = useState<boolean[]>([]);

  // QR 패턴 애니메이션
  useEffect(() => {
    const generatePattern = () => Array.from({ length: 25 }, () => Math.random() > 0.4);
    setQrPattern(generatePattern());
    
    const interval = setInterval(() => {
      setQrPattern(generatePattern());
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  // 터미널 타이핑 효과
  useEffect(() => {
    const lines = [
      '$ npm run portfolio',
      '> Compiling developer.tsx...',
      '> Building skills module... ✓',
      '> Loading projects... ✓',
      `> Welcome to ${profile.name}'s workspace`,
      '> Ready to deploy 🚀'
    ];
    
    // 첫 번째 라인을 즉시 표시
    setTerminalLines([lines[0]]);
    let currentLine = 1;
    
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // 타이핑 효과
  useEffect(() => {
    const targetText = profile.role;
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setTypewriterText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypewriterComplete(true);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // Tagline 타이핑 효과 (role 완료 후 시작)
  useEffect(() => {
    if (!isTypewriterComplete) return;
    
    const targetText = profile.tagline;
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setTaglineText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTaglineComplete(true);
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [isTypewriterComplete]);

  // 스크롤 감지로 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="dev-portfolio">
      {/* 사이드바 - VS Code 스타일 */}
      <aside className="sidebar">
        <div className="sidebar-icons">
          <button 
            className={`sidebar-icon ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollToSection('home')}
            title="Home"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </button>
          <button 
            className={`sidebar-icon ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
            title="About"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </button>
          <button 
            className={`sidebar-icon ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
            title="Skills"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          </button>
          <button 
            className={`sidebar-icon ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
            title="Projects"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
            </svg>
          </button>
          <button 
            className={`sidebar-icon ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
            title="Contact"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
        </div>
        <div className="sidebar-bottom">
          <a href={contact.github} target="_blank" rel="noreferrer" className="sidebar-icon" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </aside>

      {/* 메인 영역 */}
      <main className="main-content">
        {/* 탭 바 */}
        <div className="tab-bar">
          <div className="tabs">
            <button 
              className={`tab ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              <span className="tab-icon">🏠</span>
              index.tsx
            </button>
            <button 
              className={`tab ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              <span className="tab-icon">👤</span>
              about.md
            </button>
            <button 
              className={`tab ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              <span className="tab-icon">⚡</span>
              skills.json
            </button>
            <button 
              className={`tab ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              <span className="tab-icon">📁</span>
              projects/
            </button>
            <button 
              className={`tab ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              <span className="tab-icon">💼</span>
              experience.log
            </button>
            <button 
              className={`tab ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              <span className="tab-icon">📧</span>
              contact.sh
            </button>
          </div>
          <div className="window-controls">
            <span className="control minimize"></span>
            <span className="control maximize"></span>
            <span className="control close"></span>
          </div>
        </div>

        {/* 브레드크럼 */}
        <div className="breadcrumb">
          <span className="path">~/portfolio</span>
          <span className="separator">/</span>
          <span className="current">{activeSection}</span>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="content-area">
          {/* Hero Section */}
          <section id="home" className="section hero-section">
            <div className="hero-main">
              <div className="hero-left">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span className="btn-red"></span>
                      <span className="btn-yellow"></span>
                      <span className="btn-green"></span>
                    </div>
                    <span className="terminal-title">zsh - portfolio</span>
                  </div>
                  <div className="terminal-body">
                    {terminalLines.map((line, idx) => (
                      <div key={idx} className="terminal-line">
                        <span className={line && typeof line === 'string' && (line.startsWith('>') || line.startsWith('$')) ? 'command' : 'output'}>{line || ''}</span>
                      </div>
                    ))}
                    {isTyping && <span className="cursor">▋</span>}
                  </div>
                </div>

                <div className="hero-content">
                  <div className="hero-avatar">
                    <img 
                      src={profile.image || '/placeholder-profile.jpg'} 
                      alt={profile.name}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzFhMWIyNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM3YWE2ZjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5EZXY8L3RleHQ+PC9zdmc+';
                      }}
                    />
                    <div className="status-badge">
                      <span className="status-dot"></span>
                      Available
                    </div>
                  </div>
                  <div className="hero-info">
                    <h1 className="glitch" data-text={profile.name}>{profile.name}</h1>
                    <p className="role">
                      <span className="keyword">const</span> role = <span className="string">"{typewriterText}"</span>
                      {!isTypewriterComplete && <span className="typing-cursor">|</span>};
                    </p>
                    <p className="tagline">
                      {taglineText}
                      {isTypewriterComplete && !isTaglineComplete && <span className="typing-cursor">|</span>}
                    </p>
                    <div className="hero-meta">
                      <span className="meta-item">
                        <span className="meta-icon">📍</span>
                        {profile.location}
                      </span>
                      
                    </div>
                    <div className="hero-actions">
                      <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                        <span className="btn-icon">{'{'}</span>
                        View Projects
                        <span className="btn-icon">{'}'}</span>
                      </button>
                      <a href={`mailto:${contact.email}`} className="btn-secondary">
                        <span className="btn-icon">$</span>
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 우측 명함 카드 - 현재 관심사 */}
              <div className="hero-right">
                <div className="business-card">
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div className="card-header">
                      <div className="card-logo">
                        <span className="logo-bracket">{'<'}</span>
                        <span className="logo-text">DEV</span>
                        <span className="logo-bracket">{'/>'}</span>
                      </div>
                      <div className="card-qr">
                        <div className="qr-pattern">
                          {qrPattern.map((filled, i) => (
                            <div key={i} className={`qr-cell ${filled ? 'filled' : ''}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-section-title">
                      <span className="section-icon">🎯</span>
                      Current Focus
                    </div>
                    <div className="card-focus-list">
                      <div className="focus-item">
                        <span className="focus-bullet">▸</span>
                        <span className="focus-text">Backend Architecture</span>
                      </div>
                      <div className="focus-item">
                        <span className="focus-bullet">▸</span>
                        <span className="focus-text">System Design</span>
                      </div>
                      <div className="focus-item">
                        <span className="focus-bullet">▸</span>
                        <span className="focus-text">Cloud Infrastructure</span>
                      </div>
                    </div>

                    <div className="card-divider"></div>

                    <div className="card-learning">
                      <div className="learning-row">
                        <span className="learning-icon">🔥</span>
                        <span className="learning-label">Learning</span>
                        <span className="learning-value">Kubernetes</span>
                      </div>
                      <div className="learning-row">
                        <span className="learning-icon">📖</span>
                        <span className="learning-label">Reading</span>
                        <span className="learning-value">Clean Architecture</span>
                      </div>
                      <div className="learning-row">
                        <span className="learning-icon">🛠️</span>
                        <span className="learning-label">Building</span>
                        <span className="learning-value">Portfolio Site</span>
                      </div>
                    </div>

                    <div className="card-divider"></div>

                    <div className="card-footer">
                      <span className="card-motto">"꾸준히 성장하는 개발자"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Section */}
          <section id="about" className="section">
            <div className="section-header">
              <span className="line-number">01</span>
              <h2>
                <span className="comment">{'// '}</span>
                About Me
              </h2>
            </div>
            <div className="about-content">
              <div className="code-block">
                <div className="code-content">
                  <div className="code-line"><span className="line-num">1</span><span className="keyword">class</span> <span className="class-name">AboutMe</span> {'{'}</div>
                  <div className="code-line"><span className="line-num">2</span><span className="property">  stack</span> = [<span className="string">"React"</span>, <span className="string">"Supabase"</span>, <span className="string">"TypeScript"</span>];</div>
                  <div className="code-line"><span className="line-num">3</span><span className="property">  tools</span> = [<span className="string">"Claude Code"</span>, <span className="string">"Cursor"</span>];</div>
                  <div className="code-line"><span className="line-num">4</span><span className="property">  style</span> = <span className="string">"Vibe Coding"</span>;</div>
                  <div className="code-line"><span className="line-num">5</span></div>
                  <div className="code-line"><span className="line-num">6</span><span className="keyword">  description</span>() {'{'}</div>
                  {profile.about.map((paragraph, idx) => (
                    <div className="code-line" key={idx}>
                      <span className="line-num">{7 + idx}</span>
                      <span className="comment">// {paragraph}</span>
                    </div>
                  ))}
                  <div className="code-line"><span className="line-num">{7 + profile.about.length}</span>{'}'}</div>
                  <div className="code-line"><span className="line-num">{8 + profile.about.length}</span>{'}'}</div>
                </div>
              </div>
            </div>
            <div className="about-tags">
              <span className="tag tag-primary">React</span>
              <span className="tag tag-primary">Supabase</span>
              <span className="tag tag-primary">TypeScript</span>
              <span className="tag tag-accent">Claude Code</span>
              <span className="tag tag-accent">Cursor</span>
              <span className="tag tag-highlight">Vibe Coding</span>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <div className="section-header">
              <span className="line-number">02</span>
              <h2>
                <span className="comment">{'// '}</span>
                Projects
              </h2>
            </div>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article key={project.name} className="project-card">
                  <div className="project-header">
                    <div className="project-index">
                      <span className="bracket">[</span>
                      <span className="index">{index}</span>
                      <span className="bracket">]</span>
                    </div>
                    <div className="project-title-area">
                      <h3>{project.name}</h3>
                      <span className="project-period">{project.period}</span>
                    </div>
                    {project.icon && (
                      <img src={project.icon} alt={project.name} className="project-icon" />
                    )}
                  </div>

                  <div className="project-video-wrapper">
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
                        return (
                          <video src={videoUrl} controls className="project-video" preload="metadata" />
                        );
                      })()
                    ) : (
                      <div className="video-placeholder">
                        <span className="placeholder-icon">{'</>'}</span>
                        <span className="placeholder-text">Preview</span>
                      </div>
                    )}
                  </div>

                  <p className="project-summary">{project.summary.split('\n\n')[0]}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={typeof tech === 'string' ? tech : (tech as any).name} className="tech-tag">
                        {typeof tech === 'string' ? tech : (tech as any).name}
                      </span>
                    ))}
                  </div>

                  <div className="project-impact">
                    <span className="impact-icon">📈</span>
                    <span className="impact-text">{project.impact}</span>
                  </div>

                  <div className="project-actions">
                    <button 
                      className="action-btn details"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>{'{ }'}</span> Details
                    </button>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="action-btn demo"
                    >
                      <span>→</span> Live Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section">
            <div className="section-header">
              <span className="line-number">03</span>
              <h2>
                <span className="comment">{'// '}</span>
                Tech Stack
              </h2>
            </div>
            
            <SkillsSection />
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <div className="section-header">
              <span className="line-number">04</span>
              <h2>
                <span className="comment">{'// '}</span>
                Contact
              </h2>
            </div>
            
            <div className="contact-terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn-red"></span>
                  <span className="btn-yellow"></span>
                  <span className="btn-green"></span>
                </div>
                <span className="terminal-title">contact.sh</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">./send_message.sh</span>
                </div>
                <div className="terminal-line output">
                  <span>새로운 기회나 협업에 대해 이야기하고 싶으신가요?</span>
                </div>
                <div className="terminal-line output">
                  <span>언제든지 연락해주세요!</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">cat contact_info.json</span>
                </div>
              </div>
            </div>

            <div className="contact-links">
              <a href={`mailto:${contact.email}`} className="contact-card">
                <div className="contact-icon">📧</div>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{contact.email}</span>
                </div>
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-icon">🐙</div>
                <div className="contact-info">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">@binss-0124</span>
                </div>
              </a>
              <a href={contact.linkedIn} target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-icon">💼</div>
                <div className="contact-info">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">kimfolio</span>
                </div>
              </a>
              <a href={contact.resume} target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-icon">📄</div>
                <div className="contact-info">
                  <span className="contact-label">Resume</span>
                  <span className="contact-value">Download CV</span>
                </div>
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-content">
              <span className="footer-text">
                <span className="comment">{'/* '}</span>
                © {new Date().getFullYear()} {profile.name}. Built with React + TypeScript
                <span className="comment">{' */'}</span>
              </span>
            </div>
          </footer>
        </div>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="terminal-buttons">
                <span className="btn-red" onClick={() => setSelectedProject(null)}></span>
                <span className="btn-yellow"></span>
                <span className="btn-green"></span>
              </div>
              <span className="modal-title">{selectedProject.name}.md</span>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3># {selectedProject.name}</h3>
                <p className="modal-period">📅 {selectedProject.period}</p>
              </div>

              <div className="modal-section">
                <h4>## 설명</h4>
                <p>{selectedProject.summary.split('\n\n')[0]}</p>
              </div>

              {selectedProject.summary.includes('|') && (
                <div className="modal-section test-accounts">
                  <h4>## 테스트 계정</h4>
                  <div className="accounts-grid">
                    {selectedProject.summary.split('\n').slice(2).map((line, idx) => {
                      const [role, credentials] = line.split(' - ');
                      const [email, password] = credentials?.split(' | ') || ['', ''];
                      return (
                        <div key={idx} className="account-item">
                          <span className="account-role">{role}</span>
                          <code>{email}</code>
                          <code className="password">{password}</code>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {(selectedProject as any).features && (
                <div className="modal-section">
                  <h4>## 주요 기능</h4>
                  <ul className="features-list">
                    {(selectedProject as any).features.map((feature: string, idx: number) => (
                      <li key={idx}>
                        <span className="feature-bullet">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-section">
                <h4>## 영향도</h4>
                <div className="impact-box">
                  <span className="impact-icon">📊</span>
                  {selectedProject.impact}
                </div>
              </div>

              <div className="modal-section">
                <h4>## 기술 스택</h4>
                <div className="tech-tags">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {typeof tech === 'string' ? tech : (tech as any)?.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="modal-btn primary"
                >
                  🔗 라이브 데모
                </a>
                <button 
                  className="modal-btn secondary"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕ 닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
