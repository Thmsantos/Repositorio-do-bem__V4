import jsPDF from 'jspdf';

const generatePdf = async () => {
  const doc = new jsPDF();

  try {
    const response = await fetch('http://localhost:5555/getAllAlimentos')
    const data = await response.json()

    doc.text('Lista de Alimentos', 10, 10)

    for (let i = 0; i < data.length; i++) {
        doc.text(`${i + 1}. Nome: ${data[i].nome}, Id: ${data[i].alimentoId}, Validade: ${data[i].validade}`, 10, 20 + i * 10)
      }

    doc.save('lista_de_alimentos.pdf')
  } catch (error) {
    console.error('Erro ao buscar alimentos:', error);
  }
}

export default generatePdf;


