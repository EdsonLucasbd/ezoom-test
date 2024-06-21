import { useEffect, useState } from "react"
import { Menu } from "../gql/generate/graphql"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { MenuIcon } from "lucide-react"

type NavMenuProps = Partial<Menu>

export const NavMenu = ({ logo, menuLink, socialLink }: NavMenuProps) => {
  const [searchIcon, setSearchIcon] = useState("")
  const [deviceWidth, setDeviceWidth] = useState(0)
  const [isReached, setIsReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY || document.documentElement.scrollTop;

      if (window.innerWidth < 768) {
        if (currentPosition >= 200) {
          setIsReached(true);
        } else {
          setIsReached(false);
        }
      } else if (window.innerWidth > 768) {
        if (currentPosition >= 100) {
          setIsReached(true);
        } else {
          setIsReached(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setDeviceWidth(window.innerWidth)
    if (socialLink) {

      if (window.innerWidth < 768) {
        const iconLink = socialLink.filter((social) => social.name === 'search mobile')[0]?.icon?.url
        setSearchIcon(iconLink!)
      } else if (window.innerWidth > 768) {
        const iconLink = socialLink.filter((social) => social.name === 'search')[0]?.icon?.url
        setSearchIcon(iconLink!)
      }
    }
  }, [deviceWidth, socialLink])

  return (
    <nav className={`fixed flex w-full h-fit items-center px-12 md:px-[121px] pb-5 pt-[70px] md:pt-[50px] justify-between top-0 left-0 right-0 z-50 ${isReached ? 'bg-black bg-opacity-50 backdrop-blur shadow-md rounded-b-lg' : 'bg-transparent'}`}>
      <img src={logo?.url} aria-hidden alt="" className="w-[100px] h-[16.73px]" />

      <div className="flex items-center">
        <ul className="hidden md:flex mr-[104.07px] gap-[60px]">
          {menuLink?.map((link) => (
            <li key={link.id} className="text-white uppercase font-medium 
            text-base rounded-sm hover:bg-white hover:bg-opacity-10 p-px cursor-pointer"
            >
              {link.title}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <Button variant="ghost" className="hover:bg-white hover:bg-opacity-10 
      hover:text-white mr-[41px] md:mr-0 w-fit p-1">
            <img src={searchIcon} alt="" aria-hidden className="size-[26px] md:size-5" />
          </Button>
        </div>

        <Popover>
          <PopoverTrigger className="md:hidden">
            <Button variant="outline" className="bg-transparent border-2 text-white 
            hover:bg-white hover:bg-opacity-10 hover:text-white size-10 p-0"
            >
              <MenuIcon aria-hidden className="w-[18px]" strokeWidth={2.5} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col items-center justify-center w-fit bg-black bg-opacity-50 backdrop-blur">
            <ul className="flex flex-col gap-3 items-center justify-between">
              {menuLink?.map((link) => (
                <li key={link.id} className="text-white uppercase font-medium text-base rounded-sm hover:outline-offset-4 hover:outline hover:outline-1 hover:outline-white">{link.title}</li>
              ))}
            </ul>
            <hr className="w-full my-3 bg-white" />
            <ul className="flex flex-col gap-5 items-center justify-between">
              {socialLink?.filter((socialItem) => socialItem.name !== 'search' && socialItem.name !== 'search mobile').map((social) => (
                <li key={social.id} className="rounded-sm hover:outline-offset-4 hover:outline hover:outline-1 hover:outline-white">
                  <img src={social.icon?.url} alt={`acessar nosso perfil no ${social.name}`} />
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
        <div className="hidden md:flex">
          <ul className="flex gap-5 md:gap-[21px] items-center justify-between ml-[43px]">
            {socialLink?.filter((socialItem) => socialItem.name !== 'search' && socialItem.name !== 'search mobile').map((social) => (
              <li key={social.id} className="rounded-sm cursor-pointer">
                <img src={social.icon?.url} alt={`acessar nosso perfil no ${social.name}`} className="w-[19px]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
