import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
   __typename?: 'Query';
  place?: Maybe<Place>;
  /** Get all the places from around the world  */
  places: Array<Place>;
};


export type QueryPlaceArgs = {
  id: Scalars['Float'];
};

/** Destination or place of interest */
export type Place = {
   __typename?: 'Place';
  id: Scalars['ID'];
  title: Scalars['String'];
  /** The place description */
  description?: Maybe<Scalars['String']>;
  /** The place image url */
  imageUrl?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['DateTime']>;
};


export type Mutation = {
   __typename?: 'Mutation';
  createPlace: Place;
};


export type MutationCreatePlaceArgs = {
  place: PlaceInput;
};

export type PlaceInput = {
  id?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type CreatePlaceMutationVariables = {
  title: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
};


export type CreatePlaceMutation = (
  { __typename?: 'Mutation' }
  & { createPlace: (
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'>
  ) }
);

export type PlaceQueryVariables = {
  id: Scalars['Float'];
};


export type PlaceQuery = (
  { __typename?: 'Query' }
  & { place?: Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'>
  )> }
);

export type PlacesQueryVariables = {};


export type PlacesQuery = (
  { __typename?: 'Query' }
  & { places: Array<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'>
  )> }
);


export const CreatePlaceDocument = gql`
    mutation CreatePlace($title: String!, $description: String!, $imageUrl: String!) {
  createPlace(place: {title: $title, description: $description, imageUrl: $imageUrl}) {
    id
    title
    description
    imageUrl
    creationDate
  }
}
    `;
export type CreatePlaceMutationFn = ApolloReactCommon.MutationFunction<CreatePlaceMutation, CreatePlaceMutationVariables>;
export type CreatePlaceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePlaceMutation, CreatePlaceMutationVariables>, 'mutation'>;

    export const CreatePlaceComponent = (props: CreatePlaceComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePlaceMutation, CreatePlaceMutationVariables> mutation={CreatePlaceDocument} {...props} />
    );
    

/**
 * __useCreatePlaceMutation__
 *
 * To run a mutation, you first call `useCreatePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaceMutation, { data, loading, error }] = useCreatePlaceMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useCreatePlaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePlaceMutation, CreatePlaceMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePlaceMutation, CreatePlaceMutationVariables>(CreatePlaceDocument, baseOptions);
      }
export type CreatePlaceMutationHookResult = ReturnType<typeof useCreatePlaceMutation>;
export type CreatePlaceMutationResult = ApolloReactCommon.MutationResult<CreatePlaceMutation>;
export type CreatePlaceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const PlaceDocument = gql`
    query Place($id: Float!) {
  place(id: $id) {
    id
    title
    description
    imageUrl
    creationDate
  }
}
    `;
export type PlaceComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PlaceQuery, PlaceQueryVariables>, 'query'> & ({ variables: PlaceQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PlaceComponent = (props: PlaceComponentProps) => (
      <ApolloReactComponents.Query<PlaceQuery, PlaceQueryVariables> query={PlaceDocument} {...props} />
    );
    

/**
 * __usePlaceQuery__
 *
 * To run a query within a React component, call `usePlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlaceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
        return ApolloReactHooks.useQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, baseOptions);
      }
export function usePlaceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, baseOptions);
        }
export type PlaceQueryHookResult = ReturnType<typeof usePlaceQuery>;
export type PlaceLazyQueryHookResult = ReturnType<typeof usePlaceLazyQuery>;
export type PlaceQueryResult = ApolloReactCommon.QueryResult<PlaceQuery, PlaceQueryVariables>;
export const PlacesDocument = gql`
    query Places {
  places {
    id
    title
    description
    imageUrl
    creationDate
  }
}
    `;
export type PlacesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PlacesQuery, PlacesQueryVariables>, 'query'>;

    export const PlacesComponent = (props: PlacesComponentProps) => (
      <ApolloReactComponents.Query<PlacesQuery, PlacesQueryVariables> query={PlacesDocument} {...props} />
    );
    

/**
 * __usePlacesQuery__
 *
 * To run a query within a React component, call `usePlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlacesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlacesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
        return ApolloReactHooks.useQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
      }
export function usePlacesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
        }
export type PlacesQueryHookResult = ReturnType<typeof usePlacesQuery>;
export type PlacesLazyQueryHookResult = ReturnType<typeof usePlacesLazyQuery>;
export type PlacesQueryResult = ApolloReactCommon.QueryResult<PlacesQuery, PlacesQueryVariables>;