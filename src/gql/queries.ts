import {gql} from '@apollo/client'

export const GET_DATA = gql`
  query MyQuery {
  menu(where: {id: "clxma09b20b9207lwcjapufqx"}) {
    logo {
      url
    }
    menuLink {
      ... on Link {
        id
        title
      }
    }
    socialLink {
      ... on Social {
        id
        name
        icon {
          url
        }
      }
    }
  }
  hero(where: {id: "clxm9ontz0afe07ltr3n8sy1e"}) {
    title
    subTitle
    bgImage {
      url
    }
    whatsapp {
      icon {
        url
      }
    }
    bgImageMobile {
      url
    }
  }
  carousel(where: {id: "clxm9wlnk0ase07lt4liwtkwz"}) {
    component {
      ... on CarouselItemData {
        id
        image {
          url
        }
        title
        date
      }
    }
  }
  sections {
    title
    id
    sectionItem {
      ... on CarouselItemData {
        id
        title
        date
        image {
          url
        }
      }
    }
    sectionSubTitle
  }
}
`