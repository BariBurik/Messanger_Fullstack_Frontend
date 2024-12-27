import { gql } from '@apollo/client';

export const USER_REGISTER = gql`
    mutation($user: UserRegisterType!) {
        userRegister(user: $user) {
            refreshToken
            accessToken
        }
    }
`;

export const USER_LOGIN = gql`
    mutation($email:String!, $password:String!) {
        userLogin(email: $email, password: $password) {
            accessToken
            refreshToken
        }
    }
`;


export const UPDATE_ACCESS_TOKEN = gql`
    mutation($refreshToken: String!) {
        refreshAccessToken(refreshToken: $refreshToken) {
            accessToken
        }
    }
`;

export const USER_UPDATE = gql`
    mutation($accessToken: String!, $newUser: UserRegisterType!) {
        userUpdate(accessToken: $accessToken, newUser: $newUser) {
            refreshToken
            accessToken
        }
    }
`;

