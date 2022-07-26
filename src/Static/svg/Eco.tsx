import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={43.4} height={43.4} {...props}>
    <g data-name="Grupo 3208">
      <g data-name="Ret\xE2ngulo 866" fill="none" stroke="rgba(0,163,255,0.45)">
        <rect width={43.4} height={43.4} rx={5} stroke="none" />
        <rect x={0.5} y={0.5} width={42.4} height={42.4} rx={4.5} />
      </g>
      <g data-name="Grupo 3204" fill="rgba(0,0,0,0)">
        <path data-name="Caminho 2249" d="M6.595 6.596h30.208v30.208H6.595Z" />
        <path
          data-name="Caminho 2250"
          d="m21.699 27.994-2.517 2.517 2.517 2.517m-2.517-2.517H30.51a2.517 2.517 0 0 0 2.2-3.461l-.692-1.259"
          stroke="#00a3ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Caminho 2251"
          d="m17.341 20.443-.924-3.44-3.438.921m3.438-.921-5.664 9.81a2.517 2.517 0 0 0 1.898 3.636l1.435.032"
          stroke="#00a3ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Caminho 2252"
          d="m26.057 20.443 3.44.92.922-3.438m-.921 3.438-5.664-9.81a2.517 2.517 0 0 0-4.098-.175l-.745 1.227"
          stroke="#00a3ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
