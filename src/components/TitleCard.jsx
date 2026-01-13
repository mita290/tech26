// import React from "react";
// import "../assets/TitleCard.css";

// const TitleCard = ({ title = "TECHCRESCENZA", year = "2026" }) => {
//   const lastLetter = title.slice(-1);
//   const rest = title.slice(0, -1);

//   return (
//     <>
//       {/* SVG filters (must exist once in DOM) */}
//       <svg viewBox="0 0 100 100" className="filters-svg">
//         <defs>
//           <circle id="diffuseLightSpot" cx="50%" cy="50%" r="25%" fill="#ea886d" />

//           <filter id="stroke">
//             <feMorphology operator="dilate" radius="1.5" in="SourceGraphic" result="outside" />
//             <feMorphology operator="dilate" radius="2" in="outside" result="thickened" />
//             <feComposite operator="out" in2="SourceGraphic" in="thickened" result="stroke" />
//           </filter>

//           <filter id="bloom">
//             <feGaussianBlur stdDeviation="5" result="blur" />
//             <feBlend in="SourceGraphic" in2="blur" mode="screen" result="bloomed" />
//             <feMerge>
//               <feMergeNode in="bloomed" />
//               <feMergeNode in="blur" />
//             </feMerge>
//           </filter>

//           <filter id="bevel">
//             <feGaussianBlur stdDeviation="1" in="SourceGraphic" result="BLUR" />

//             <feSpecularLighting
//               surfaceScale="1"
//               specularConstant="5"
//               specularExponent="40"
//               lightingColor="#ea886d"
//               in="BLUR"
//               result="SPECULAR"
//             >
//               <fePointLight x="100" y="0" z="400" />
//             </feSpecularLighting>

//             <feSpecularLighting
//               surfaceScale="1"
//               specularConstant="10"
//               specularExponent="50"
//               lightingColor="#ea886d"
//               in="BLUR"
//               result="SPECULAR1"
//             >
//               <fePointLight x="1000" y="0" z="500" />
//             </feSpecularLighting>

//             <feSpecularLighting
//               surfaceScale="1"
//               specularConstant="3"
//               specularExponent="100"
//               lightingColor="#dd7170"
//               in="BLUR"
//               result="SPECULAR2"
//             >
//               <fePointLight x="100" y="100" z="1000" />
//             </feSpecularLighting>

//             <feComposite operator="in" in="SPECULAR" in2="SourceAlpha" />
//             <feComposite operator="in" in="SPECULAR1" in2="SourceAlpha" />
//             <feComposite operator="in" in="SPECULAR2" in2="SourceAlpha" />

//             <feMerge>
//               <feMergeNode in="SourceGraphic" />
//               <feMergeNode in="SPECULAR" />
//               <feMergeNode in="SPECULAR1" />
//               <feMergeNode in="SPECULAR2" />
//             </feMerge>
//           </filter>

//           <filter id="noise" x="0" y="0" width="100%" height="100%">
//             <feFlood floodColor="#808080" result="neutral-gray" />
//             <feTurbulence
//               in="neutral-gray"
//               type="fractalNoise"
//               baseFrequency="0.8"
//               numOctaves="10"
//               stitchTiles="stitch"
//               result="noise"
//             />
//             <feColorMatrix in="noise" type="saturate" values="0" />
//             <feComponentTransfer>
//               <feFuncA type="table" tableValues="0 0 0.2 0" />
//             </feComponentTransfer>
//             <feBlend in="SourceGraphic" mode="soft-light" />
//           </filter>
//         </defs>
//       </svg>

//       <div className="centered">
//         <div className="stranger-things">
//           <hr />
//           <div className="eighties line1">
//             {rest}
//             <span className="last-letter">{lastLetter}</span>
//           </div>
//           <hr className="bottom-line" />
//           <hr className="bottom-line right" />
//           <div className="eighties line2">{year}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TitleCard;

import React from "react";
import "../assets/TitleCard.css";

const TitleCard = ({ title = "TECHCRESCENZA", year = "2026" }) => {
  const lastLetter = title.slice(-1);
  const rest = title.slice(0, -1);

  return (
    <div className="centered">
      <div className="stranger-things">

        <hr />

        <div className="eighties line1">
          {rest}
          <span className="last-letter">{lastLetter}</span>
        </div>

        <hr className="bottom-line" />
        <hr className="bottom-line right" />

        <div className="eighties line2">{year}</div>

      </div>
    </div>
  );
};

export default TitleCard;
