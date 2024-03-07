/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API'
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType
  __generatedMutationOutput: OutputType
}

export const putPost = /* GraphQL */ `mutation PutPost($id: ID!, $title: String!) {
  putPost(id: $id, title: $title) {
    id
    title
    __typename
  }
}
` as GeneratedMutation<APITypes.PutPostMutationVariables, APITypes.PutPostMutation>
