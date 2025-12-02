import { useEffect, useRef } from 'react';

export function TwinkleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    const starCount = 150;

    // Check if dark mode
    const isDark = () => document.documentElement.classList.contains('dark');

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      growing: boolean;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.growing = Math.random() > 0.5;
      }

      update() {
        if (this.growing) {
          this.opacity += this.twinkleSpeed;
          if (this.opacity >= 1) {
            this.opacity = 1;
            this.growing = false;
          }
        } else {
          this.opacity -= this.twinkleSpeed;
          if (this.opacity <= 0.1) {
            this.opacity = 0.1;
            this.growing = true;
          }
        }
      }

      draw() {
        if (!ctx) return;
        
        const dark = isDark();
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        
        if (dark) {
          // Dark theme - bright twinkling stars
          gradient.addColorStop(0, `rgba(56, 189, 248, ${this.opacity})`);
          gradient.addColorStop(0.5, `rgba(125, 211, 252, ${this.opacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
        } else {
          // Light theme - subtle twinkling stars
          gradient.addColorStop(0, `rgba(14, 165, 233, ${this.opacity * 0.6})`);
          gradient.addColorStop(0.5, `rgba(56, 189, 248, ${this.opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add sparkle effect for some stars
        if (this.opacity > 0.7 && Math.random() > 0.97) {
          ctx.strokeStyle = dark 
            ? `rgba(186, 230, 253, ${this.opacity * 0.8})`
            : `rgba(14, 165, 233, ${this.opacity * 0.4})`;
          ctx.lineWidth = 0.5;
          
          // Draw cross sparkle
          ctx.beginPath();
          ctx.moveTo(this.x - this.size * 3, this.y);
          ctx.lineTo(this.x + this.size * 3, this.y);
          ctx.moveTo(this.x, this.y - this.size * 3);
          ctx.lineTo(this.x, this.y + this.size * 3);
          ctx.stroke();
        }
      }
    }

    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
      tail: Array<{x: number, y: number, opacity: number}>;

      constructor() {
        // Start from random position at top or sides
        const startSide = Math.random();
        if (startSide > 0.5) {
          this.x = Math.random() * canvas!.width;
          this.y = -50;
        } else {
          this.x = canvas!.width + 50;
          this.y = Math.random() * canvas!.height * 0.3;
        }
        
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 6 + 4;
        this.opacity = 1;
        this.angle = Math.PI / 4 + Math.random() * Math.PI / 6; // Angle between 45 and 75 degrees
        this.tail = [];
      }

      update() {
        // Move the shooting star
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        // Add current position to tail
        this.tail.unshift({ x: this.x, y: this.y, opacity: this.opacity });
        
        // Limit tail length
        if (this.tail.length > 20) {
          this.tail.pop();
        }
        
        // Fade out as it moves
        this.opacity -= 0.01;
      }

      draw() {
        if (!ctx) return;
        const dark = isDark();
        
        // Draw tail
        this.tail.forEach((point, index) => {
          const tailOpacity = point.opacity * (1 - index / this.tail.length);
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, 3
          );
          
          if (dark) {
            gradient.addColorStop(0, `rgba(125, 211, 252, ${tailOpacity})`);
            gradient.addColorStop(0.5, `rgba(56, 189, 248, ${tailOpacity * 0.5})`);
            gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
          } else {
            gradient.addColorStop(0, `rgba(56, 189, 248, ${tailOpacity * 0.8})`);
            gradient.addColorStop(0.5, `rgba(14, 165, 233, ${tailOpacity * 0.4})`);
            gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
          }
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });
        
        // Draw main comet head
        const headGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 5);
        
        if (dark) {
          headGradient.addColorStop(0, `rgba(186, 230, 253, ${this.opacity})`);
          headGradient.addColorStop(0.3, `rgba(125, 211, 252, ${this.opacity})`);
          headGradient.addColorStop(0.6, `rgba(56, 189, 248, ${this.opacity * 0.6})`);
          headGradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
        } else {
          headGradient.addColorStop(0, `rgba(125, 211, 252, ${this.opacity})`);
          headGradient.addColorStop(0.3, `rgba(56, 189, 248, ${this.opacity * 0.8})`);
          headGradient.addColorStop(0.6, `rgba(14, 165, 233, ${this.opacity * 0.5})`);
          headGradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
        }
        
        ctx.fillStyle = headGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      isOffScreen() {
        return this.x > canvas!.width + 100 || 
               this.y > canvas!.height + 100 || 
               this.opacity <= 0;
      }
    }

    function init() {
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    }

    function createShootingStar() {
      // Random chance to create shooting star
      if (Math.random() > 0.98 && shootingStars.length < 3) {
        shootingStars.push(new ShootingStar());
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      
      // Update and draw regular stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      
      // Create new shooting stars occasionally
      createShootingStar();
      
      // Update and draw shooting stars
      shootingStars.forEach((star, index) => {
        star.update();
        star.draw();
        
        // Remove if off screen
        if (star.isOffScreen()) {
          shootingStars.splice(index, 1);
        }
      });
      
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
