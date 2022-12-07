import { Cargo } from "./cargo"

export interface Funcionario {

    id?: number,
    nome: string,
    email: string,
    cpf: string,
    perfil?: string,
    cargo: Cargo,
    foto?: string,    
    senha: string

}
