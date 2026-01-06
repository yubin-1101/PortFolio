import { useEffect, useState, useRef } from 'react';
import './DynamicBackground.css';

// 파티클 타입 정의
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  opacity: number;
}

const NUM_PARTICLES = 18;
const PARTICLE_SIZE = 32;
const PARTICLE_COLORS = [
  '#f8fafc', // 거의 흰색
  '#f0f9ff', // 밝은 파스텔
  '#fffde4', // 밝은 노랑
];

const DynamicBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  // 파스텔톤 원 위치 및 속도 생성
  const generateParticle = (): Particle => {
    const angle = Math.random() * 2 * Math.PI;
    const speed = 0.15 + Math.random() * 0.25;
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      size: PARTICLE_SIZE * (0.7 + Math.random() * 0.6),
      opacity: 0.08 + Math.random() * 0.08,
    };
  };

  useEffect(() => {
    setParticles(Array.from({ length: NUM_PARTICLES }, generateParticle));
    const handleResize = () => {
      setParticles(Array.from({ length: NUM_PARTICLES }, generateParticle));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setParticles(prev => prev.map(p => {
        let newX = p.x + p.vx;
        let newY = p.y + p.vy;
        // 경계 반사
        if (newX < 0 || newX > window.innerWidth) p.vx *= -1;
        if (newY < 0 || newY > window.innerHeight) p.vy *= -1;
        return { ...p, x: newX, y: newY };
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="dynamic-background-container">
      <svg ref={svgRef} className="dynamic-svg" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        {particles.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.size / 2}
            fill={p.color}
            opacity={p.opacity}
            style={{ filter: 'blur(24px)' }}
          />
        ))}
      </svg>
    </div>
  );
};

export default DynamicBackground;
