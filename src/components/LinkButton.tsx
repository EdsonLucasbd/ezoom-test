import { Button } from './ui/button'

export const LinkButton = ({ children }: { children: string }) => {
  return (
    <Button variant="outline" className='rounded-full w-[124px] h-[49px] 
      bg-transparent border-2 hover:bg-white hover:bg-opacity-10 
      hover:text-white font-bold text-base'>
      {children}
    </Button>
  )
}
