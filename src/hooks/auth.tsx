import { ReactNode, createContext, useContext, useState } from 'react';
import { useAuthRequest, useAutoDiscovery, makeRedirectUri, AuthSessionResult } from 'expo-auth-session';
import { maybeCompleteAuthSession } from 'expo-web-browser';
import { scopes, responseType, clientId, cdnImage } from "../utils/configs";
import { api } from '../services/api';

type User = {
   id: string;
   username: string;
   firstName: string;
   avatar: string;
   email: string;
   token: string;
};

type AuthContextData = {
   user: User;
   loading: boolean;
   signIn: () => Promise<void>;
};

type AuthProviderProps = {
   children: ReactNode;
};

type AuthResponse = AuthSessionResult & {
   params: {
      access_token: string;
   };
};

const AuthContext = createContext({} as AuthContextData);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
   const [user, setUser] = useState<User>({} as User);
   const [loading, setLoading] = useState(false);

   maybeCompleteAuthSession();
   const discovery = useAutoDiscovery(`${api.defaults.baseURL}`);
   const [, , promptAsync] = useAuthRequest(
      {
         redirectUri: makeRedirectUri(),
         scopes,
         responseType,
         clientId
      },
      discovery
   );

   const signIn = async () => {
      setLoading(!loading);
      promptAsync()
         .then((response) => {
            const { type, params } = response as AuthResponse;

            if (type === "success") {
               api.defaults.headers.authorarion = `Bearer ${params.access_token}`;

               const userInfo = api
                  .get('/users/@me')
                  .then(({ data }) => {
                     const { username, id, avatar } = data;
                     const firstName = username.split(' ')[0];
                     data.avatar = `${cdnImage}/avatars/${id}/${avatar}.png`;

                     setUser({
                        ...data,
                        firstName,
                        token: params.access_token
                     });
                  });
            }

            setLoading(!loading);
         })
         .catch(error => {
            throw new Error("Não foi possível autenticar!");
         });
   };

   return (
      <AuthContext.Provider value={{ user, signIn, loading }}>
         {children}
      </AuthContext.Provider>
   );
};

export {
   AuthProvider,
   AuthContext,
   useAuth
};
