import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} {...props}>
    <g data-name="Grupo 3337" transform="translate(-1548 -852.5)">
      <rect
        data-name="Ret\xE2ngulo 787"
        width={54}
        height={54}
        rx={5}
        transform="translate(1548 852.5)"
        fill="#cce8d0"
      />
      <g data-name="Grupo 3224" fill="none">
        <path
          data-name="Caminho 2230"
          d="M1559.415 863.915h31.17v31.17h-31.17Z"
        />
        <g
          data-name="Grupo 3259"
          stroke="#038a16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path
            data-name="Caminho 2231"
            d="M1565.909 891.188c.649-5.844 3.247-10.387 9.091-12.987"
          />
          <path
            data-name="Caminho 2232"
            d="M1571.106 887.292c8.076 0 13.637-4.27 14.286-15.585v-2.597h-5.215c-11.689 0-15.571 5.195-15.585 11.689a8.394 8.394 0 0 0 2.6 6.494h3.9Z"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
