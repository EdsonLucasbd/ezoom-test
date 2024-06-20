import { Asset, Link, Maybe, MyQueryQuery, Social } from './gql/generate/graphql'
import { GET_DATA } from './gql/queries'
import { useQuery } from '@apollo/client'
import { HeroComponent } from './components/Hero'
import { NavMenu } from './components/Menu'

function App() {
  const { loading, error, data } = useQuery<MyQueryQuery>(GET_DATA)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="flex w-full h-screen font-barlow">
      {data && (
        <>
          <NavMenu logo={data.menu?.logo as Maybe<Asset> | undefined} menuLink={data.menu?.menuLink as Link[] | undefined} socialLink={data.menu?.socialLink as Social[] | undefined} />
          <HeroComponent
            bgImage={data.hero?.bgImage as Maybe<Asset> | undefined}
            title={data.hero?.title}
            subTitle={data.hero?.subTitle}
          />
        </>
      )}
    </div>
  )
}

export default App
