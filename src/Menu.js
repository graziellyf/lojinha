import React from "react";

function Menu(){
    const [fundo, setfundo] = React.useState("black")

const estilo = {
    backgroundColor: fundo,
    color: "white"
}

    return(
        <div style={estilo}>
            <p> Lojinha da Grazi <button onClick={ ()=>setfundo( fundo == "black" ? "red" : "black") }> Fundo </button> </p>
        </div>
    )
}

export default Menu;