import { CarouselItemData } from "../gql/generate/graphql"
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "./ui/carousel"
import arrowRight from '../assets/arrow-right-section.svg'
import { LinkButton } from "./LinkButton"

interface SectionProps {
  sectionItem?: CarouselItemData[] | undefined
  title?: CarouselItemData['title']
}

export const SectionCard = ({ sectionItem, title }: SectionProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center w-full md:w-custom-width h-[506px] rounded-[10px] border-l-[12px] md:px-10 pt-[38px] bg-[#F7F7F7]" style={{ borderLeftColor: sectionItem?.[0].color ?? '#FF632D' }}>
      <div className="flex flex-col">
        <h2 className="font-thin uppercase leading-10 md:leading-[120px] text-[40px] md:text-[80px] -tracking-[8%] text-center pb-[26px]">{title}</h2>
        <LinkButton className="hidden md:flex hover:text-[#333333]">SAIBA MAIS</LinkButton>
      </div>
      <Carousel className="pl-[51px] pr-[50px] w-[329px] h-[325px] md:hidden">
        <CarouselContent>
          {sectionItem?.map((item) => (
            <CarouselItem className="flex-wrap">
              <div className="flex relative">
                <img src={item.image?.url} alt={item.title!} className="rounded-[10px]" />
                <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-[10px]" style={{ backgroundColor: sectionItem?.[0].color ?? '#000' }}></div>
              </div>
              <div className="flex flex-col w-full pt-12 h-fit text-[#333333] pb-[50px]">
                <p className="font-bold text-lg pl-5 leading-[1.375rem] mb-10">{item.title}</p>
                <div className="flex items-center justify-between pl-5">
                  <p className="font-normal text-[17.92px] leading-[24.6px]">{item.date}</p>
                  <img src={arrowRight} aria-hidden alt='' />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>

      <div className="hidden md:flex gap-10 items-center justify-center ml-10">
        {sectionItem?.map((item) => (
          <div key={item.id} className="w-[200px] h-[325px]">
            <div className="flex relative">
              <img src={item.image?.url} alt={item.title!} className="rounded-[10px] w-full" />
              <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-[10px]" style={{ backgroundColor: sectionItem?.[0].color ?? '#000' }}></div>
            </div>
            <div className="flex flex-col w-full pt-[22px] h-fit text-[#333333] pb-[50px]">
              <p className="font-bold text-base pl-3 leading-[1.375rem] mb-10">{item.title}</p>
              <div className="flex items-center justify-between pl-3">
                <p className="font-normal text-sm">{item.date}</p>
                <img src={arrowRight} aria-hidden alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
