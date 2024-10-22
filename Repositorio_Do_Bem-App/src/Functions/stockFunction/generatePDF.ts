import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const generatePdf = async () => {
  const doc = new jsPDF();

  try {
    const response = await fetch('http://localhost:5555/getAllAlimentos');
    const data = await response.json();

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Lista de Alimentos', 10, 10);
    
    doc.setLineWidth(0.5);
    doc.line(10, 15, 200, 15);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    const rows = data.map((item: any, index: any) => [
      index + 1,
      item.nome,
      item.validade
    ]);

    autoTable(doc, {
      head: [['Índice', 'Nome', 'Validade']],
      body: rows,
      startY: 20,
      theme: 'grid',
      headStyles: {
        fillColor: [13, 39, 131], 
        textColor: [255, 255, 255]
      },
      styles: { halign: 'center' }
    });

    doc.save('lista_de_alimentos.pdf');
  } catch (error) {
    console.error('Erro ao buscar alimentos:', error);
  }
}

export default generatePdf;
