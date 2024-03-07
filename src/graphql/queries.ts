/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API'
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType
  __generatedQueryOutput: OutputType
}

export const singlePost = /* GraphQL */ `query SinglePost($id: ID!) {
  singlePost(id: $id) {
    id
    title
    __typename
  }
}
` as GeneratedQuery<APITypes.SinglePostQueryVariables, APITypes.SinglePostQuery>
export const posts = /* GraphQL */ `query Posts {
  posts {
    id
    title
    __typename
  }
}
` as GeneratedQuery<APITypes.PostsQueryVariables, APITypes.PostsQuery>
