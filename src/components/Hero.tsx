import { Hero } from '../gql/generate/graphql'
import ReactMarkdown from 'react-markdown'
import { LinkButton } from './LinkButton'

type HeroComponentProps = Pick<Hero, "title" | "subTitle" | "bgImage">

export const HeroComponent = ({ title, subTitle, bgImage }: HeroComponentProps) => {

  return (
    <div className={`
      relative flex flex-col flex-1 items-center md:items-start justify-center px-12 h-screen w-full text-white
      md:px-[121px]
    `}
    >
      <div
        className="absolute md -z-10 top-0 left-0 w-full h-full video-overlay"
      />
      <video
        className="absolute -z-20 top-0 left-0 w-full h-full object-cover pointer-events-none"
        src={bgImage?.url}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

      <div className="flex flex-col">
        <ReactMarkdown
          components={{ p: 'h1' }}
          className='text-[3.65938rem] md:text-[95.59px] font-thin hero-title 
            leading-[3.0625rem] md:leading-[79.9px] max-w-[333px] md:max-w-[544px] pt-[100px]'
        >
          {title}
        </ReactMarkdown>
        <p className='mt-5 mb-[33px] md:my-[50px] max-w-[200px] md:max-w-full font-normal text-lg md:text-2xl'>{subTitle}</p>

        <LinkButton>SAIBA MAIS</LinkButton>
      </div>
    </div>
  )
}
