import { StatusChamado } from '../enums/status-chamado';
import { Cliente } from './cliente';

export interface Chamado {
    idChamado?: number;
    titulo: string;
    descricao: string;
    dataAbertura?: string;
    dataFechamento?: string;
    status?: StatusChamado;
    funcionario: any;
    cliente: Cliente;
}
