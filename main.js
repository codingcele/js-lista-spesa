
let lista = ['pane', 'arance', 'acqua', 'pasta', 'formaggio', 'birra', 'salame', 'vino']

for (let i = 0; i < lista.length; i++) {
    const para = document.createElement("li");
    const node = document.createTextNode(lista[i]);
    para.appendChild(node);

    const element = document.getElementById("container");
    element.appendChild(para);
}


i = 0;

while (i < lista.length) {
    const para = document.createElement("li");
    const node = document.createTextNode(lista[i]);
    para.appendChild(node);

    const element = document.getElementById("spesa");
    element.appendChild(para);

    i++
}