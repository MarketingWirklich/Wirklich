import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={43.4} height={43.4} {...props}>
    <g data-name="Grupo 3207" fill="none">
      <g data-name="Ret\xE2ngulo 867" stroke="#c42623" opacity={0.45}>
        <rect width={43.4} height={43.4} rx={5} stroke="none" />
        <rect x={0.5} y={0.5} width={42.4} height={42.4} rx={4.5} />
      </g>
      <g data-name="Grupo 3206">
        <path data-name="Caminho 2253" d="M6.595 6.595h30.21v30.21H6.595Z" />
        <path
          data-name="Caminho 2254"
          d="M12.868 30.345h17.664m2.506-2.517a2.48 2.48 0 0 0-.184-.92l-8.959-15.313a2.535 2.535 0 0 0-4.416 0l-1.036 1.78m-1.855 3.162-6.067 10.37a2.48 2.48 0 0 0 .209 2.283 2.528 2.528 0 0 0 2 1.154"
          stroke="#c42623"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Caminho 2255"
          d="M11.345 10.345 23.41 22.41l10.645 10.645"
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
