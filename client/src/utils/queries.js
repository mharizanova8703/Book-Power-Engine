import gql from 'graphql-tag'

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      password
      bookCount
      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`
