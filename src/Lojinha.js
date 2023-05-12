import React, {useState} from 'react';
import { toast } from 'react-toastify';

function Lojinha(props){

    const [ compra, setcompra] = useState(0);
    const [ Itens, setItens] = useState(0);
    

    function Finalizarcompra(){
        setcompra(0);
        toast.success(' Compra finalizada com sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    function realizacompra (preco){
        setcompra (compra + preco )
        setItens (Itens +1);
      }

    return(
        <div> 
            <button className="btn btn-danger mb-4" onClick= {()=> props.setlogin (false)}> Deslogar </button>

      <h1> Lojinha </h1> 
      <p> Itens no carrinho: <span className="badge bg-danger"> {Itens} </span></p>
      <p className="alert alert-info" > Valor total: R$ { compra } </p>
      <button className='btn btn-dark' onClick= {()=> Finalizarcompra () }> Finalizar compra </button>
      

      <hr/>

        <div className="d-flex justify-content-around">

            <div className="card">
                <img src="https://i.pinimg.com/736x/ae/d7/08/aed708802eef315186a9e7a251650ae2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"> Camisa polo </h5>
                    <p class="card-text">R$ 79,90 </p>
                    <button class="btn btn-primary"> Comprar </button>
                </div>
            </div>

            <div className="card">
                <img src="https://i.pinimg.com/564x/3c/88/2e/3c882e9f8abc88d0c9d9e00a471f3f3d.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"> Calça Cargo </h5>
                    <p class="card-text">R$ 120,00</p>
                    <button class="btn btn-primary"> Comprar </button>
                </div>
            </div>

            <div className="card">
                <img src="https://i.pinimg.com/564x/74/51/b9/7451b91adeac3ccf49567aea028feed4.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"> Tênis Nike </h5>
                    <p class="card-text">R$ 110,99</p>
                    <button class="btn btn-primary"> Comprar </button>
                </div>
            </div>

        </div>


            {/* <ul className="list-group d-flex flex-row justify-content-around">

             <li className="list-group-item">
                <p> Camisa polo - R$ 79,90 <button className="btn btn-success ms-3 px3" onClick={ ()=>  realizacompra( 79.90) } > Comprar </button></p>
             </li>

            <li className="list-group-item"> 
                <p> Calça Jeans - R$ 120,00 <button className="btn btn-success ms-2 px3" onClick={ ()=> realizacompra(120.00)}> Comprar </button></p>
                </li>

             <li className="list-group-item">
                <p> Tênis Nike - R$ 110,99 <button className="btn btn-success ms-3 px3" onClick={ ()=> realizacompra( 110.99)}> Comprar </button></p>
             </li>

            </ul> */}

     
        </div>
    )
}
export default Lojinha;