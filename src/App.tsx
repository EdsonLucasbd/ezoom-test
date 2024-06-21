import { GET_DATA } from './gql/queries'
import { useQuery } from '@apollo/client'
import { HeroComponent } from './components/Hero'
import { NavMenu } from './components/Menu'
import { WhatsappButton } from './components/WhatsappButton'
import { Query } from './gql/generate/graphql'
import { Banners } from './components/Banners'
import { SectionCard } from './components/Section'

function App() {
  const { loading, error, data } = useQuery<Query>(GET_DATA)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;


  return (
    <div className="w-full h-full font-barlow">
      {data && (
        <>
          <NavMenu logo={data.menu?.logo} menuLink={data.menu?.menuLink} socialLink={data.menu?.socialLink} />
          <HeroComponent
            bgImage={data.hero?.bgImage}
            title={data.hero?.title}
            subTitle={data.hero?.subTitle}
          />
          <WhatsappButton icon={data.hero?.whatsapp} />
          <Banners data={data.carousel?.component} />
          <div className="flex flex-col gap-4 mb-[65.80px] md:mt-10 md:items-center">
            {data?.sections?.map((item) => (
              <SectionCard key={item.id} sectionItem={item.sectionItem} title={item.title} subtitle={item.sectionSubTitle} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default App
