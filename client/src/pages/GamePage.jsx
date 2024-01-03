import React, { useEffect, useRef } from 'react';
import NavbarGame from '../components/NavbarGame';

export default function IndexPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = 800;
    canvas.height = 600;

    // Tennis court background
    ctx.fillStyle = '#90EE90'; // Light green color for the court
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Net
    ctx.beginPath();
    ctx.strokeStyle = '#FFFFFF'; // White color for the net
    ctx.lineWidth = 2;
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    // Baseline
    ctx.beginPath();
    ctx.strokeStyle = '#FFFFFF'; // White color for the baseline
    ctx.lineWidth = 4;
    ctx.moveTo(0, canvas.height - 30);
    ctx.lineTo(canvas.width, canvas.height - 30);
    ctx.stroke();

    // Service boxes
    ctx.beginPath();
    ctx.strokeStyle = '#FFFFFF'; // White color for the service boxes
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]); // Dashed line
    ctx.moveTo(canvas.width / 2, canvas.height - 30);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();

    // Pong ball
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dx = 2;
    let dy = -2;
    const ballRadius = 10;

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF'; // White color for the ball
      ctx.fill();
      ctx.closePath();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Tennis court background
      ctx.fillStyle = '#90EE90'; // Light green color for the court
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Net
      ctx.beginPath();
      ctx.strokeStyle = '#FFFFFF'; // White color for the net
      ctx.lineWidth = 2;
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();

      // Baseline
      ctx.beginPath();
      ctx.strokeStyle = '#FFFFFF'; // White color for the baseline
      ctx.lineWidth = 4;
      ctx.moveTo(0, canvas.height - 30);
      ctx.lineTo(canvas.width, canvas.height - 30);
      ctx.stroke();

      // Service boxes
      ctx.beginPath();
      ctx.strokeStyle = '#FFFFFF'; // White color for the service boxes
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 10]); // Dashed line
      ctx.moveTo(canvas.width / 2, canvas.height - 30);
      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      ctx.stroke();

      drawBall();

      // Ball movement logic
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
      }

      x += dx;
      y += dy;
    };

    const animate = () => {
      update();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <NavbarGame />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', position: 'relative' }}>
        <img
          src="tennis_court_image_url_here" // Replace with your tennis court image URL
          alt="Tennis Court"
          style={{ position: 'absolute', zIndex: '-1', width: '100%', height: '100%' }}
        />
        <canvas
          ref={canvasRef}
          style={{ border: '1px solid #000000' }}
        />
      </div>
    </div>
  );
}