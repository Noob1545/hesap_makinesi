//değişkenler
let dizi = []
let input = document.getElementById("input");
let buton = document.getElementById("buton");
let buton1 = document.getElementById("buton1");
let buton2 = document.getElementById("buton2");
let buton3 = document.getElementById("buton3");
let buton4 = document.getElementById("buton4");
let buton5 = document.getElementById("buton5");
let buton6 = document.getElementById("buton6");
let buton7 = document.getElementById("buton7");
let buton8 = document.getElementById("buton8");
let buton9 = document.getElementById("buton9");
let buton0 = document.getElementById("buton0");
let butontopla = document.getElementById("butontopla");
let butoncikar = document.getElementById("butoncikar");
let butoncarp = document.getElementById("butoncarp")
let butonbol = document.getElementById("butonbol")
let butonbul = document.getElementById("butonbul")
let butonsil = document.getElementById("butonsil")

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault()
    }
});

//butonlar
buton.onmousedown = function(){
    input.value += 1
}

buton1.onmousedown = function(){
    input.value += 2
}

buton2.onmousedown = function(){
    input.value += 3
}
buton3.onmousedown = function(){
    input.value += 4
}

buton4.onmousedown = function(){
    input.value += 5
}

buton5.onmousedown = function(){
    input.value += 6
}

buton6.onmousedown = function(){
    input.value += 7
}

buton7.onmousedown = function(){
    input.value += 8
}

buton8.onmousedown = function(){
    input.value += 9
}

buton9.onmousedown = function(){
    input.value += 0
}

buton0.onmousedown = function(){
    window.location.reload()
}

window.addEventListener("keydown",function(event){
    if(event.keyCode == 8){
        input.value = input.value.slice(0,-1)
    }
})

//toplama butonu
butontopla.onmousedown = function(){
    let yeniStr = input.value.slice(0, input.value.indexOf(input.value) + input.value.length);
    console.log(yeniStr);
    input.value += "+"
    butonbul.onclick = function(){
    let index = input.value.indexOf("+");
    let silinmisCumle = input.value.substring(index + 1);
    console.log(silinmisCumle);
    const sonuc = (parseInt(yeniStr) + parseInt(silinmisCumle))
    if(isNaN(sonuc)){
        alert("lütfen düzgün bir matematiksel işlem giriniz.")
    }
    else{
        let create = document.createElement("span")
        create.style.cursor = "pointer"
        create.onclick = function(event){
            event.preventDefault()
            create.remove()
    }
    create.innerHTML = input.value+" = "+sonuc+"<br/><br/>"
    input.value = sonuc
    dizi.push(create.innerHTML)
    console.log(dizi);

    document.getElementsByTagName("div")[1].append(create)
    butonsil.onclick = function(){
        yeniStr = input.value.slice(0, input.value.indexOf(input.value) + input.value.length);
        console.log(yeniStr);
        silinmisCumle = input.value.substring(index + 1);
        console.log(silinmisCumle);
        input.value = input.value.slice(0,-1)
    }
    }
}
}

//çıkarma butonu
butoncikar.onmousedown = function(){
    let yeniStr = input.value.slice(0, input.value.indexOf(input.value) + input.value.length);
    console.log(yeniStr);
    input.value += "-"
    butonbul.onclick = function(){
    let index = input.value.indexOf("-");
    let silinmisCumle = input.value.substring(index + 1);
    console.log(silinmisCumle);
    const sonuc = (parseInt(yeniStr) - parseInt(silinmisCumle))
    if(isNaN(sonuc)){
        alert("lütfen düzgün bir matematiksel işlem giriniz")
    }
    else{
        let create = document.createElement("span")
    create.style.cursor = "pointer"
    create.onclick = function(event){
        event.preventDefault()
        create.remove()
    }
    create.innerHTML = input.value+" = "+sonuc+"<br/><br/>"
    input.value = sonuc
    dizi.push(create.innerHTML)
    console.log(dizi);

    document.getElementsByTagName("div")[1].append(create)
    butonsil.onclick = function(){
        yeniStr = input.value.slice(0, input.value.indexOf(input.value) + input.value.length);
        console.log(yeniStr);
        silinmisCumle = input.value.substring(index + 1);
        console.log(silinmisCumle);
        input.value = input.value.slice(0,-1)
    }
    }
}
}

