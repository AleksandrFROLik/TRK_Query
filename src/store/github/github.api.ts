import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IRepo, IUser, ServerResponse } from '../../models/models';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  refetchOnFocus: true,// обновление вкаладки если долго не использовалась
  endpoints: build => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search, //параметр с документации
          per_page: 10 // колличество юзеров (документация)
        }
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items //модифицируем ответ (из response
      // достаеи только необходимые даннк
    }),
    getUserRepos: build.query<IRepo[],string>({
      query: (username:string)=>({
        url: `users/${username}/repos`
      })
    })
  })
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi //Lazy говорит нам о том что данный
// запрос будет выполнен не авоматически а когда нам будет необходимо