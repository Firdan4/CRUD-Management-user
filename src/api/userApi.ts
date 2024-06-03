import { API } from ".";

export interface User {
  id: string;
  name: string;
  address: string;
  gender: string;
  birtDate: string;
  createdAt: string;
}

export const getUsers = async () => {
  return API.get<User[]>("/user");
};

export const addUser = async (data: User) => {
  return API.post("/user", data);
};
export const updateUser = async (data: User, id: string) => {
  return API.patch(`/user/${id}`, data);
};

export const deleteUser = (id: string) => {
  return API.delete(`/user/${id}`);
};
