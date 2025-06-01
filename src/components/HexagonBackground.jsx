import { useEffect, useRef } from "react";

export default function ShapeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const shapes = [];
    const numShapes = 120;
    const shapeTypes = ["circle", "square", "triangle", "pentagon", "hexagon"];

    for (let i = 0; i < numShapes; i++) {
      shapes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 10 + Math.random() * 20,
        speed: 0.3 + Math.random() * 1,
        opacity: 0.05 + Math.random() * 0.15,
        isSky: Math.random() < 0.15,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        wobble: Math.random() * 2,
      });
    }

    const drawPolygon = (x, y, sides, size, rotation) => {
      const angleStep = (Math.PI * 2) / sides;
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = angleStep * i + rotation;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawShape = (shape) => {
      const { x, y, size, opacity, isSky, type, rotation } = shape;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const strokeColor = isSky
        ? `rgba(56, 189, 248, ${opacity + 0.1})`
        : `rgba(180,180,180,${opacity + 0.1})`;
      const fillColor = isSky
        ? `rgba(56, 189, 248, ${opacity})`
        : `rgba(100,100,100,${opacity})`;

      ctx.strokeStyle = strokeColor;
      ctx.fillStyle = fillColor;
      ctx.lineWidth = 1;

      switch (type) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, 2 * Math.PI);
          break;
        case "square":
          ctx.beginPath();
          ctx.rect(-size, -size, size * 2, size * 2);
          break;
        case "triangle":
          drawPolygon(0, 0, 3, size, 0);
          break;
        case "pentagon":
          drawPolygon(0, 0, 5, size, 0);
          break;
        case "hexagon":
          drawPolygon(0, 0, 6, size, 0);
          break;
        default:
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, 2 * Math.PI);
      }

      ctx.stroke();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let shape of shapes) {
        shape.y += shape.speed;
        shape.rotation += shape.rotationSpeed;
        shape.x += Math.sin(shape.y / 30) * shape.wobble * 0.2; // subtle wobble
        shape.opacity = 0.05 + Math.abs(Math.sin(shape.y / 100)) * 0.1; // pulsing

        if (shape.y > canvas.height + shape.size) {
          shape.y = -shape.size;
          shape.x = Math.random() * canvas.width;
          shape.isSky = Math.random() < 0.15;
          shape.type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        }

        drawShape(shape);
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
