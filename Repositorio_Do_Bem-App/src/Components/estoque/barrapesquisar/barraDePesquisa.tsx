import './barraDePesquisa.css'

function BarraDePesquisa(){

    function search() {
    let input = (document.getElementById('searchbar')! as HTMLInputElement).value.toLowerCase();
    let rows = document.getElementsByClassName('alimento-row');

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i] as HTMLElement;
        let alimentoNameElement = row.querySelector('.alimentos');
        let alimentoName = alimentoNameElement?.textContent?.toLowerCase() ?? '';

        if (!alimentoName.includes(input)) {
            row.classList.add('hidden'); 
        } else {
            row.classList.remove('hidden'); 

            alimentoNameElement!.innerHTML = alimentoNameElement!.textContent!;

            if (input) {
                let startIndex = alimentoName.indexOf(input);
                let endIndex = startIndex + input.length;
                let originalText = alimentoNameElement!.textContent!;
                let highlightedText = originalText.substring(startIndex, endIndex);


                alimentoNameElement!.innerHTML = 
                    originalText.substring(0, startIndex) +
                    '<span class="highlight">' + highlightedText + '</span>' +
                    originalText.substring(endIndex);
            }
        }
    }
}

    return(
        <>
            <div className='div-pesquisar-alimento'>
                <img className='img-search' src="/src/assets/images/lupa.png" alt="" />
                <input
                 id='searchbar'  
                 type="text" 
                 className="pesquisar-alimento" 
                 placeholder='Pesquisar alimento...' 
                 onKeyUp={search}
                 />
            </div>         
        </>
    );
}

export default BarraDePesquisa;