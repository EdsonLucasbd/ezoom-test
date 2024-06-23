import { Hero } from "../gql/generate/graphql"
import { Button } from "./ui/button"

export const WhatsappButton = ({ icon }: { icon: Hero['whatsapp'] }) => {

  return (
    <Button className="fixed right-0 bottom-0 mr-[29.88px] md:mr-[121px] ultrawide:mr-[200px] mb-[49.35px] ultrawide:bottom-64 
      size-[44.12px] md:size-[50px] ultrawide:size-[80px] rounded-full bg-verde-oficial hover:bg-verde-oficial/60 
      p-2.5 ultrawide:p-5 z-50"
    >
      <img src={icon?.icon?.url} alt="" aria-hidden className="ultrawide:w-full" />
      <p className="sr-only">Falar no whatsapp</p>
    </Button>
  )
}
