'use client'

import type { HTMLAttributes, ElementType } from 'react'
import { TextScramble } from './text-scramble'
import { cn } from '../../utils/cn'

type CornerFrameScrambleTextProps = {
  value: string | number
  className?: string
  as?: ElementType
} & HTMLAttributes<HTMLDivElement>

const CornerFrameScrambleText = ({
  value,
  className,
  as,
  ...props
}: CornerFrameScrambleTextProps) => {
  return (
    <div
      className={cn(
        'relative inline-block px-8 py-6',
        'bg-[linear-gradient(to_right,var(--color-primary)_1.5px,transparent_1.5px),linear-gradient(to_right,var(--color-primary)_1.5px,transparent_1.5px),linear-gradient(to_left,var(--color-primary)_1.5px,transparent_1.5px),linear-gradient(to_left,var(--color-primary)_1.5px,transparent_1.5px),linear-gradient(to_bottom,var(--color-primary)_1.5px,transparent_1.5px),linear-gradient(to_bottom,var(--color-primary)_1.5px,transparent_1.5px),linear-gradient(to_top,var(--color-primary)_1.5px,transparent_1.5px),linear-gradient(to_top,var(--color-primary)_1.5px,transparent_1.5px)]',
        'bg-[length:15px_15px] bg-no-repeat',
        'bg-[position:0_0,0_100%,100%_0,100%_100%,0_0,100%_0,0_100%,100%_100%]',
        className
      )}
      {...props}
    >
      <TextScramble as={as} className="relative z-10 text-center font-heading tracking-wide">
        {value.toString()}
      </TextScramble>
    </div>
  )
}

export default CornerFrameScrambleText
