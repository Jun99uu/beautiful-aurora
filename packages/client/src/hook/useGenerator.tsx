import { Color } from "@/assets/colors";
import { colorState } from "@/store/colorAtom";
import { Size, sizeState } from "@/store/sizeAtom";
import { useAtom } from "jotai";
import { useState } from "react";

/** HTML & CSS */
const firstGenerator = (colors: Color, size: Size) => {
  const transparent = colors.transparent / 100;

  const newlit = `
    ✨ Below is HTML code! (Remove this row)
    <div class="canvas-wrapper">
        <div class='circle circle-0' />
        <div class='circle circle-1' />
        <div class='circle circle-2' />
        <div class='circle circle-3' />
    </div>

    ✨ Below is CSS code! (Remove this row)
    .canvas-wrapper {
        width: ${size.width}px;
        height: ${size.height}px;
        background-color: ${colors.bg};
        opacity: ${transparent};
        position: relative;
        overflow: hidden;
      }
      
      .canvas-wrapper .aurora-wrapper {
        width: 100%;
        height: 100%;
        background: rgba(194, 194, 194, 0.131);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      .canvas-wrapper .circle {
        width: 150%;
        aspect-ratio: 0.8;
        margin: 0px auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      
      .canvas-wrapper .circle.circle-0 {
        background: radial-gradient(ellipse, ${colors.color[0]}, transparent, transparent),
        animation: moveAround0 16s ease-in-out infinite;
      }
      
      .canvas-wrapper .circle.circle-1 {
        background: radial-gradient(ellipse, ${colors.color[1]}, transparent, transparent),
        animation: moveAround1 16s ease-in-out infinite;
      }
      
      .canvas-wrapper .circle.circle-2 {
        background: radial-gradient(ellipse, ${colors.color[2]}, transparent, transparent),
        animation: moveAround2 16s ease-in-out infinite;
      }
      
      .canvas-wrapper .circle.circle-3 {
        background: radial-gradient(ellipse, ${colors.color[3]}, transparent, transparent),
        animation: moveAround3 16s ease-in-out infinite;
      }
      
      @keyframes moveAround0 {
        0% {
          transform: translate(-40%, -30%);
        }
        50% {
          transform: translate(0%, 20%);
        }
        100% {
          transform: translate(-40%, -30%);
        }
      }
      
      @keyframes moveAround1 {
        0% {
          transform: translate(-70%, -70%);
        }
        50% {
          transform: translate(-40%, -40%);
        }
        100% {
          transform: translate(-70%, -70%);
        }
      }
      
      @keyframes moveAround2 {
        0% {
          transform: translate(30%, -80%);
        }
        50% {
          transform: translate(-30%, -50%);
        }
        100% {
          transform: translate(30%, -80%);
        }
      }
      
      @keyframes moveAround3 {
        0% {
          transform: translate(-25%, 0%);
        }
        50% {
          transform: translate(-76%, -45%);
        }
        100% {
          transform: translate(-25%, 0%);
        }
      }
      
    `;

  return newlit;
};

