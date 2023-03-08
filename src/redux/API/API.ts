import { ITodoItem } from "./../../Content/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://639fcbd97aaf11ceb8a04e50.mockapi.io/api/v1/app" }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<ITodoItem[], void>({
      query: () => `/todos`,
      providesTags: result => ['Todos']
    }),
    addTodo: builder.mutation<ITodoItem, Partial<ITodoItem>>({
      query: (body) => ({
        url: `/todos`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Todos']
    }),
    deleteTodo: builder.mutation<ITodoItem, Partial<ITodoItem>>({
      query: (body) => ({
        url: `/todos/${body.id}`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Todos']
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } = api;