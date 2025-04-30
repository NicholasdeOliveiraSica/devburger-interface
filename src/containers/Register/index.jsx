import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { api } from '../../services/api'
import * as Yup from 'yup'
import { toast } from "react-toastify"

import * as S from "./styles"
import Logo from "../../assets/logo-1.svg"
import { useNavigate } from "react-router-dom"

import { Button } from '../../components/Button'
import { data } from "react-router-dom"


export function Register() {
  const navigate = useNavigate()

  const schema = Yup.object({
    name: Yup
    .string()
    .required('O nome é um campo obrigatório!')
    .min(3, 'O nome deve ter pelo menos 3 caracteres!'),

    email: Yup
    .string()
    .email('Digite um email válido!')
    .required('O e-mail é um campo obrigatório!'),

    password: Yup
    .string()
    .required('A senha é um campo obrigatório!')
    .min(6, 'A senha deve ter pelo menos 6 caracteres!'),

    passwordConfirm: Yup
    .string()
    .required('A senha é um campo obrigatório!')
    .oneOf([Yup.ref('password')], 'As senhas não conferem!')
  })

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });


  // ajuste de I.A para atrasar o toast em por 0.3s para melhor experiencia
  // -------------------------------

  const onSubmit = async (data) => {
    const { status } = await api.post(
      "/users",
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        validateStatus: () => true
      }
    );

    if (status === 201 || status === 200) {
      setTimeout(() => {
        navigate("/login")
      }, 2000);
      toast.success("Cadastro realizado com sucesso!")
    } else if (status === 409 || status === 422) {
      toast.error("E-mail já cadastrado!")
    } else {
      toast.error("Erro ao cadastrar!")
    }
    console.log(status);
  }
  
  // -----------------------

  return (

    <S.Container>

      <S.SectionOne>
        <img src={Logo} alt={"LOGO DEV-BURGER"} />
      </S.SectionOne>

      <S.SectionTwo>

        <S.Title>Crie uma conta</S.Title>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          
          <div>

          <S.InputContainer>
            <S.Label>Nome</S.Label>
            <S.Input placeholder="Seu Nome Completo" {...register("name")} type="text"></S.Input>
            <p>{errors?.name?.message}</p>
          </S.InputContainer>

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

          <S.InputContainer>
            <S.Label>Confirmar Senha</S.Label>
            <S.Input placeholder="senha123" {...register("passwordConfirm")} type="password"></S.Input>
            <p>{errors?.passwordConfirm?.message}</p>
          </S.InputContainer>

          </div>

          <Button type="submit"> Entrar </Button>

          <S.LinkPhrase>Já possui uma conta? <S.Link to={"/login"}>Clique aqui.</S.Link></S.LinkPhrase>

        </S.Form>

      </S.SectionTwo>

    </S.Container>
  )
}
