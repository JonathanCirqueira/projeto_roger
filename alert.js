function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const fano = document.getElementById("txtano");
  const res = document.getElementById("res");

  if (fano.value.length === 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
    return;
  }

  const fsex = document.getElementsByName("radsex");
  const idade = ano - Number(fano.value);
  let genero = "";
  const img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (fsex[0].checked) {
    genero = "Homem";
    if (idade < 10) {
      img.setAttribute("src", "Criança_m.jpg");
    } else if (idade < 21) {
      img.setAttribute("src", "jovem_m.jpg");
    } else if (idade < 50) {
      img.setAttribute("src", "adulto_m.jpg");
    } else {
      img.setAttribute("src", "velho_m.jpg");
    }
  } else if (fsex[1].checked) {
    genero = "Mulher";
    if (idade < 10) {
      img.setAttribute("src", "Criança_f.jpg");
    } else if (idade < 21) {
      img.setAttribute("src", "jovem_f.jpg");
    } else if (idade < 50) {
      img.setAttribute("src", "adulta_f.jpg");
    } else {
      img.setAttribute("src", "velha_f.jpg");
    }
  }

  res.style.textAlign = "center";
  res.innerHTML = `<p style="margin-bottom: 12px; color: #535853;">Detectamos ${genero} com ${idade} anos.</p>`;
  res.appendChild(img);
}
