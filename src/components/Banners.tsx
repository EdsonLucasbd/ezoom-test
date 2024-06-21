import { Carousel, CarouselContent, CarouselDots, CarouselItem } from './ui/carousel'
import { CarouselItemData } from '../gql/generate/graphql'
import { Card, CardContent, CardFooter } from './ui/card'
import arrowLeft from '../assets/arrow-right.svg'
export const Banners = ({ data }: { data: CarouselItemData[] | undefined }) => {

  return (
    <>
      <Carousel className='md:hidden'>
        <CarouselContent className='flex-1'>
          {data && data.map((item) => (
            <CarouselItem key={item.id} className='w-full h-[409.84px] rounded-b-[11.2px]'>
              <Card className='relative w-full h-full border-none'>
                <CardContent className='rounded-b-[11.2px] p-0'>
                  <span className="rounded-b-[5.6px] h-[8.96px] w-full absolute z-20" style={{ backgroundColor: item.color ?? '#FF632D' }} />
                  <img src={item.image?.url} alt={item.title!} className='w-full h-auto -z-10' />
                </CardContent>
                <CardFooter className='p-0'>
                  <div className="absolute flex flex-col w-full pt-12 px-[43.67px] h-full text-white gap-y-[44.6px] z-40">
                    <p className='font-bold text-[1.26rem] leading-[24.6px] max-w-[288.91px]'>{item.title}</p>
                    <div className="flex items-center justify-between">
                      <span className='leading-[24.6px] text-[17.92px] font-normal'>{item.date}</span>
                      <img src={arrowLeft} aria-hidden alt='' />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className='bottom-[30.16px]' />

      </Carousel>

      <div className='md:flex w-full hidden'>
        {data && data.map((item) => (
          <Card key={item.id} className='relative w-full h-full border-none rounded-b-[11.2px]'>
            <CardContent className='rounded-b-[11.2px] p-0'>
              <span className={`rounded-b-[5.6px] bg-[${item.color}] h-[8.96px] w-full absolute z-20`} />
              <img src={item.image?.url} alt={item.title!} className='w-full h-auto -z-10' />
            </CardContent>
            <CardFooter className='p-0'>
              <div className="absolute flex flex-col w-full pt-10 px-[43.67px] h-full text-white gap-y-[44.6px] z-40">
                <p className='font-bold text-[1.26rem] leading-[24.6px] max-w-[288.91px]'>{item.title}</p>
                <div className="flex items-center justify-between">
                  <span className='leading-[24.6px] text-[17.92px] font-normal'>{item.date}</span>
                  <img src={arrowLeft} aria-hidden alt='' />
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
