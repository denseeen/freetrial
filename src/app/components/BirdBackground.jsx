"use client";

import React from "react";

export default function BirdBackground() {
  return (
    <>
      <div id="background-wrap">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`x${i + 1}`}>
            <div className="bird"><span className="beak"></span></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        #background-wrap {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: -1;
          pointer-events: none;
        }

        .x1, .x2, .x3, .x4, .x5 {
          position: absolute;
          top: 10%;
          left: -200px;
        }

        .x1 { animation: animateBird 30s linear infinite; top: 10%; transform: scale(1); }
        .x2 { animation: animateBird 20s linear infinite; top: 20%; transform: scale(0.8); }
        .x3 { animation: animateBird 25s linear infinite; top: 30%; transform: scale(0.6); }
        .x4 { animation: animateBird 35s linear infinite; top: 50%; transform: scale(1); }
        .x5 { animation: animateBird 40s linear infinite; top: 60%; transform: scale(0.7); }

        .bird {
          background: white;
          height: 80px;
          width: 80px;
          border-radius: 50%;
          position: relative;
        }

        .bird::before {
          content: "";
          position: absolute;
          background: #ccc;
          border-radius: 50%;
          height: 20px;
          width: 30px;
          left: 15px;
          bottom: 10px;
          animation: wing 0.3s ease-in-out infinite alternate;
        }

        .bird::after {
          content: "";
          position: absolute;
          background: white;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          box-shadow: 5px 10px 0 #555 inset;
          right: 15px;
          top: 20px;
        }

        .beak::before, .beak::after {
          content: "";
          position: absolute;
          z-index: -1;
        }

        .beak::before {
          border-bottom: 15px solid #ffde00;
          border-right: 15px solid transparent;
          right: -5px;
          top: 20px;
        }

        .beak::after {
          border-top: 15px solid #ff9200;
          border-right: 15px solid transparent;
          right: -5px;
          top: 35px;
        }

        @keyframes animateBird {
          0% { left: -200px; }
          100% { left: 100vw; }
        }

        @keyframes wing {
          0% { bottom: 10px; }
          100% { bottom: 20px; }
        }
      `}</style>
    </>
  );
}
