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
    const impressoraDesElem = document.getElementById("impDesConf");
    const impressoraAbtElem = document.getElementById("impAbtConf");
    const impressoraExpdElem = document.getElementById("impExpConf");
    const impressoraMiudosElem = document.getElementById("impMiuConf");
    const configTscElem = document.getElementById("configTsc");
    const configZtElem = document.getElementById("configZt");
    const configPsgAutElem = document.getElementById("configPsgAut");
    const labelImpressoraElem = document.getElementById("labelImpressora");

    let impressoraSelecionada = "";

    if (impressoraDesElem && impressoraDesElem.value) {
        impressoraSelecionada = impressoraDesElem.value.toUpperCase();
    } else if (impressoraAbtElem && impressoraAbtElem.value) {
        impressoraSelecionada = impressoraAbtElem.value.toUpperCase();
    } else if (impressoraMiudosElem && impressoraMiudosElem.value) {
        impressoraSelecionada = impressoraMiudosElem.value.toUpperCase();
    }

    labelImpressoraElem.innerHTML = impressoraSelecionada ? `Impressora Selecionada: ${impressoraSelecionada}` : "Selecione a impressora";

    const impressoraDes = impressoraDesElem ? impressoraDesElem.value : "";
    const impressoraAbt = impressoraAbtElem ? impressoraAbtElem.value : "";
    const impressoraExpd = impressoraExpdElem ? impressoraExpdElem.value : "";
    const impressoraMiudos = impressoraMiudosElem ? impressoraMiudosElem.value : "";

    // PRINT TSC CONFIG
    if (["tsc1729", "tsc748", "tsc934", "tsc924", "tscRastreabilidade", "tscSlIsd"].includes(impressoraDes) || ["tsc1729", "tsc748", "tsc934", "tsc924", "tscRastreabilidade", "tscSlIsd"].includes(impressoraAbt) || ["tsc1729", "tsc748", "tsc934", "tsc924", "tscRastreabilidade", "tscSlIsd"].includes(impressoraMiudos)) {
        configTscElem.classList.remove("hidden");
    } else {
        configTscElem.classList.add("hidden");
    }

    // PRINT ZTS CONFIG
    if (["ztXXX", "ztQrcodeExp", "ztCromo", "ztAdv", "ztQrCode", "ztRejeito"].includes(impressoraDes) || ["ztXXX", "ztQrcodeExp", "ztCromo", "ztAdv", "ztQrCode", "ztRejeito"].includes(impressoraExpd) || ["ztBlcMiu", "ztCouros", "ztMC", "ztBlc"].includes(impressoraMiudos) || ["ztBlcMiu", "ztCouros", "ztMC", "ztBlc"].includes(impressoraAbt)) {
        configZtElem.classList.remove("hidden");
    } else {
        configZtElem.classList.add("hidden");
    }

    // PRINT ZE CONFIG
    if (impressoraDes === "ze500") {
        configPsgAutElem.classList.remove("hidden");
    } else {
        configPsgAutElem.classList.add("hidden");
    }
}

