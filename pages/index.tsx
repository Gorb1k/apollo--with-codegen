import {useQuery, gql, useMutation} from "@apollo/client";


const HOME_QUERY = gql`
  query HomeQuery($search: String!) {
    names(search: $search)
  }
`;
const LOGIN = gql`
mutation login ($loginUserInput: LoginUserInput!){
  login(loginUserInput:$loginUserInput){
    access_token
    user {
      username
    }
  }
}
`

export default function Home() {
  const { data, loading } = useQuery(
    HOME_QUERY,
    {
      variables: { search: "ma" },
    }
  );
    const [ loginMe,{ data:loginData, loading:loginLoading}] = useMutation(
        LOGIN,
        {
            variables: {
                loginUserInput: {
                    password: "secure",
                    username: "mudak2"
                }
            }
        }
    );

  // if (loading || !data) return <div>loading...</div>;

  return (
    <div>
        <button onClick={() => loginMe()}>PRESS ME !!!</button>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <pre>{JSON.stringify(loginData, null, 2)}</pre>
    </div>
  );
}
