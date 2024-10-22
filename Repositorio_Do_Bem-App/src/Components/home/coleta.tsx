import './coleta.css'
import GetUsers from '../../Functions/UserFunctions/GetUsers'
import { useEffect, useState } from 'react';
import { UsuarioData } from '../../Functions/UserFunctions/Interfaces/UsuarioData';

export default function Coleta() {
    const [users, setUsers] = useState<UsuarioData[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await GetUsers();
            setUsers(usersData); 
        };

        fetchUsers();
    }, []);

    return (
        <>
            <div id="coleta">
                <h1>Pontos de Coleta</h1>
            </div>
            <div id="endereco">
                {users.map((user) => (
                    <div className="ender" key={user.cnpj}>
                        <div className="titulo">
                            <img src="./src/assets/images/mapas-e-bandeiras 1.png" alt="Mapa" />
                            <h2>{user.nomeEmpresa}</h2>
                        </div>
                        <p>
                            Endereço: R. Salgado de Castro, 400 - Centro, Diadema - SP, 09920-690 <br />
                            Telefone: {user.email} <br />
                            Horário: Segunda a sábado: 08h às 18h
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
