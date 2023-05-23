import { ITodoItem, IUser } from "../../routes/ToDoList/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://639fcbd97aaf11ceb8a04e50.mockapi.io/api/v1/app" }),
  tagTypes: ["Todos", "Users"],
  endpoints: (builder) => ({
    getTodos: builder.query<ITodoItem[], void>({
      query: () => `/todos`,
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation<ITodoItem, Partial<ITodoItem>>({
      query: (body) => ({
        url: `/todos`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<ITodoItem, Partial<ITodoItem>>({
      query: (body) => ({
        url: `/todos/${body.id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Todos"],
    }),
    getUsers: builder.query<IUser[], void>({
      query: () => `/users`,
      providesTags: ["Users"],
    }),
    addUser: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: `/users`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
} = api;
