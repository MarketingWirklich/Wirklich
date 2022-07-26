import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Componente 40 \u2013 1"
    xmlns="http://www.w3.org/2000/svg"
    width={43.4}
    height={43.4}
    {...props}
  >
    <g data-name="Ret\xE2ngulo 886" fill="none" stroke="#002137" opacity={0.25}>
      <rect width={43.4} height={43.4} rx={5} stroke="none" />
      <rect x={0.5} y={0.5} width={42.4} height={42.4} rx={4.5} />
    </g>
    <path
      data-name="Icon awesome-youtube"
      d="M34.014 15.492a3.229 3.229 0 0 0-2.272-2.287c-2.005-.54-10.042-.54-10.042-.54s-8.037 0-10.041.541a3.229 3.229 0 0 0-2.272 2.286 33.877 33.877 0 0 0-.537 6.226 33.877 33.877 0 0 0 .537 6.226 3.181 3.181 0 0 0 2.272 2.25c2 .541 10.041.541 10.041.541s8.037 0 10.041-.541a3.181 3.181 0 0 0 2.272-2.25 33.877 33.877 0 0 0 .537-6.226 33.877 33.877 0 0 0-.537-6.226ZM19.072 25.54v-7.643l6.717 3.821-6.717 3.821Z"
      fill="#002137"
    />
  </svg>
)

export default SvgComponent
