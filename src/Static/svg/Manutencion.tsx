import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} {...props}>
    <g data-name="Grupo 3337" transform="translate(-1372.518 -1887)">
      <rect
        data-name="Ret\xE2ngulo 821"
        width={54}
        height={54}
        rx={5}
        transform="translate(1372.518 1887)"
        fill="#cce8d0"
      />
      <g
        data-name="Grupo 3298"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <g data-name="Grupo 3296" stroke="#038a16">
          <path data-name="Linha 61" d="M1392.518 1900.273v28" />
          <path
            data-name="Caminho 2303"
            d="m1397.109 1904.319-4.591-4.591-4.591 4.591"
          />
        </g>
        <g data-name="Grupo 3297" stroke="#71be7c">
          <path data-name="Linha 61" d="M1406.518 1927.728v-28" />
          <path
            data-name="Caminho 2303"
            d="m1411.109 1923.682-4.591 4.591-4.591-4.591"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
