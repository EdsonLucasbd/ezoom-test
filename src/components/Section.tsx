import { CarouselItemData } from "../gql/generate/graphql"
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "./ui/carousel"
import arrowRight from '../assets/arrow-right-section.svg'

interface SectionProps {
  sectionItem?: CarouselItemData[] | undefined
  title?: CarouselItemData['title']
}

export const SectionCard = ({ sectionItem, title }: SectionProps) => {
  console.log("color", sectionItem)
  return (
    <div className="flex flex-col md:flex-row w-full h-[506px] rounded-[10px] border-l-[12px] pt-[38px] bg-[#F7F7F7]" style={{ borderLeftColor: sectionItem?.[0].color ?? '#FF632D' }}>
      <h2 className="font-thin leading-10 text-[40px] -tracking-[8%] text-center pb-[26px]">{title}</h2>
      <Carousel className="pl-[51px] pr-[50px] w-[329px] h-[325px]">
        <CarouselContent>
          {sectionItem?.map((item) => (
            <CarouselItem className="flex-wrap">
              <div className="flex relative">
                <img src={item.image?.url} alt={item.title!} className="rounded-[10px]" />
                <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-[10px]" style={{ backgroundColor: sectionItem?.[0].color ?? '#000' }}></div>
              </div>
              <div className="flex flex-col w-full pt-12 h-fit text-[#333333] pb-[50px]">
                <p className="font-bold text-lg pl-[20px] leading-[1.375rem] mb-10">{item.title}</p>
                <div className="flex items-center justify-between pl-[20px]">
                  <p className="font-normal text-[17.92px] leading-[24.6px]">{item.date}</p>
                  <img src={arrowRight} aria-hidden alt='' />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>

    </div>
  )
}