//çarpma butonu
butoncarp.onmousedown = function(){
    let yeniStr = input.value.slice(0, input.value.indexOf(input.value) + input.value.length);
    console.log(yeniStr);
    input.value += "x"
    butonbul.onclick = function(){
    let index = input.value.indexOf("x");
    let silinmisCumle = input.value.substring(index + 1);
    console.log(silinmisCumle);
    const sonuc = (parseInt(yeniStr) * parseInt(silinmisCumle))
    if(isNaN(sonuc)){
        alert("lütfen düzgün bir matematiksel işlem giriniz")
    }
    else{
        let create = document.createElement("span")
    create.style.cursor = "pointer"
    create.onclick = function(event){
        event.preventDefault()
        create.remove()
    }
    create.innerHTML = input.value+" = "+sonuc+"<br/><br/>"
    input.value = sonuc
    dizi.push(create.innerHTML)
    console.log(dizi);

    document.getElementsByTagName("div")[1].append(create)
    butonsil.onclick = function(){
        yeniStr = input.value.slice(0, input.value.indexOf(input.value) + input.value.length);
        console.log(yeniStr);
        silinmisCumle = input.value.substring(index + 1);
        console.log(silinmisCumle);
        input.value = input.value.slice(0,-1)
    }
    }
}
}

//bölme butonu
butonbol.onmousedown = function(){
    let yeniStr = input.value.slice(0, input.value.indexOf(input.value) + input.value.length);
    console.log(yeniStr);
    input.value += "÷"
    butonbul.onclick = function(){
    let index = input.value.indexOf("÷");
    let silinmisCumle = input.value.substring(index + 1);
    console.log(silinmisCumle);
    const sonuc = (parseInt(yeniStr) / parseInt(silinmisCumle))
    if(isNaN(sonuc)){
        alert("lütfen düzgün bir matematiksel işlem giriniz.")
    }
    else{
        let create = document.createElement("span")
    create.style.cursor = "pointer"
    create.onclick = function(event){
        event.preventDefault()
        create.remove()
    }
    create.innerHTML = input.value+" = "+sonuc+"<br/><br/>"
    input.value = sonuc
    dizi.push(create.innerHTML)
    console.log(dizi);

    document.getElementsByTagName("div")[1].append(create)
    butonsil.onclick = function(){
        yeniStr = input.value.slice(0, input.value.indexOf(input.value) + input.value.length);
        console.log(yeniStr);
        silinmisCumle = input.value.substring(index + 1);
        console.log(silinmisCumle);
        input.value = input.value.slice(0,-1)
    }
    }
}
}
butonsil.onclick = function(){
    input.value = input.value.slice(0,-1)
}

setInterval(function(){
    if(input.value.includes("+") || input.value.includes("-") || input.value.includes("x") || input.value.includes("÷") || input.value == ""){
        document.getElementById("butontopla").disabled = true
        document.getElementById("butontopla").style.cursor = "not-allowed"
        document.getElementById("butoncikar").disabled = true
        document.getElementById("butoncikar").style.cursor = "not-allowed"
        document.getElementById("butoncarp").disabled = true
        document.getElementById("butoncarp").style.cursor = "not-allowed"
        document.getElementById("butonbol").disabled = true
        document.getElementById("butonbol").style.cursor = "not-allowed"
        document.getElementById("butonbul").disabled = true
        document.getElementById("butonbul").style.cursor = "not-allowed"
    }
    else{
        document.getElementById("butontopla").disabled = false
        document.getElementById("butontopla").style.cursor = "pointer"
        document.getElementById("butoncikar").disabled = false
        document.getElementById("butoncikar").style.cursor = "pointer"
        document.getElementById("butoncarp").disabled = false
        document.getElementById("butoncarp").style.cursor = "pointer"
        document.getElementById("butonbol").disabled = false
        document.getElementById("butonbol").style.cursor = "pointer"
    }
    if(input.value.includes("+") || input.value.includes("-") || input.value.includes("x") || input.value.includes("÷")){
        document.getElementById("butonbul").disabled = false
        document.getElementById("butonbul").style.cursor = "pointer"
    }
    else{
        document.getElementById("butonbul").disabled = true
        document.getElementById("butonbul").style.cursor = "not-allowed"
    }

    if(input.value == ""){
        document.getElementById("butonsil").disabled = true
        document.getElementById("butonsil").style.cursor = "not-allowed"
    }
    else{
        document.getElementById("butonsil").disabled = false
        document.getElementById("butonsil").style.cursor = "pointer"
    }
})
window.addEventListener("keydown",function(event){
    if(event.keyCode == 48){
        input.value += 0
    }
    if(event.keyCode == 49){
        input.value += 1
    }
    if(event.keyCode == 50){
        input.value += 2
    }
    if(event.keyCode == 51){
        input.value += 3
    }
    if(event.keyCode == 52){
        input.value += 4
    }
    if(event.keyCode == 53){
        input.value += 5
    }
    if(event.keyCode == 54){
        input.value += 6
    }
    if(event.keyCode == 55){
        input.value += 7
    }
    if(event.keyCode == 56){
        input.value += 8
    }
    if(event.keyCode == 57){
        input.value += 9
    }
    if(event.key == "Enter"){
        butonbul.click()
    }
})