function mostrarForms() {
    const impressoraDesosElem = document.getElementById("impDesConf");
    const impressoraAbatElem = document.getElementById("impAbtConf");
    const impressoraMiudosFrmElem = document.getElementById("impMiuConf");
    const impressoraExpdFrmElem = document.getElementById("impExpConf");
    const configTscElem = document.getElementById("configuracaoTsc");
    const configZtElem = document.getElementById("configuracaoZT");
    const configZeElem = document.getElementById("configuracaoPsgAut");
    const formsCbcImpZeZElem = document.getElementById("formCbcImpZeZE");
    const formsCorreiaMZeZElem = document.getElementById("formCorreiaMZE");
    const formsCorreiaGZeZElem = document.getElementById("formCorreiaGZE");
    const formsBrrDstcZeZElem = document.getElementById("formBrrDstcZE");
    const formsRcthZeZElem = document.getElementById("formRcthZE");
    const formsRoleteZeZElem = document.getElementById("formRoleteZE");
    const formCortadorElem = document.getElementById("formsCortador");
    const formCbcImpElem = document.getElementById("formsCbcImp");
    const formRoleteElem = document.getElementById("formsRolete");

    const impressoraDesos = impressoraDesosElem ? impressoraDesosElem.value : "";
    const impressoraAbat = impressoraAbatElem ? impressoraAbatElem.value : "";
    const impressoraMiudosFrm = impressoraMiudosFrmElem ? impressoraMiudosFrmElem.value : "";
    const impressoraExpdFrm = impressoraExpdFrmElem ? impressoraExpdFrmElem.value : "";
    const configTsc = configTscElem ? configTscElem.value : "";
    const configZt = configZtElem ? configZtElem.value : "";
    const configZe = configZeElem ? configZeElem.value : "";

    const impressorasTSC = ["tsc1729", "tsc748", "tsc934", "tsc924", "tscRastreabilidade", "tscSlIsd"];
    const impressorasZebras = ["ztXXX","ztQrcodeExp","ztCromo","ztAdv","ztQrCode","ztRejeito","ztBlcMiu","ztCouros","ztMC","ztBlc"];
    const impressoraZE =["ze500"];

    const impressoraSelecionada = impressoraDesos || impressoraAbat || impressoraMiudosFrm || impressoraExpdFrm;

    // Função utilitária para verificar se uma impressora pertence a um grupo
    const isImpressoraInGroup = (impressora, grupo) => grupo.includes(impressora);

    // CORTADOR
    if (isImpressoraInGroup(impressoraSelecionada, impressorasTSC) && configTsc === "cortador") {
        formCortadorElem.classList.remove("hidden");
    } else {
        formCortadorElem.classList.add("hidden");
    }

    // CABEÇA IMPRESSÃO
    if ((isImpressoraInGroup(impressoraSelecionada, impressorasTSC) && configTsc === "cbcImpTsc") ||
        (isImpressoraInGroup(impressoraSelecionada, impressorasZebras) && configZt === "cbcImpZt")) {
        formCbcImpElem.classList.remove("hidden");
    } else {
        formCbcImpElem.classList.add("hidden");
    }

    // CABEÇA IMPRESSÃO ZE (Específico ZE500)
    if (isImpressoraInGroup(impressoraDesos, impressoraZE) && configZe === "cbcImpPsg") {
        formsCbcImpZeZElem.classList.remove("hidden");
    } else {
        formsCbcImpZeZElem.classList.add("hidden");
    }

    // ROLETE
    if ((isImpressoraInGroup(impressoraSelecionada, impressorasTSC) && configTsc === "roleteTsc") ||
        (isImpressoraInGroup(impressoraSelecionada, impressorasZebras) && configZt === "roleteZT")) {
        formRoleteElem.classList.remove("hidden");
    } else {
        formRoleteElem.classList.add("hidden");
    }

    // ROLETE ZE (Específico ZE500)
    if (isImpressoraInGroup(impressoraDesos, impressoraZE) && configZe === "roletePsg") {
        formsRoleteZeZElem.classList.remove("hidden");
    } else {
        formsRoleteZeZElem.classList.add("hidden");
    }

    // CORREIA M
    if (isImpressoraInGroup(impressoraSelecionada, impressoraZE) && configZe === "correiaMPsg") {
        formsCorreiaMZeZElem.classList.remove("hidden");
    } else {
        formsCorreiaMZeZElem.classList.add("hidden");
    }

    // CORREIA G
    if (isImpressoraInGroup(impressoraSelecionada, impressoraZE) && configZe === "correiaGPsg") {
        formsCorreiaGZeZElem.classList.remove("hidden");
    } else {
        formsCorreiaGZeZElem.classList.add("hidden");
    }

    // BARRA DESTACADORA
    if (isImpressoraInGroup(impressoraSelecionada, impressoraZE) && configZe === "barraDstPSG") {
        formsBrrDstcZeZElem.classList.remove("hidden");
    } else {
        formsBrrDstcZeZElem.classList.add("hidden");
    }

    // RECARTILHADO
    if (isImpressoraInGroup(impressoraSelecionada, impressoraZE) && configZe === "recartilhado") {
        formsRcthZeZElem.classList.remove("hidden");
    } else {
        formsRcthZeZElem.classList.add("hidden");
    }
}function mostrarForms() {
    const impressoraDesosElem = document.getElementById("impDesConf");
    const impressoraAbatElem = document.getElementById("impAbtConf");
    const impressoraMiudosFrmElem = document.getElementById("impMiuConf");
    const impressoraExpdFrmElem = document.getElementById("impExpConf");
    const configTscElem = document.getElementById("configuracaoTsc");
    const configZtElem = document.getElementById("configuracaoZT");
    const configZeElem = document.getElementById("configuracaoPsgAut");
    const formsCbcImpZeZElem = document.getElementById("formCbcImpZeZE");
    const formsCorreiaMZeZElem = document.getElementById("formCorreiaMZE");
    const formsCorreiaGZeZElem = document.getElementById("formCorreiaGZE");
    const formsBrrDstcZeZElem = document.getElementById("formBrrDstcZE");
    const formsRcthZeZElem = document.getElementById("formRcthZE");
    const formsRoleteZeZElem = document.getElementById("formRoleteZE");
    const formCortadorElem = document.getElementById("formsCortador");
    const formCbcImpElem = document.getElementById("formsCbcImp");
    const formRoleteElem = document.getElementById("formsRolete");

    const impressoraDesos = impressoraDesosElem ? impressoraDesosElem.value : "";
    const impressoraAbat = impressoraAbatElem ? impressoraAbatElem.value : "";
    const impressoraMiudosFrm = impressoraMiudosFrmElem ? impressoraMiudosFrmElem.value : "";
    const impressoraExpdFrm = impressoraExpdFrmElem ? impressoraExpdFrmElem.value : "";
    const configTsc = configTscElem ? configTscElem.value : "";
    const configZt = configZtElem ? configZtElem.value : "";
    const configZe = configZeElem ? configZeElem.value : "";

    const impressorasTSC = ["tsc1729", "tsc748", "tsc934", "tsc924", "tscRastreabilidade", "tscSlIsd"];
    const impressorasZebras = ["ztXXX","ztQrcodeExp","ztCromo","ztAdv","ztQrCode","ztRejeito","ztBlcMiu","ztCouros","ztMC","ztBlc"];
    const impressoraZE =["ze500"];

    const impressoraSelecionada = impressoraDesos || impressoraAbat || impressoraMiudosFrm || impressoraExpdFrm;

    // Função utilitária para verificar se uma impressora pertence a um grupo
    const isImpressoraInGroup = (impressora, grupo) => grupo.includes(impressora);

    // CORTADOR
    if (isImpressoraInGroup(impressoraSelecionada, impressorasTSC) && configTsc === "cortador") {
        formCortadorElem.classList.remove("hidden");
    } else {
        formCortadorElem.classList.add("hidden");
    }

    // CABEÇA IMPRESSÃO
    if ((isImpressoraInGroup(impressoraSelecionada, impressorasTSC) && configTsc === "cbcImpTsc") ||
        (isImpressoraInGroup(impressoraSelecionada, impressorasZebras) && configZt === "cbcImpZt")) {
        formCbcImpElem.classList.remove("hidden");
    } else {
        formCbcImpElem.classList.add("hidden");
    }

    // CABEÇA IMPRESSÃO ZE (Específico ZE500)
    if (isImpressoraInGroup(impressoraDesos, impressoraZE) && configZe === "cbcImpPsg") {
        formsCbcImpZeZElem.classList.remove("hidden");
    } else {
        formsCbcImpZeZElem.classList.add("hidden");
    }

    // ROLETE
    if ((isImpressoraInGroup(impressoraSelecionada, impressorasTSC) && configTsc === "roleteTsc") ||
        (isImpressoraInGroup(impressoraSelecionada, impressorasZebras) && configZt === "roleteZT")) {
        formRoleteElem.classList.remove("hidden");
    } else {
        formRoleteElem.classList.add("hidden");
    }

    // ROLETE ZE (Específico ZE500)
    if (isImpressoraInGroup(impressoraDesos, impressoraZE) && configZe === "roletePsg") {
        formsRoleteZeZElem.classList.remove("hidden");
    } else {
        formsRoleteZeZElem.classList.add("hidden");
    }

    // CORREIA M
    if (isImpressoraInGroup(impressoraSelecionada, impressoraZE) && configZe === "correiaMPsg") {
        formsCorreiaMZeZElem.classList.remove("hidden");
    } else {
        formsCorreiaMZeZElem.classList.add("hidden");
    }

    // CORREIA G
    if (isImpressoraInGroup(impressoraSelecionada, impressoraZE) && configZe === "correiaGPsg") {
        formsCorreiaGZeZElem.classList.remove("hidden");
    } else {
        formsCorreiaGZeZElem.classList.add("hidden");
    }

    // BARRA DESTACADORA
    if (isImpressoraInGroup(impressoraSelecionada, impressoraZE) && configZe === "barraDstPSG") {
        formsBrrDstcZeZElem.classList.remove("hidden");
    } else {
        formsBrrDstcZeZElem.classList.add("hidden");
    }

    // RECARTILHADO
    if (isImpressoraInGroup(impressoraSelecionada, impressoraZE) && configZe === "recartilhado") {
        formsRcthZeZElem.classList.remove("hidden");
    } else {
        formsRcthZeZElem.classList.add("hidden");
    }
}




