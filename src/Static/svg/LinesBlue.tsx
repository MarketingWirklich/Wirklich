import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={241.167}
    height={101.239}
    {...props}
  >
    <path
      data-name="Caminho 1381"
      d="M1 1v94.828c0 2.436 7.079 4.411 15.813 4.411h223.354"
      fill="none"
      stroke="rgba(0,163,255,0.25)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      strokeDasharray="10 20"
    />
  </svg>
)

export default SvgComponent
