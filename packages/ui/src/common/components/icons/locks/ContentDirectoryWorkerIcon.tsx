import React from 'react'

import { Colors } from '@/common/constants'

import { Icon } from '../Icon'

interface ContentDirectoryWorkerIconProps {
  className?: string
}

export const ContentDirectoryWorkerIcon = React.memo(({ className }: ContentDirectoryWorkerIconProps) => (
  <Icon
    size="16"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    color="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.99998 1.09998L1.09998 1.99998V13.5555L1.99998 14.4555H14.4072C14.6268 15.1724 15.0611 15.7954 15.6354 16.2499L15.9024 16.4613L15.5877 16.5915C14.5938 17.0031 13.8489 17.674 13.3185 18.4461C12.4741 19.6753 12.2 21.1124 12.2 22.0531V22.5992L12.6884 22.8434C13.4489 23.2237 15.446 23.9 17.9 23.9C20.3539 23.9 22.351 23.2237 23.1115 22.8434L23.6 22.5992V22.0531C23.6 21.1124 23.3258 19.6753 22.4814 18.4461C21.9511 17.6742 21.2064 17.0034 20.2128 16.5918L19.8982 16.4615L20.1653 16.2502C21.0113 15.5808 21.5536 14.5456 21.5536 13.3837C21.5536 11.7127 20.4316 10.3038 18.9 9.86906V1.99998L18 1.09998H1.99998ZM17.1 9.81864V2.89996H2.89996V12.6555H14.32C14.6051 11.2464 15.7011 10.1314 17.1 9.81864ZM14.0068 21.4831L14.0365 21.3138C14.1388 20.7314 14.3645 20.0447 14.7752 19.4468C15.3438 18.6193 16.2832 17.9276 17.9 17.9276C19.5167 17.9276 20.4561 18.6193 21.0247 19.4468C21.4354 20.0447 21.6611 20.7314 21.7634 21.3138L21.7931 21.4831L21.6302 21.538C20.8169 21.8118 19.4764 22.1327 17.9 22.1327C16.3235 22.1327 14.983 21.8118 14.1697 21.538L14.0068 21.4831ZM19.7862 13.3837C19.7862 14.4252 18.9419 15.2694 17.9005 15.2694C16.859 15.2694 16.0148 14.4252 16.0148 13.3837C16.0148 12.3423 16.859 11.498 17.9005 11.498C18.9419 11.498 19.7862 12.3423 19.7862 13.3837Z"
      fill={Colors.Black[900]}
    />
    <path d="M8 11V6V5L12 8L8 11Z" fill={Colors.Blue[500]} />
  </Icon>
))