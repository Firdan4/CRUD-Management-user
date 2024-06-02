import axios from "axios";
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
