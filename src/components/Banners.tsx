import { Carousel, CarouselContent, CarouselDots, CarouselItem } from './ui/carousel'
import { CarouselItemData } from '../gql/generate/graphql'
import { Card, CardContent, CardFooter } from './ui/card'
import arrowRight from '../assets/arrow-right.svg'
import arrowRightGreen from '../assets/arrow-right-green.svg'
import { useState } from 'react'
export const Banners = ({ data }: { data: CarouselItemData[] | undefined }) => {
  const [isHover, setIsHover] = useState({ state: false, index: 0 })

  const handleMouseEnter = (index: number) => {
    setIsHover({ state: true, index })
  }

  const handleMouseLeave = (index: number) => {
    setIsHover({ state: false, index })
  }

  const arrow = (index: number) => {
    if (isHover.state && isHover.index === index) {
      return arrowRightGreen
    } else {
      return arrowRight
    }
  }

  return (
    <>
      <Carousel className='md:hidden'>
        <CarouselContent className='flex-1'>
          {data && data.map((item, index) => (
            <CarouselItem key={item.id} className='w-full h-[409.84px] rounded-b-[11.2px] group'>
              <Card className='relative w-full h-fit border-none shadow-none' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                <CardContent className='rounded-b-[11.2px] p-0'>
                  <span className="rounded-b-[5.6px] h-[8.96px] w-full absolute z-20" style={{ backgroundColor: item.color ?? '#FF632D' }} />
                  <div className="absolute size-full bg-[#000000b5] opacity-0 group-hover:opacity-100 rounded-[10px] transition-all ease-in-out duration-300 delay-75"></div>
                  <img src={item.image?.url} alt={item.title!} className='w-full h-auto -z-10' />
                </CardContent>
                <CardFooter className='p-0'>
                  <div className="absolute flex flex-col w-full pt-5 px-[43.67px] h-full text-white gap-y-[44.6px] z-40">
                    <p className='font-bold text-[1.26rem] group-hover:text-2xl 
                      leading-[24.6px] group-hover:leading-[28px] max-w-[288.91px] group-hover:-translate-y-[80px]
                      transition-all ease-in-out duration-300 delay-75 '
                    >
                      {item.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className='leading-[24.6px] text-[17.92px] font-normal group-hover:-translate-y-[80px]
                      transition-all ease-in-out duration-300 delay-75'
                      >
                        {item.date}

                      </span>
                      <img
                        src={arrow(index)}
                        aria-hidden alt=''
                        className='transition-all ease-out duration-300 delay-75 group-hover:-translate-x-[240px]'
                      />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className='bottom-12 mt-[50px]' />

      </Carousel>

      <div className='md:flex w-full hidden'>
        {data && data.map((item, index) => (
          <Card key={item.id} className='relative w-[384px] h-fit border-none rounded-b-[10px] group' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
            <CardContent className='rounded-b-[11.2px] p-0'>
              <span className="rounded-b-[5px] h-[8.96px] w-full absolute z-20" style={{ backgroundColor: item.color ?? '#FF632D' }} />
              <div className="absolute size-full bg-[#000000b5] opacity-0 group-hover:opacity-100 rounded-[10px] transition-all ease-in-out duration-300 delay-75"></div>
              <img src={item.image?.url} alt={item.title!} className='w-full h-auto -z-10' />
            </CardContent>
            <CardFooter className='p-0'>
              <div className="absolute flex flex-col w-full -left-2 pt-6 px-[39px] h-full text-white gap-y-10 z-40">
                <p className='font-bold text-lg group-hover:text-[1.2188rem] leading-[22px] 
                  group-hover:leading-[28px] max-w-[288.91px] group-hover:-translate-y-[80px]
                  transition-all ease-in-out duration-300 delay-75 '>
                  {item.title}

                </p>
                <div className="flex items-center justify-between">
                  <span className='text-base leading-[22px] font-normal group-hover:-translate-y-[80px]
                      transition-all ease-in-out duration-300 delay-75'>
                    {item.date}
                  </span>
                  <img
                    src={arrow(index)}
                    aria-hidden alt=''
                    className='transition-all ease-out duration-300 delay-75 group-hover:-translate-x-[200px] group-hover:-translate-y-[15px] size-5'
                  />
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
