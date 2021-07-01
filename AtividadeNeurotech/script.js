function mudaImagemInsta1() {
    document.getElementById("insta").src = "imagens/instaColor.png";
}
function mudaImagemInsta2(){
    document.getElementById("insta").src = "imagens/instaBlack.png";
}

function mudaImagemFace1() {
    document.getElementById("face").src = "imagens/faceColor.png";
}
function mudaImagemFace2(){
    document.getElementById("face").src = "imagens/faceBlack.png";
}

function mudaImagemWhats1() {
    document.getElementById("whats").src = "imagens/whatsColor.png";
}
function mudaImagemWhats2(){
    document.getElementById("whats").src = "imagens/whatsBlack.png";
}

function mudaImagemGit1() {
    document.getElementById("git").src = "imagens/gitColor.png";
}
function mudaImagemGit2(){
    document.getElementById("git").src = "imagens/gitBlack.png";
}

function valida_form (){
    if(document.getElementById("nome").value == ""){
        alert('O campo nome deve ser preenchido.');
    }
    else {
        alert("Mensagem enviada!");
    }
    document.getElementById("nome").focus();
    return false
}
 