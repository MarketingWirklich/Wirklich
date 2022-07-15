import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={255} height={80} {...props}>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={255}
        height={80}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="blur" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g data-name="Grupo 3335" transform="translate(-279 -4827.47)">
      <g transform="translate(279 4827.47)" filter="url(#a)">
        <rect
          data-name="Ret\xE2ngulo 753"
          width={237}
          height={62}
          rx={4}
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <rect
        data-name="Ret\xE2ngulo 770"
        width={57.865}
        height={4}
        rx={2}
        transform="translate(356.77 4852.47)"
        fill="#038a16"
      />
      <rect
        data-name="Ret\xE2ngulo 769"
        width={146}
        height={4}
        rx={2}
        transform="translate(357 4862.47)"
        fill="rgba(112,112,112,0.2)"
        opacity={0.8}
      />
      <rect
        data-name="Ret\xE2ngulo 768"
        width={138}
        height={4}
        rx={2}
        transform="translate(357 4872.47)"
        fill="rgba(112,112,112,0.2)"
        opacity={0.8}
      />
      <circle
        data-name="Elipse 5"
        cx={21}
        cy={21}
        r={21}
        transform="translate(303 4843.47)"
        fill="rgba(3,138,22,0.2)"
      />
      <g data-name="Grupo 3190" fill="none">
        <path data-name="Caminho 2230" d="M311.95 4852.47h24.1v24.1h-24.1Z" />
        <g
          data-name="Grupo 3258"
          stroke="#038a16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path
            data-name="Caminho 2231"
            d="M316.971 4873.556c.5-4.518 2.51-8.033 7.029-10.041"
          />
          <path
            data-name="Caminho 2232"
            d="M320.987 4870.545c6.244 0 10.543-3.3 11.045-12.05v-2.008h-4.03c-9.036 0-12.036 4.017-12.05 9.037a6.49 6.49 0 0 0 2.008 5.021h3.013Z"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
