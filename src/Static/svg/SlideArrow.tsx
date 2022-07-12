import * as React from "react"

const SlideArrow = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={43} {...props}>
    <g data-name="Grupo 3335" transform="translate(-1617 -1684)">
      <rect
        data-name="Ret\xE2ngulo 15"
        width={43}
        height={43}
        rx={5}
        transform="translate(1617 1684)"
        fill="#006cc9"
      />
      <g
        data-name="Icon feather-arrow-right"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path data-name="Caminho 4" d="M1630.644 1705.5h15.713" />
        <path
          data-name="Caminho 5"
          d="m1638.5 1697.644 7.856 7.856-7.856 7.857"
        />
      </g>
    </g>
  </svg>
)

export default SlideArrow
