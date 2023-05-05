import React, {useState} from 'react';

function Lojinha(props){

    const [ compra, setcompra] = useState(0);
    const [ Itens, setItens] = useState(0);
    

    function Finalizarcompra(){
        setcompra(0);
        alert("Compra finalizada com sucesso!");
    }

    function realizacompra (preco){
        setcompra (compra + preco )
        setItens (Itens +1);
      }

    return(
        <div> 
            <button onClick= {()=> props.setlogin (false)}> Deslogar </button>

      <h1> Lojinha </h1> 
      <p> Itens no carrinho: {Itens} </p>
      <p> Valor total: R$ { compra } </p>
      <button onClick= {()=> Finalizarcompra () }> Finalizar compra </button>
      

      <hr/>

      <p> Camisa polo - R$ 79,90 <button onClick={ ()=>  realizacompra( 79.90) } > Comprar </button></p>
      <p> Calça Jeans - R$ 120,00 <button onClick={ ()=> realizacompra(120.00)}> Comprar </button></p>
      <p> Tênis Nike - R$ 110,99 <button onClick={ ()=> realizacompra( 110.99)}> Comprar </button></p>
        </div>
    )
}
export default Lojinha;