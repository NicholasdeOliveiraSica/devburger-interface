import { yupResolver } from "@hookform/resolvers/yup"
import { set, useForm } from "react-hook-form"
import { api } from '../../services/api'
import * as Yup from 'yup'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

import * as S from "./styles"
import Logo from "../../assets/logo-1.svg"

import { Button } from '../../components/Button'


export function Login() {
  const navigate = useNavigate()

  const schema = Yup.object({
    email: Yup
    .string()
    .email('Digite um email válido!')
    .required('O e-mail é um campo obrigatório!'),

    password: Yup
    .string()
    .required('A senha é um campo obrigatório!')
    .min(6, 'A senha deve ter pelo menos 6 caracteres!')

  })

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });



  // ajuste do chatgpt para aparecer o toast de pending por 0.5s para melhor experiencia
  // -------------------------------

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        "/session",
        {
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true
        }
      );  
        console.log(status);
      if (status === 200 || status === 201) {
        toast.success("Login realizado com sucesso!")
        setTimeout(() => {
          navigate("/")
        }, 2000)
      } else if (status === 401) {
        toast.error("E-mail ou senha incorretos!")
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error("Tente novamente mais tarde.")
      setTimeout(() => {
        toast.error("Ops! Houve um erro. 😿")
      }, 200)
    }
    
    
  };
  
  // -----------------------

  return (

    <S.Container>

      <S.SectionOne>
        <img src={Logo} alt={"LOGO DEV-BURGER"} />
      </S.SectionOne>

      <S.SectionTwo>

        <S.Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> <br />
        Acesse com seu <span>Login e senha.</span>
        </S.Title>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          
          <div>
          <S.InputContainer>
            <S.Label>E-mail</S.Label>
            <S.Input placeholder="meu.email@email.com" {...register("email")} type="email"></S.Input>
            <p>{errors?.email?.message}</p>
          </S.InputContainer>
          <S.InputContainer>
            <S.Label>Senha</S.Label>
            <S.Input placeholder="senha123" {...register("password")} type="password"></S.Input>
            <p>{errors?.password?.message}</p>
          </S.InputContainer>
          </div>

          <Button type="submit"> Entrar </Button>

          <S.LinkPhrase>Não possui uma conta? <S.Link to={"/cadastro"}>Clique aqui.</S.Link></S.LinkPhrase>

        </S.Form>

      </S.SectionTwo>

    </S.Container>
  )
}
