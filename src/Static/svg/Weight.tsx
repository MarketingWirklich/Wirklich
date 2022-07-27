import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={43.4} height={43.4} {...props}>
    <g data-name="Grupo 3209" fill="none">
      <g data-name="Ret\xE2ngulo 818" stroke="rgba(196,38,35,0.45)">
        <rect width={43.4} height={43.4} rx={5} stroke="none" />
        <rect x={0.5} y={0.5} width={42.4} height={42.4} rx={4.5} />
      </g>
      <g data-name="Grupo 3203">
        <path data-name="Caminho 2248" d="M6.553 6.553h30.293v30.293H6.553Z" />
        <path
          data-name="Linha 48"
          stroke="rgba(196,38,35,0.45)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.026 31.847h20.692"
        />
        <path
          data-name="Linha 49"
          stroke="#c42623"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21.401 24.073V11.076"
        />
        <path
          data-name="Linha 50"
          stroke="#c42623"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m21.372 24.003 4.999-4.999"
        />
        <path
          data-name="Linha 51"
          stroke="#c42623"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m21.431 24.003-4.999-4.999"
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
