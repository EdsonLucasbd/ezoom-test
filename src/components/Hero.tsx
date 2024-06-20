import { Hero } from '../gql/generate/graphql'
import ReactMarkdown from 'react-markdown'
import { LinkButton } from './LinkButton'

type HeroComponentProps = Pick<Hero, "title" | "subTitle" | "bgImage">

export const HeroComponent = ({ title, subTitle, bgImage }: HeroComponentProps) => {

  return (
    <div className={`
      relative flex flex-col flex-1 items-center justify-center px-12 h-screen w-full text-white`}
    >
      <div
        className="absolute -z-10 top-0 left-0 w-full h-full video-overlay"
      />
      <video
        className="absolute -z-20 top-0 left-0 w-full h-full object-cover pointer-events-none"
        src={bgImage?.url}
        autoPlay
        loop
        muted
        playsInline />

      <div className="flex flex-col">
        <ReactMarkdown
          components={{ p: 'h1' }}
          className='text-[3.65938rem] font-thin hero-title leading-[3.0625rem]
            max-w-[333px] pt-[100px]'
        >
          {title}
        </ReactMarkdown>
        <p className='mt-5 mb-[33px] max-w-[200px] font-normal text-lg'>{subTitle}</p>

        <LinkButton>SAIBA MAIS</LinkButton>
      </div>
    </div>
  )
}
