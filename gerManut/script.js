function mostrarSetores() {
    const setor = document.getElementById("mudSetor").value;
    const configDes = document.getElementById("desCase");
    const configAbt = document.getElementById("abtCase");
    const configExpd = document.getElementById("expdCase");
    const configMiudos = document.getElementById("miudosCase");
    // DESOSSA 
    if (setor === "desossa") {
      configDes.classList.remove("hidden");
    } else {
      configDes.classList.add("hidden");
    }
    // ABATE
    if (setor === "abate") {
        configAbt.classList.remove("hidden");
      }else {
        configAbt.classList.add("hidden");
      }
    // EXPEDIÇÃO/PALETIZAÇÃO
    if (setor === "expedPlt") {
        configExpd.classList.remove("hidden");
      }else {
        configExpd.classList.add("hidden");
      }
    // MIÚDOS
    if (setor === "miudos") {
        configMiudos.classList.remove("hidden");
      }else {
        configMiudos.classList.add("hidden");
      }
  }
function mostrarConfiguracoes(){
    const impressoraDes = document.getElementById("impDesConf").value;
    const impressoraAbt = document.getElementById("impAbtConf").value;
    const impressoraExpd = document.getElementById("impExpConf").value;
    const impressoraMiudos = document.getElementById("impMiuConf").value;   
    const configTsc = document.getElementById("configTsc");
    const configZt = document.getElementById("configZt");
    const configPsgAut = document.getElementById("configPsgAut");   
    const impressoraDesInner = document.getElementById("impDesConf").value;
    const impressoraAbtInner = document.getElementById("impAbtConf").value;
    const impressoraMiudosInner = document.getElementById("impMiuConf").value;
    const label = document.getElementById("labelImpressora");

    if (impressoraDesInner) {
        label.innerHTML = "Impressora Selecionada: " + impressoraDesInner.toUpperCase();
        
    } else if(impressoraAbtInner){
        label.innerHTML = "Impressora Selecionada: " + impressoraAbtInner.toUpperCase();
    } else if(impressoraMiudosInner) {
        label.innerHTML = "Impressora Selecionada: " + impressoraMiudosInner.toUpperCase();
    }else {
        label.innerHTML = "Selecione a impressora";
    }

    // PRINT TSC CONFIG
    if (impressoraDes === "tsc1729" || impressoraDes === "tsc748" || impressoraDes==="tsc934" || impressoraDes ==="tsc924" || impressoraAbt ==="tscRastreabilidade"|| impressoraMiudos==="tscSlIsd"){
        configTsc.classList.remove("hidden");
    } else {
        configTsc.classList.add("hidden");
    }
    

    // PRINT ZTS CONFIG   
    if (impressoraExpd === "ztXXX" || impressoraExpd === "ztQrcodeExp" || impressoraDes === "ztCromo" || impressoraDes=== "ztAdv" || impressoraDes==="ztQrCode" || impressoraDes==="ztRejeito"){
        configZt.classList.remove("hidden");
    } else if(impressoraMiudos === "ztBlcMiu" || impressoraAbt === "ztCouros" || impressoraAbt === "ztMC" || impressoraAbt === "ztBlc"){
        configZt.classList.remove("hidden");
    }else {
        configZt.classList.add("hidden");
    }
    
    

    // PRINT ZE CONFIG
    if (impressoraDes === "ze500") {
        configPsgAut.classList.remove("hidden");
    } else {
        configPsgAut.classList.add("hidden");
    }
}

