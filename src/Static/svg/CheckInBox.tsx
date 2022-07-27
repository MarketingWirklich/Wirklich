import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} {...props}>
    <g data-name="Grupo 1215">
      <g data-name="Grupo 1211" transform="translate(-1025 -1626)">
        <rect
          data-name="Ret\xE2ngulo 820"
          width={54}
          height={54}
          rx={5}
          transform="translate(1025 1626)"
          fill="rgba(196,38,35,0.13)"
        />
        <g
          data-name="Grupo 1208"
          transform="translate(1032.233 1633.233)"
          fill="none"
        >
          <path data-name="Caminho 2214" d="M0 0h39.533v39.533H0Z" />
          <rect
            data-name="Ret\xE2ngulo 816"
            width={26.414}
            height={26.414}
            rx={2}
            transform="translate(6.677 6.677)"
            stroke="#c42623"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <path
            data-name="Caminho 2215"
            d="m14.825 19.766 3.294 3.294 6.589-6.588"
            stroke="rgba(196,38,35,0.45)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
