import React from "react"

const Icon = ({ name, size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-labelledby={name}
      role="presentation"
      className={className}
    >
      {name === "github" && (
        <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" />
      )}
      {name === "twitter" && (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 2C17.5191 2 22 6.48086 22 12C22 17.5191 17.5191 22 12 22C6.48086 22 2 17.5191 2 12C2 6.48086 6.48086 2 12 2ZM10.2386 17.3187C14.6637 17.3187 17.0833 13.6519 17.0833 10.474C17.0833 10.3693 17.0833 10.2645 17.0783 10.1647C17.5473 9.82547 17.9564 9.40141 18.2806 8.9175C17.8516 9.10707 17.3876 9.2368 16.8987 9.29664C17.3976 8.9973 17.7768 8.52836 17.9564 7.96465C17.4924 8.23902 16.9786 8.43855 16.4298 8.54832C15.9907 8.07937 15.3671 7.79004 14.6737 7.79004C13.3467 7.79004 12.2691 8.86762 12.2691 10.1946C12.2691 10.3842 12.2891 10.5688 12.3339 10.7434C10.3334 10.6436 8.56238 9.68578 7.37508 8.22902C7.17051 8.58324 7.05078 8.9973 7.05078 9.43633C7.05078 10.2695 7.47484 11.0078 8.1234 11.4368C7.72926 11.4269 7.36008 11.3171 7.03582 11.1375V11.1675C7.03582 12.3348 7.86395 13.3027 8.96648 13.5272C8.76695 13.582 8.55242 13.612 8.33293 13.612C8.17824 13.612 8.02859 13.597 7.87895 13.5671C8.18324 14.5249 9.07125 15.2184 10.1239 15.2383C9.30074 15.8819 8.26309 16.2661 7.13559 16.2661C6.94102 16.2661 6.75145 16.2561 6.56187 16.2311C7.61453 16.9196 8.88168 17.3187 10.2386 17.3187Z"
        />
      )}
      {name === "youtube" && (
        <path d="M17 10.5V7C17 6.73478 16.8946 6.48043 16.7071 6.29289C16.5196 6.10536 16.2652 6 16 6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7V17C3 17.2652 3.10536 17.5196 3.29289 17.7071C3.48043 17.8946 3.73478 18 4 18H16C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V13.5L21 17.5V6.5L17 10.5Z" />
      )}
    </svg>
  )
}

export default Icon