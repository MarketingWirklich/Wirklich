import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} {...props}>
    <g data-name="Grupo 1212" transform="translate(-1385 -1626)">
      <rect
        data-name="Ret\xE2ngulo 821"
        width={54}
        height={54}
        rx={5}
        transform="translate(1385 1626)"
        fill="rgba(196,38,35,0.13)"
      />
      <g
        data-name="Grupo 1174"
        transform="translate(1392.039 1633.039)"
        fill="none"
      >
        <path data-name="Caminho 2177" d="M0 0h39.922v39.922H0Z" />
        <path
          data-name="Caminho 2178"
          d="M6.654 21.625a13.307 13.307 0 0 1 11.644 11.644 9.981 9.981 0 0 0 4.99-8.317 14.971 14.971 0 0 0 9.981-13.308 4.99 4.99 0 0 0-4.991-4.99 14.971 14.971 0 0 0-13.307 9.981 9.981 9.981 0 0 0-8.317 4.99"
          stroke="#c42623"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Caminho 2179"
          d="M11.644 23.288a9.981 9.981 0 0 0-4.99 9.981 9.981 9.981 0 0 0 9.981-4.99"
          stroke="rgba(196,38,35,0.45)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <circle
          data-name="Elipse 7"
          cx={1.979}
          cy={1.979}
          r={1.979}
          transform="translate(23.088 12.877)"
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
