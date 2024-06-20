import { GET_DATA } from './gql/queries'
import { useQuery } from '@apollo/client'
import { HeroComponent } from './components/Hero'
import { NavMenu } from './components/Menu'
import { WhatsappButton } from './components/WhatsappButton'
import { Query } from './gql/generate/graphql'
import { Banners } from './components/Banners'

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
        </>
      )}
    </div>
  )
}

export default App