function mostrarForms() {

    const impressoraDesos = document.getElementById("impDesConf").value;
    const impressoraAbat = document.getElementById("impAbtConf").value;
    const impressoraMiudosFrm = document.getElementById("impMiuConf").value;
    const impressoraExpdFrm = document.getElementById("impExpConf").value;
    const config = document.getElementById("configuracaoTsc").value;
    const configZt = document.getElementById("configuracaoZT").value;
    const configZe = document.getElementById("configuracaoPsgAut").value;
    const formsCbcImpZeZE = document.getElementById("formCbcImpZeZE");
    const formsCorreiaMZeZE = document.getElementById("formCorreiaMZE");
    const formsCorreiaGZeZE = document.getElementById("formCorreiaGZE");
    const formsBrrDstcZeZE = document.getElementById("formBrrDstcZE");
    const formsRcthZeZE = document.getElementById("formRcthZE");
    const formsRoleteZeZE = document.getElementById("formRoleteZE");
    const formCortador = document.getElementById("formsCortador");
    const formCbcImp = document.getElementById("formsCbcImp");
    const formRolete = document.getElementById("#formsRolete");
    const impressoraZE =["ze500"];
    const impressorasTSC = ["tsc1729", "tsc748", "tsc934", "tsc924", "tscRastreabilidade", "tscSlIsd"];
    const impressorasZebras = ["ztXXX","ztQrcodeExp","ztCromo","ztAdv","ztQrCode","ztRejeito","ztBlcMiu","ztCouros","ztMC","ztBlc"]
    // CORTADOR
    if (impressorasTSC.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm) && config === "cortador") {
        formCortador.classList.remove("hidden");
    } else {
        formCortador.classList.add("hidden");
    }
    // CABEÇA IMPRESSÃO TSC
   if (impressorasTSC.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm) && config === "cbcImpTsc") {
        formCbcImp.classList.remove("hidden");
    } else {
        formCbcImp.classList.add("hidden");
    }
    // CABEÇA IMPRESSÃO ZE
    if (impressoraZE.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm||impressoraExpdFrm) && configZe === "cbcImpPsg") {
        formsCbcImpZeZE.classList.remove("hidden");
    } else {
        formsCbcImpZeZE.classList.add("hidden");
    }
    // CABEÇA IMPRESSÃO ZT
    if (impressorasZebras.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm||impressoraExpdFrm) && configZt === "cbcImpZt") {
        formCbcImp.classList.remove("hidden");
    } else {
        formCbcImp.classList.add("hidden");
    }
    // ROLETE TSC
    if (impressorasTSC.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm) && config === "roleteTsc") {
        formRolete.classList.remove("hidden");
    } else {
        formRolete.classList.add("hidden");
    }


    // ROLETE ZT
    if (impressorasZebras.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm||impressoraExpdFrm) && configZt === "roleteZT") {
        formRolete.classList.remove("hidden");
    } else {
        formRolete.classList.add("hidden");
    }
    // ROLETE ZE 
    if (impressoraZE.includes(impressoraDesos) && configZe === "roletePsg") {
        formsRoleteZeZE.classList.remove("hidden");
    } else {
        formsRoleteZeZE.classList.add("hidden");
    }
    // CORREIA M
    if (impressoraZE.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm||impressoraExpdFrm) && configZe === "correiaMPsg") {
        formsCorreiaMZeZE.classList.remove("hidden");
    } else {
        formsCorreiaMZeZE.classList.add("hidden");
    }
    // CORREIA G
    if (impressoraZE.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm||impressoraExpdFrm) && configZe === "correiaGPsg") {
        formsCorreiaGZeZE.classList.remove("hidden");
    } else {
        formsCorreiaGZeZE.classList.add("hidden");
    }
    // BARRA DESTACADORA
    if (impressoraZE.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm||impressoraExpdFrm) && configZe === "barraDstPSG") {
        formsBrrDstcZeZE.classList.remove("hidden");
    } else {
        formsBrrDstcZeZE.classList.add("hidden");
    }
    // RECARTILHADO
    if (impressoraZE.includes(impressoraDesos || impressoraAbat||impressoraMiudosFrm||impressoraExpdFrm) && configZe === "recartilhado") {
        formsRcthZeZE.classList.remove("hidden");
    } else {
        formsRcthZeZE.classList.add("hidden");
    }
}




