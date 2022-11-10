let body = document.querySelector("body")
body.insertAdjacentHTML("afterbegin", "<header class=header-edit><h1>Virtual Market</h1></header>")
let soma = 0

let main = document.createElement("main")
main.classList.add("main-edit")
body.appendChild(main)

let section = document.createElement("section")
section.classList.add("secaoProdutos")
main.appendChild(section)

let div = document.createElement("div")
div.classList.add("divProdutos")
section.appendChild(div)

let p1 = document.createElement("p")
p1.innerHTML = "item"
p1.classList.add("paragrafoProdutos")
div.appendChild(p1)

let p2 = document.createElement("p")
p2.innerHTML = "preço"
p2.classList.add("paragrafoProdutos")
div.appendChild(p2)

let productList = document.createElement('ul')
productList.classList.add("listaProdutos")
section.appendChild(productList)

let section2 = document.createElement("section")
section2.classList.add("secaoFinal")
main.appendChild(section2)

let div2 = document.createElement("div")
div2.classList.add("divFinal")
section2.appendChild(div2)

let pTotal = document.createElement("p")
pTotal.innerHTML = "Total"
pTotal.classList.add("valorTotal")
div2.appendChild(pTotal)

let buttonEnd = document.createElement("button")
buttonEnd.innerHTML = "Finalizar Comprar"
buttonEnd.classList.add("botao")
section2.appendChild(ButtonEnd)


function listaDeProdutos(arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
        let productDetails = document.createElement("li")
        productDetails.classList.add("produto")
        productList.appendChild(productDetails)

        let nomeProduto = document.createElement("p")
        nomeProduto.classList.add("nome")
        nomeProduto.innerHTML = `${arrObj[i].name}`
        productDetails.appendChild(nomeProduto)

        let precoProduto = document.createElement("span")
        precoProduto.classList.add("preco")
        precoProduto.innerHTML = `R$ ${arrObj[i].price.toFixed(2)}`
        productDetails.appendChild(precoProduto)
    }
}
listaDeProdutos(productsCart)

function somaProdutos(arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
        soma += arrObj[i].price
    } return soma
}
somaProdutos(productsCart)

let spanTotal = document.createElement("span")
spanTotal.innerHTML = `R$ ${soma.toFixed(2)}`
spanTotal.classList.add("valorTotal")
div2.appendChild(spanTotal)

