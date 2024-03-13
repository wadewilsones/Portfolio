import React, { useEffect, useState, useRef } from 'react';
import "../styles/Canvas.css"

export const Canvas = () => {
    const canvasRef = useRef(null);

    const [currentColor, setColor] = useState("rgba(94, 100, 121, 0.29)");
    const colors = ["#4F4F4F", "#7C0F0F", "#73699C", "#915EFF"];
  
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
  
        let dots = 30;
        const dotCord = [];
  
        // Generate random coordinates and velocities for dots
        for (let i = 0; i < dots; i++) {
            dotCord.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                dx: (Math.random() - 0.5) * 3,
                dy: (Math.random() - 0.5) * 3
            });
        }
  
        // Function to calculate distance between two points
        const distance = (p1, p2) => {
            let dx = p2.x - p1.x;
            dx *= dx;
            let dy = p2.y - p1.y;
            dy *= dy;
            return Math.sqrt(dx + dy);
        }
  
         /*
  
        const changeColor = () =>{
          let newColor = Math.floor(Math.random() * colors.length);
          setColor(colors[newColor]);
        }
  
  
        setTimeout(() => {
          changeColor()
        }, 3000)
  
        */
        // Function to draw lines between dots
        const drawLines = () => {
            // Clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
  
            // Draw lines between dots
            for (let i = 0; i < dotCord.length; i++) {
                let dot1 = dotCord[i];
                context.beginPath();
                context.arc(dot1.x, dot1.y, 10, 0, Math.PI * 2); // Increase the radius to increase dot size
                context.fillStyle = 'rgba(169, 178, 212, 0.29)';
                context.fill();
                context.closePath();
                for (let j = i + 1; j < dotCord.length; j++) {
                    let dot2 = dotCord[j];
                    const dist = distance(dot1, dot2);
                    if (dist < 400) { // Adjust this value to change the maximum distance for drawing lines
                        context.beginPath();
                        context.moveTo(dot1.x, dot1.y);
                        context.lineTo(dot2.x, dot2.y);
                        context.strokeStyle = currentColor;
                        context.stroke();
                        context.closePath();
                    }
                }
            }
        };
  
        // Function to update dot positions
        const update = () => {
            for (let i = 0; i < dotCord.length; i++) {
                let s = dotCord[i];
                s.x += s.dx;
                s.y += s.dy;
  
                // Reverse velocity when dot hits canvas boundaries
                if (s.x < 0 || s.x > canvas.width) {
                    s.dx *= -1;
                }
                if (s.y < 0 || s.y > canvas.height) {
                    s.dy *= -1;
                }
            }
        }
  
        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
  
            // Draw lines
            drawLines();
  
            // Update dot positions
            update();
        };
  
        // Start animation
        animate();
  
    }, [currentColor]); 
    
  
    
    return(
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} ></canvas>

    )
}