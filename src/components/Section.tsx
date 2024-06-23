import { CarouselItemData, Section } from "../gql/generate/graphql"
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "./ui/carousel"
import arrowRightBlack from '../assets/arrow-right-section.svg'
import arrowRightWhite from '../assets/arrow-right.svg'
import { LinkButton } from "./LinkButton"
import { useState } from "react"

interface SectionProps {
  sectionItem?: CarouselItemData[] | undefined
  title?: CarouselItemData['title']
  subtitle?: Section['sectionSubTitle']
}

export const SectionCard = ({ sectionItem, title, subtitle }: SectionProps) => {
  const [isHover, setIsHover] = useState({ state: false, index: 0 })

  const handleMouseEnter = (index: number) => {
    setIsHover({ state: true, index })
  }

  const handleMouseLeave = (index: number) => {
    setIsHover({ state: false, index })
  }

  const arrow = (index: number) => {
    if (isHover.state && isHover.index === index) {
      return arrowRightWhite
    } else {
      return arrowRightBlack
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center w-full md:w-custom-width h-[506px] rounded-[10px] border-l-[12px] md:px-10 pt-[38px] bg-[#F7F7F7]" style={{ borderLeftColor: sectionItem?.[0].color ?? '#FF632D' }}>
      <div className="flex flex-col">
        <h2 className="font-thin uppercase leading-10 md:leading-[120px] text-[40px] md:text-[80px] -tracking-[8%] text-center pb-[26px] md:pb-0">{title}</h2>
        <p className="hidden md:flex font-normal text-lg mb-[23px]">{subtitle}</p>
        <LinkButton className="hidden md:flex border-[#333333]">SAIBA MAIS</LinkButton>
      </div>
      <Carousel className="ml-[53px] pr-[50px] w-[329px] h-[325px] md:hidden">
        <CarouselContent>
          {sectionItem?.map((item, index) => (
            <CarouselItem className="flex-wrap group" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="flex relative text-[#333333] rounded-t-[10px] group-hover:text-white transition-all ease-in-out duration-300"
                style={{
                  backgroundColor: isHover.state && isHover.index === index
                    ? sectionItem?.[0].color ?? '#000'
                    : 'transparent'
                }}
              >
                <img src={item.image?.url} alt={item.title!} className="rounded-[10px]" />
                <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-[10px]" style={{ backgroundColor: sectionItem?.[0].color ?? '#000' }}></div>
              </div>
              <div className="flex flex-col w-full pt-12 h-fit text-[#333333] group-hover:text-white mb-[50px] pb-2 rounded-b-[10px]
               transition-all ease-in-out duration-300"
                style={{
                  backgroundColor: isHover.state && isHover.index === index
                    ? sectionItem?.[0].color ?? '#000'
                    : 'transparent'
                }}
              >
                <p className="font-bold text-lg pl-5 leading-[1.375rem] mb-10">{item.title}</p>
                <div className="flex items-center justify-between px-5">
                  <p className="font-normal text-[17.92px] leading-[24.6px]">{item.date}</p>
                  <img src={arrow(index)} aria-hidden alt='' />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>

      <div className="hidden md:flex gap-10 items-center justify-center ml-10">
        {sectionItem?.map((item, index) => (
          <div key={item.id} className="w-[220px] h-fit transition-all ease-in-out duration-300 rounded-[10px] group"
            onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}
            style={{
              backgroundColor: isHover.state && isHover.index === index
                ? sectionItem?.[0].color ?? '#000'
                : 'transparent'
            }}
          >
            <div className="flex relative">
              <img src={item.image?.url} alt={item.title!} className="rounded-[10px] w-full" />
              <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-[10px] text-[#333333] group-hover:text-white" style={{ backgroundColor: sectionItem?.[0].color ?? '#000' }}></div>
            </div>
            <div className="flex flex-col w-full pt-[22px] h-fit text-[#333333] pb-8 group-hover:text-white">
              <p className="font-bold text-base pl-3 leading-[1.375rem] mb-10">{item.title}</p>
              <div className="flex items-center justify-between px-3">
                <p className="font-normal text-sm">{item.date}</p>
                <img src={arrow(index)} aria-hidden alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
