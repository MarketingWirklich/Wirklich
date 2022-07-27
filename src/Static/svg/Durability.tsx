import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={43.4} height={43.4} {...props}>
    <g data-name="Grupo 3218">
      <g data-name="Grupo 3198">
        <g data-name="Grupo 3150">
          <g
            data-name="Ret\xE2ngulo 818"
            fill="none"
            stroke="rgba(196,38,35,0.45)"
          >
            <rect width={43.4} height={43.4} rx={5} stroke="none" />
            <rect x={0.5} y={0.5} width={42.4} height={42.4} rx={4.5} />
          </g>
        </g>
      </g>
      <g data-name="Grupo 3202" transform="translate(6.553 6.553)" fill="none">
        <path data-name="Caminho 2246" d="M0 0h30.295v30.295H0Z" />
        <circle
          data-name="Elipse 10"
          cx={11.143}
          cy={11.143}
          r={11.143}
          transform="translate(3.876 3.876)"
          stroke="#c42623"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Caminho 2247"
          d="M15.147 8.836v6.311l3.787 3.789"
          stroke="rgba(196,38,35,0.45)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
