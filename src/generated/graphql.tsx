import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: 'Cat';
  id: Scalars['Int'];
  name: Scalars['String'];
  owner: Owner;
  ownerId: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};

export type CreateCatInput = {
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
};

export type CreateOwnerInput = {
  name: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCat: Cat;
  createOwner: Owner;
  login: LoginResponse;
  register: User;
  removeCat: Cat;
  removeOwner: Owner;
  updateCat: Cat;
  updateOwner: Owner;
};


export type MutationCreateCatArgs = {
  createCatInput: CreateCatInput;
};


export type MutationCreateOwnerArgs = {
  createOwnerInput: CreateOwnerInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRegisterArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveCatArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveOwnerArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCatArgs = {
  updateCatInput: UpdateCatInput;
};


export type MutationUpdateOwnerArgs = {
  updateOwnerInput: UpdateOwnerInput;
};

export type Owner = {
  __typename?: 'Owner';
  cats?: Maybe<Array<Cat>>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Pet = {
  __typename?: 'Pet';
  id: Scalars['Int'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  cat: Cat;
  cats: Array<Cat>;
  owner: Owner;
  owners: Array<Owner>;
  user: User;
  users: Array<User>;
};


export type QueryCatArgs = {
  id: Scalars['Int'];
};


export type QueryOwnerArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryUsersArgs = {
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateCatInput = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateOwnerInput = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', username: string } } };

export type RegisterMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: number, username: string } };

export type CatsQueryVariables = Exact<{ [key: string]: never; }>;


export type CatsQuery = { __typename?: 'Query', cats: Array<{ __typename?: 'Cat', name: string, owner: { __typename?: 'Owner', name: string } }> };

export type UsersQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', username: string }> };


export const LoginDocument = gql`
    mutation login($loginUserInput: LoginUserInput!) {
  login(loginUserInput: $loginUserInput) {
    access_token
    user {
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginUserInput: // value for 'loginUserInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($loginUserInput: LoginUserInput!) {
  register(loginUserInput: $loginUserInput) {
    id
    username
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      loginUserInput: // value for 'loginUserInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CatsDocument = gql`
    query cats {
  cats {
    name
    owner {
      name
    }
  }
}
    `;

/**
 * __useCatsQuery__
 *
 * To run a query within a React component, call `useCatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCatsQuery(baseOptions?: Apollo.QueryHookOptions<CatsQuery, CatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatsQuery, CatsQueryVariables>(CatsDocument, options);
      }
export function useCatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatsQuery, CatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatsQuery, CatsQueryVariables>(CatsDocument, options);
        }
export type CatsQueryHookResult = ReturnType<typeof useCatsQuery>;
export type CatsLazyQueryHookResult = ReturnType<typeof useCatsLazyQuery>;
export type CatsQueryResult = Apollo.QueryResult<CatsQuery, CatsQueryVariables>;
export const UsersDocument = gql`
    query users($username: String) {
  users(username: $username) {
    username
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;