/** React & SCSS */
const secondGenerator = (colors: Color, size: Size) => {
  const transparent = colors.transparent / 100;

  const newlit = `
      ✨ Below is React(typescript) code! (Remove this row)
        import "./canvas.scss";

        const Canvas = () => {
            return (
                <div className="canvas-wrapper">
                    <div className='circle circle-0' />
                    <div className='circle circle-1' />
                    <div className='circle circle-2' />
                    <div className='circle circle-3' />
                </div>
            );
        };

        export default Canvas;
  
      ✨ Below is SCSS code! (Remove this row)
      .canvas-wrapper {
          width: ${size.width}px;
          height: ${size.height}px;
          background-color: ${colors.bg};
          opacity: ${transparent};
          position: relative;
          overflow: hidden;
        }
        
        .canvas-wrapper .aurora-wrapper {
          width: 100%;
          height: 100%;
          background: rgba(194, 194, 194, 0.131);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .canvas-wrapper .circle {
          width: 150%;
          aspect-ratio: 0.8;
          margin: 0px auto;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        
        .canvas-wrapper .circle.circle-0 {
          background: radial-gradient(ellipse, ${colors.color[0]}, transparent, transparent),
          animation: moveAround0 16s ease-in-out infinite;
        }
        
        .canvas-wrapper .circle.circle-1 {
          background: radial-gradient(ellipse, ${colors.color[1]}, transparent, transparent),
          animation: moveAround1 16s ease-in-out infinite;
        }
        
        .canvas-wrapper .circle.circle-2 {
          background: radial-gradient(ellipse, ${colors.color[2]}, transparent, transparent),
          animation: moveAround2 16s ease-in-out infinite;
        }
        
        .canvas-wrapper .circle.circle-3 {
          background: radial-gradient(ellipse, ${colors.color[3]}, transparent, transparent),
          animation: moveAround3 16s ease-in-out infinite;
        }
        
        @keyframes moveAround0 {
          0% {
            transform: translate(-40%, -30%);
          }
          50% {
            transform: translate(0%, 20%);
          }
          100% {
            transform: translate(-40%, -30%);
          }
        }
        
        @keyframes moveAround1 {
          0% {
            transform: translate(-70%, -70%);
          }
          50% {
            transform: translate(-40%, -40%);
          }
          100% {
            transform: translate(-70%, -70%);
          }
        }
        
        @keyframes moveAround2 {
          0% {
            transform: translate(30%, -80%);
          }
          50% {
            transform: translate(-30%, -50%);
          }
          100% {
            transform: translate(30%, -80%);
          }
        }
        
        @keyframes moveAround3 {
          0% {
            transform: translate(-25%, 0%);
          }
          50% {
            transform: translate(-76%, -45%);
          }
          100% {
            transform: translate(-25%, 0%);
          }
        }
      `;

  return newlit;
};

/** React & emotion(styled) */
const thirdGenerator = (colors: Color, size: Size) => {
  const transparent = colors.transparent / 100;

  const newlit = `
        ✨ Below is React(typescript) code! (Remove this row)
        import styled from '@emotion/styled';
        import { keyframes } from '@emotion/react';
        
        const moveAround0 = keyframes\`
          0% {
            transform: translate(-40%, -30%);
          }
          50% {
            transform: translate(0%, 20%);
          }
          100% {
            transform: translate(-40%, -30%);
          }
        \`;
        
        const moveAround1 = keyframes\`
          0% {
            transform: translate(-70%, -70%);
          }
          50% {
            transform: translate(-40%, -40%);
          }
          100% {
            transform: translate(-70%, -70%);
          }
        \`;
        
        const moveAround2 = keyframes\`
          0% {
            transform: translate(30%, -80%);
          }
          50% {
            transform: translate(-30%, -50%);
          }
          100% {
            transform: translate(30%, -80%);
          }
        \`;
        
        const moveAround3 = keyframes\`
          0% {
            transform: translate(-25%, 0%);
          }
          50% {
            transform: translate(-76%, -45%);
          }
          100% {
            transform: translate(-25%, 0%);
          }
        \`;
        
        const CanvasWrapper = styled.div\`
          width: ${size.width}px;
          height: ${size.height}px;
          background-color: ${colors.bg};
          opacity: ${transparent};
          position: relative;
          overflow: hidden;
        
          .aurora-wrapper {
            width: 100%;
            height: 100%;
            background: rgba(194, 194, 194, 0.131);
            backdrop-filter: blur(20px);
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        
          .circle {
            width: 150%;
            aspect-ratio: 0.8;
            margin: 0 auto;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            &.circle-0 {
              background: radial-gradient(ellipse, ${colors.color[0]}, transparent);
              animation: \${moveAround0} 16s ease-in-out infinite;
            }
            &.circle-1 {
              background: radial-gradient(ellipse, ${colors.color[1]}, transparent);
              animation: \${moveAround1} 16s ease-in-out infinite;
            }
            &.circle-2 {
              background: radial-gradient(ellipse, ${colors.color[2]}, transparent);
              animation: \${moveAround2} 16s ease-in-out infinite;
            }
            &.circle-3 {
              background: radial-gradient(ellipse, ${colors.color[3]}, transparent);
              animation: \${moveAround3} 16s ease-in-out infinite;
            }
          }
        \`;
        
        const Canvas = () => {
          return (
            <CanvasWrapper>
              <div className='circle circle-0' />
              <div className='circle circle-1' />
              <div className='circle circle-2' />
              <div className='circle circle-3' />
            </CanvasWrapper>
          );
        };
        
        export default Canvas;
        `;

  return newlit;
};

