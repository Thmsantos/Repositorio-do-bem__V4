import { AlimentoData } from './Interfaces/AlimentoData';
import DeleteAlimento from './DeleteAlimento';

export async function debitarAlimento(
    alimentoId: string,
    setAlimentos: React.Dispatch<React.SetStateAction<AlimentoData[]>>
) {
    if (!alimentoId) {
        alert("Selecione um alimento.");
        return;
    }

    const success = await DeleteAlimento(alimentoId);
    if (success) {
        alert("Alimento doado com sucesso!");
        
        setAlimentos(prevAlimentos =>
            prevAlimentos.filter(alimento => alimento.alimentoId !== alimentoId)
        );
    } else {
        alert("Erro ao excluir o alimento.");
    }
}
