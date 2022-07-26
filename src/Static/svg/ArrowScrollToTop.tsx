import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18.541}
    height={17.713}
    {...props}
  >
    <g
      data-name="Icon feather-arrow-right"
      fill="none"
      stroke="#002137"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path data-name="Caminho 4" d="M9.27 16.713V1" />
      <path data-name="Caminho 5" d="M1.414 8.857 9.27 1.001l7.857 7.856" />
    </g>
  </svg>
)

export default SvgComponent
