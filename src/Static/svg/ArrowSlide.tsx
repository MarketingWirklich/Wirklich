import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17.713}
    height={18.541}
    {...props}
  >
    <g
      data-name="Icon feather-arrow-right"
      fill="none"
      stroke="#0089e7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path data-name="Caminho 5" d="M8.856 1.414 1 9.27l7.856 7.856" />
      <path data-name="Caminho 4" d="M16.713 9.27H1" />
    </g>
  </svg>
)

export default SvgComponent
