import { cn } from '../lib/utils'
import { Button } from './ui/button'

export const LinkButton = ({ children, className }: { children: string, className?: string }) => {
  return (
    <Button
      variant="ghost"
      title={children}
      className={cn(`rounded-full w-[124px] h-[49px] 
      bg-transparent border-2 hover:bg-[#333333]
      hover:border-[#333333] hover:text-white font-bold text-base transition-all ease-in-out duration-300 delay-100`, className)}>
      {children}
    </Button>
  )
}
