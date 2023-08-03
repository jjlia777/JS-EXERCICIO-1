function Cubo(){
    let x = Number(prompt("Qual o valor do lado do cubo?"));
    let valorC = x*x*x
    res='O volume do cubo é '+valorC 'm³';
    alert(res);
    document.gotElementById('a_ret').innerHTML=res
}