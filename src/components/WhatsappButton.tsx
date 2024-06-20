import { Hero } from "../gql/generate/graphql"
import { Button } from "./ui/button"

export const WhatsappButton = ({ icon }: { icon: Hero['whatsapp'] }) => {

  return (
    <Button className="fixed right-0 bottom-0 mr-[29.88px] mb-[49.35px] 
      size-[44.12px] rounded-full bg-verde-oficial hover:bg-verde-oficial/60 p-2.5 z-20"
    >
      <img src={icon?.icon?.url} alt="" aria-hidden />
      <p className="sr-only">Falar no whatsapp</p>
    </Button>
  )
}
