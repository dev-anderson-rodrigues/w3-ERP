import { useEffect, useState } from "react";
import { Form } from "./styles";
import { useNavigate } from "react-router-dom";
import { createUserType, loginType } from "../../context/AuthContext/types";
import { getDadosProfileLocalStorage, setDadosProfileLocalStorage } from "../../context/AuthContext/utils";
import { useAuth } from "../../context/AuthContext/useAuth";
import { useForm } from 'react-hook-form';
import Input from "../input";


const FormLogin = () => {
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const { 
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<createUserType>({
    mode: "onSubmit",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const savedCredentials = getDadosProfileLocalStorage();
    if (savedCredentials) {
      try {
        const { email, password } = savedCredentials;

        setValue("email", email);
        setValue("password", password);
      } catch (error) {
        console.error("Failed to parse saved credentials:", error);
      }
    }
  }, [setValue]);
  
  const handleFormSubmit = async (data: loginType) => {
      const credentials = { email: data.email, password: data.password };
      setDadosProfileLocalStorage(credentials);

      try {
        const response = await login({
          email: data.email,
          password: data.password,
        });

        navigate("/dashboard");
        return response;
      } catch (error) {
        if (error instanceof Error) setErrorMessage(error.message);
      }
  };

  return (
    <div>
            <Form
        onSubmit={handleSubmit(
          // Evita o envio automático do formulário
          handleFormSubmit
        )}
      >
        <span>Seja bem vindo!</span>
        <h2>Realize seu Login</h2>
        <Input
          label="Email"
          type="email"
          autoComplete="current-email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email ou senha inválidos",
            },
          })}
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register("password", {
            required: "Senha é obrigatória", pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&.*])[0-9a-zA-Z!@#$%^&*]{6,}$/,
              message: "Email ou senha inválidos!",
              // message: "Senha deve ter pelo menos 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais",
            }
          })}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
        />
        <button type="submit">
          {isSubmitting ? "Loading..." : "Entrar"}
        </button>
        {errorMessage && (
          <div
          >
            {errorMessage}
          </div>
        )}
        
        <div>
         <span>
          <input type="checkbox" />
          <p>Lembre-me</p>
         </span>
        <span>
            <a href="#">Esqueci minha senha</a>
        </span>
        </div>
      </Form>
    </div>
  )
}

export default FormLogin

