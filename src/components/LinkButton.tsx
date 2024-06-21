import { cn } from '../lib/utils'
import { Button } from './ui/button'

export const LinkButton = ({ children, className }: { children: string, className?: string }) => {
  return (
    <Button variant="outline" className={cn(`rounded-full w-[124px] h-[49px] 
      bg-transparent border-2 hover:bg-white hover:bg-opacity-10 
      hover:text-white font-bold text-base`, className)}>
      {children}
    </Button>
  )
}
