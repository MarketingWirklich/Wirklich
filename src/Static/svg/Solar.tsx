import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43.397}
    height={43.396}
    {...props}
  >
    <g data-name="Grupo 3335" transform="translate(-260 -3562.962)">
      <rect
        data-name="Ret\xE2ngulo 818"
        width={43.397}
        height={43.397}
        rx={5}
        transform="translate(260 3562.962)"
        fill="#cce8d0"
      />
      <g
        data-name="Grupo 3151"
        transform="translate(265.708 3568.67)"
        fill="none"
      >
        <path data-name="Caminho 2228" d="M0 0h31.981v31.981H0Z" />
        <circle
          data-name="Elipse 8"
          cx={5.466}
          cy={5.466}
          r={5.466}
          transform="translate(10.932 10.932)"
          stroke="#038a16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Caminho 2229"
          d="M3.998 15.991h1.333m10.66-11.993v1.333m10.66 10.66h1.333m-11.993 10.66v1.333M7.463 7.463l.935.935m16.124-.933-.933.933m0 15.191.933.933m-16.124-.936-.933.933"
          stroke="#038a16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