/** React & emotion(styled) */
const fourthGenerator = (colors: Color, size: Size) => {
  const transparent = colors.transparent / 100;

  const newlit = `
          ✨ Below is React(typescript) code! (Remove this row)
          import { css, keyframes } from '@emotion/react';
          
          const moveAround0 = keyframes\`
            0% {
              transform: translate(-40%, -30%);
            }
            50% {
              transform: translate(0%, 20%);
            }
            100% {
              transform: translate(-40%, -30%);
            }
          \`;
          
          const moveAround1 = keyframes\`
            0% {
              transform: translate(-70%, -70%);
            }
            50% {
              transform: translate(-40%, -40%);
            }
            100% {
              transform: translate(-70%, -70%);
            }
          \`;
          
          const moveAround2 = keyframes\`
            0% {
              transform: translate(30%, -80%);
            }
            50% {
              transform: translate(-30%, -50%);
            }
            100% {
              transform: translate(30%, -80%);
            }
          \`;
          
          const moveAround3 = keyframes\`
            0% {
              transform: translate(-25%, 0%);
            }
            50% {
              transform: translate(-76%, -45%);
            }
            100% {
              transform: translate(-25%, 0%);
            }
          \`;
          
          const canvasWrapperStyle = css\`
            width: ${size.width}px;
            height: ${size.height}px;
            background-color: ${colors.bg};
            opacity: ${transparent};
            position: relative;
            overflow: hidden;
          
            .aurora-wrapper {
              width: 100%;
              height: 100%;
              background: rgba(194, 194, 194, 0.131);
              backdrop-filter: blur(20px);
              position: absolute;
              z-index: 1;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          
            .circle {
              width: 150%;
              aspect-ratio: 0.8;
              margin: 0 auto;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              &.circle-0 {
                background: radial-gradient(ellipse, ${colors.color[0]}, transparent);
                animation: \${moveAround0} 16s ease-in-out infinite;
              }
              &.circle-1 {
                background: radial-gradient(ellipse, ${colors.color[1]}, transparent);
                animation: \${moveAround1} 16s ease-in-out infinite;
              }
              &.circle-2 {
                background: radial-gradient(ellipse, ${colors.color[2]}, transparent);
                animation: \${moveAround2} 16s ease-in-out infinite;
              }
              &.circle-3 {
                background: radial-gradient(ellipse, ${colors.color[3]}, transparent);
                animation: \${moveAround3} 16s ease-in-out infinite;
              }
            }
          \`;
          
          const Canvas = () => {
            return (
              <div css={canvasWrapperStyle}>
                <div className='circle circle-0' />
                <div className='circle circle-1' />
                <div className='circle circle-2' />
                <div className='circle circle-3' />
              </div>
            );
          };
          
          export default Canvas;
          `;

  return newlit;
};

/**
 * 0 : HTML & CSS
 * 1 : React & SCSS
 * 2 : React & emotion(styled)
 * 3 : React & emotion(css)
 */
export const useGenerator = () => {
  /** size.width / size.height 둘다 숫자로 이루어진 string. ex. "100", "200"... */
  const [size] = useAtom(sizeState);
  /** colors.color / colors.bg / colors.transparent */
  const [colors] = useAtom(colorState);

  const copy = (type: number) => {
    switch (type) {
      case 0:
        navigator.clipboard.writeText(firstGenerator(colors, size));
        break;
      case 1:
        navigator.clipboard.writeText(secondGenerator(colors, size));
        break;
      case 2:
        navigator.clipboard.writeText(thirdGenerator(colors, size));
        break;
      case 3:
        navigator.clipboard.writeText(fourthGenerator(colors, size));
        break;
    }
  };

  return { copy };
};
