import { useMutation, useQuery } from "@apollo/client";
import { USER_LOGIN, USER_REGISTER, USER_UPDATE } from "../Requests/User/mutations";
import { USER_GET_BY_ID, USERS_GET } from "../Requests/User/query";

export const useRegisterUser = () => {
    return useMutation(USER_REGISTER);
};
  
export const useLoginUser = () => {
    return useMutation(USER_LOGIN);
};
  
export const useUpdateUser = () => {
    return useMutation(USER_UPDATE);
};

export const useUsersGet = () => {
    return useQuery(USERS_GET);
};
  
export const useUserByIdGet = (id: number) => {
    return useQuery(USER_GET_BY_ID, {
        variables: { id },
    });
};