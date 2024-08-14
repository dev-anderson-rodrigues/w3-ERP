import axios from "axios";
import { Api } from "../../services/api";
import { IUser, loginType } from "./types";

export function getDadosProfileLocalStorage() {
    const profileJson = localStorage.getItem("profile");
    return profileJson ? JSON.parse(profileJson) : null;
  }

  export function setDadosProfileLocalStorage(profile: IUser | null) {
    localStorage.setItem("profile", JSON.stringify(profile));
  }
export const login = async (data: loginType) => {
    try {
      const response = await Api.post("users", data);
  
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400 || error.response?.status === 401) {
          throw new Error(
            "Email ou senha inválidos. Tente novamente ou crie uma nova conta."
          );
        }
      } else {
        throw new Error("Credenciais inválidas");
      }
      throw error;
    }
  };