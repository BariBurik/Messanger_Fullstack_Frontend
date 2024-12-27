import { gql } from "@apollo/client";

export const USERS_GET = gql`
    query {
        users {
            name
        }
    }
`;

export const USER_GET_BY_ID = gql`
    query($id: Int!) {
        user(id: $id) {
            name
        }
    }
`;

