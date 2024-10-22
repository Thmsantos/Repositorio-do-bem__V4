import './graficos.css';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
 
interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
}
 
interface ChartData {
    labels: string[];
    datasets: Dataset[];
}
 
function Graficos() {
    const [charData, setCharData] = useState<ChartData>({
        labels: [],
        datasets: []
    })

    const [pizzaData, setPizzaData] = useState<ChartData>({
        labels: [],
        datasets: []
    });
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5555/getAllAlimentos');
                const data = await response.json();


                //Formatar nome dos alimentos 
                const dataMinusculo = data.map((item: { nome: string; }) => ({
                    ...item,
                    nome: item.nome.toLowerCase()
                }));
 
                const dataFormatado = dataMinusculo.map((item: {nome: string;}) =>({
                    ...item,
                    nome: item.nome
                    .replace(/[áàãâä]/g, 'a')
                    .replace(/[éèêë]/g, 'e')
                    .replace(/[íìîï]/g, 'i')
                    .replace(/[óòõôö]/g, 'o')
                    .replace(/[úùûü]/g, 'u')
                    .replace(/[ç]/g, 'c')
                }));

                // Setar quantidade de alimentos para gerar gráfico
                const novaListaDados = []; 

                for (let i = 0; i < dataFormatado.length; i++) {
                    const alimento = dataFormatado[i].nome;
                    let encontraAlimento = false; 

                    if (novaListaDados.length === 0) {
                        novaListaDados.push({ nome: alimento, quantidade: 1 });

                    } else {

                        for (let j = 0; j < novaListaDados.length; j++) {
                            if (novaListaDados[j].nome === alimento) {
                                novaListaDados[j].quantidade++;
                                encontraAlimento = true; 
                                break; 
                            }
                        }

                        if (!encontraAlimento) {
                            novaListaDados.push({ nome: alimento, quantidade: 1 });
                    
                        }
                    }
                }       

                //Gerar gráficos
                setCharData({
                    labels: novaListaDados.map((item: { nome: string }) => item.nome),
                    datasets: [
                        {
                            label: "Quantidade",
                            data: novaListaDados.map((item: { quantidade: number }) => item.quantidade), 
 
                            backgroundColor: [
                                "rgba(0, 162, 255, 0.7)",     
                                "rgba(0, 137, 209, 0.8)",    
                                "rgba(255, 221, 51, 0.7)",   
                                "rgba(255, 189, 0, 0.8)",   
                                "rgba(255, 165, 0, 0.7)",   
                                "rgba(255, 233, 0, 0.6)",   
                                "rgba(0, 119, 182, 0.6)",   
                                "rgba(0, 90, 156, 0.7)",    
                                "rgba(0, 70, 128, 0.8)",    
                                "rgba(0, 51, 102, 0.6)"       
                            ],
 
                            borderColor: [
                                "rgba(0, 162, 255, 0.7)",     
                                "rgba(0, 137, 209, 0.8)",    
                                "rgba(255, 221, 51, 0.7)",   
                                "rgba(255, 189, 0, 0.8)",   
                                "rgba(255, 165, 0, 0.7)",   
                                "rgba(255, 233, 0, 0.6)",   
                                "rgba(0, 119, 182, 0.6)",   
                                "rgba(0, 90, 156, 0.7)",    
                                "rgba(0, 70, 128, 0.8)",    
                                "rgba(0, 51, 102, 0.6)"       
                            ],  
                            borderWidth: 1.5,
                       }
                    ]
                });

                //Total de cada item em porcentagem
                const total = novaListaDados.reduce((sum, item) => sum + item.quantidade, 0);
                
                setPizzaData({
                    labels: novaListaDados.map((item: { nome: string }) => item.nome),
                    datasets: [
                        {
                            label: "Porcentagem",
                            data: novaListaDados.map((item: { quantidade: number }) => (item.quantidade / total) * 100), // Converte para porcentagem
                            backgroundColor: [
                                "rgba(0, 162, 255, 0.7)",     
                                "rgba(0, 137, 209, 0.8)",    
                                "rgba(255, 221, 51, 0.7)",   
                                "rgba(255, 189, 0, 0.8)",   
                                "rgba(255, 165, 0, 0.7)",   
                                "rgba(255, 233, 0, 0.6)",   
                                "rgba(0, 119, 182, 0.6)",   
                                "rgba(0, 90, 156, 0.7)",    
                                "rgba(0, 70, 128, 0.8)",    
                                "rgba(0, 51, 102, 0.6)"       
                            ],
                            borderColor: [
                                "rgba(0, 162, 255, 0.7)",     
                                "rgba(0, 137, 209, 0.8)",     
                                "rgba(255, 221, 51, 0.7)",    
                                "rgba(255, 189, 0, 0.8)",     
                                "rgba(255, 165, 0, 0.7)",     
                                "rgba(255, 233, 0, 0.6)",     
                                "rgba(0, 119, 182, 0.6)",    
                                "rgba(0, 90, 156, 0.7)",      
                                "rgba(0, 70, 128, 0.8)",      
                                "rgba(0, 51, 102, 0.6)"      
                            ],
                            borderWidth: 1.5,
                        }
                    ]
                });
 
            } catch (error) {
                console.error('Erro ao buscar alimentos:', error);
            }
        };
        fetchData();
    }, []);
 
    return (
        <>
            <h2 className='grafico-estoque-titulo'>Dashboards</h2>
            <div className="container-graficos">
                <div className="grafico-1">
                <Bar 
                    data={charData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { 
                                position: "bottom",
                                labels: {
                                    color: 'white' ,
                                     font:{
                                            size: 13,
                                            family: 'Poppins',
                                            style: 'normal',
                                            weight: 400  
                                        }
                                }
                            },
                            title: {
                                display: true,
                                text: 'Quantidade de alimentos', 
                                color: '#F3B823',
                                font: {
                                    size: 15,
                                    family: 'Poppins',
                                    style: 'normal',
                                    weight: 600
                                }
                            },
                        },
                        scales: {
                            y: {
                                ticks: {
                                    color: 'white',
                                     font:{
                                            size: 13,
                                            family: 'Poppins',
                                            style: 'normal',
                                            weight: 400  
                                        }
                                }
                            },
                            x: {
                                ticks: {
                                    color: 'white' ,
                                     font:{
                                            size: 13,
                                            family: 'Poppins',
                                            style: 'normal',
                                            weight: 400  
                                        }
                                }
                            }
                        }
                    }}
                />
                    
                </div>
 
                <div className="grafico-2">
                <Doughnut 
                        data={pizzaData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { position: "left",
                                    labels: {
                                        color: 'white', 
                                        font:{
                                            size: 13,
                                            family: 'Poppins',
                                            style: 'normal',
                                            weight: 400  
                                        }
                                    }
                                 },
                                title: {
                                    display: true,
                                    text: 'Porcentagem de alimentos', 
                                    color: '#F3B823',
                                    font:{
                                        size: 15,
                                        family: 'Poppins',
                                        style: 'normal',
                                        weight: 600
                                    }
                                }
                            }
                            
                        }}
                    />

                </div>
 
            </div>
        </>
    );
}
 
export default Graficos;

