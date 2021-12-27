import React,{useEffect, useState} from "react";
import axios from "axios";
import Api from "src/API/index";

import "./style.scss";

const Chiffre = ()  => { 

    /**
   * @param {string} englishDate - format de date en anglais yyyy-mm-dd
   * @returns string
   */
  function dateTransform(englishDate) {
    const enDate = englishDate[0].split("-");
    const [year, month, day] = enDate;
    return [day, month, year].join("-");
  }

  
  // API back-end
  const req_NbArticles = Api.get(`/countarticles`);
  const req_NbGuestbooks = Api.get(`/countguestbooks`);
  const req_NbComments = Api.get(`/countcomments`);
  const req_NbUsers = Api.get(`/countusers`);
  const req_NbSimulations = Api.get(`/countnbsimulations`);
  const req_aah = Api.get(`/apiext/aah`);
  const req_majorationPlafondCouple = Api.get(`/apiext/majorationPlafondCouple`);
  const req_coefPersonneACharge = Api.get(`/apiext/coefPersonneACharge`);
  const req_smichb = Api.get(`/apiext/smichb`);
  const req_smicnbtf = Api.get(`/apiext/smichbtf`);
  const req_mva = Api.get(`/apiext/mva`);
  const req_ageMinimal = Api.get(`/apiext/ageMinimal`);
  const req_ageRetraite = Api.get(`/apiext/ageRetraite`);
  const req_tauxInvalidite = Api.get(`/apiext/tauxInvalidite`);
  const req_tauxInvaliditeMinimum = Api.get(`/apiext/tauxInvaliditeMinimum`);
  
  const [resNbArticles, setValuesNbArticles] = useState("");
  const [resNbGuestbooks, setValuesNbGuestbooks] = useState("");
  const [resNbComments, setValuesNbComments] = useState("");
  const [resNbUsers, setValuesNbUsers] = useState("");
  const [resNbSimulations, setValuesNbSimulation] = useState("");
  const [resAahDescription, setAahDescription] = useState("");
  const [resAahDate, setAahDate] = useState("");
  const [resAahMontant, setAahMontant] = useState("");
  const [resMajorationPlafondCoupleDescription, setMajorationPlafondCoupleDescription] = useState("");
  const [resMajorationPlafondCoupleDate, setMajorationPlafondCoupleDate] = useState("");
  const [resMajorationPlafondCoupleCoef, setMajorationPlafondCoupleCoef] = useState("");
  const [resCoefPersonneAChargeDescription, setCoefPersonneAChargeDescription] = useState("");
  const [resCoefPersonneAChargeDate, setCoefPersonneAChargeDate] = useState("");
  const [resCoefPersonneAChargeCoef, setCoefPersonneAChargeCoef] = useState("");
  const [resSmichbDescription, setSmichbDescription] = useState("");
  const [resSmichbDate, setSmichbDate] = useState("");
  const [resSmichbMontant, setSmichbMontant] = useState("");
  const [resSmichbtfDescription, setSmichbtfDescription] = useState("");
  const [resSmichbtfDate, setSmichbtfDate] = useState("");
  const [resSmichbtfNombre, setSmichbtfMontant] = useState("");
  const [resMvaDescription, setMvaDescription] = useState("");
  const [resMvaDate, setMvaDate] = useState("");
  const [resMvaMontant, setMvaMontant] = useState("");
  const [resAgeMinimalDescription, setAgeMinimalDescription] = useState("");
  const [resAgeMinimalDate, setAgeMinimalDate] = useState("");
  const [resAgeMinimalAge, setAgeMinimalAge] = useState("");
  const [resAgeRetraiteDescription, setAgeRetraiteDescription] = useState("");
  const [resAgeRetraiteDate, setAgeRetraiteDate] = useState("");
  const [resAgeRetraiteAge, setAgeRetraiteAge] = useState("");
  const [resTauxInvaliditeDescription, setTauxInvaliditeDescription] = useState("");
  const [resTauxInvaliditeDate, setTauxInvaliditeDate] = useState("");
  const [resTauxInvaliditeTaux, setTauxInvaliditeTaux] = useState("");
  const [resTauxInvaliditeMinimumDescription, setTauxInvaliditeMinimumDescription] = useState("");
  const [resTauxInvaliditeMinimumDate, setTauxInvaliditeMinimumDate] = useState("");
  const [resTauxInvaliditeMinimumTaux, setTauxInvaliditeMinimumTaux] = useState("");


  useEffect ( async () => {
      await axios.all([
        req_NbArticles,
          req_NbGuestbooks,
          req_NbComments,
          req_NbUsers,
          req_NbSimulations,
          req_aah,
          req_majorationPlafondCouple,
          req_coefPersonneACharge,
          req_smichb,
          req_smicnbtf,
          req_mva,
          req_ageMinimal,
          req_ageRetraite,
          req_tauxInvalidite,
          req_tauxInvaliditeMinimum,
        ]).then(
          axios.spread ((...res) => {
            const resNbArticles = res[0];
            const resNbGuestbooks = res[1];
            const resNbComments = res[2];
            const resNbUsers = res[3];
            const resNbSimulations = res[4];
            //! OpenFisca FRANCE
            const resAah = res[5];
                const resAahMontant = Object.values(resAah.data.aahMontant);
                const resAahDate = Object.keys(resAah.data.aahMontant);
                const aahFrDate = dateTransform(resAahDate);
            const resMajorationPlafondCouple = res[6];
                const resMajorationPlafondCoupleCoef = Object.values(resMajorationPlafondCouple.data.majorationPlafondCoupleCoef);
                const resMajorationPlafondCoupleDate = Object.keys(resMajorationPlafondCouple.data.majorationPlafondCoupleCoef);
                const majorationPlafondCoupleFrDate = dateTransform(resMajorationPlafondCoupleDate);  
            const resCoefPersonneACharge = res[7];
                const resCoefPersonneAChargeCoef = Object.values(resCoefPersonneACharge.data.coefPersonneACharge);
                const resCoefPersonneAChargeDate = Object.keys(resCoefPersonneACharge.data.coefPersonneACharge);
                const coefPersonneAChargeFrDate = dateTransform(resCoefPersonneAChargeDate);                
            const resSmichb = res[8];
                const resSmichbMontant = Object.values(resSmichb.data.smichb);
                const resSmichbDate = Object.keys(resSmichb.data.smichb);
                const smichbFrDate = dateTransform(resSmichbDate);   
            const resSmichbtf = res[9];
                const resSmichbtfNombre = Object.values(resSmichbtf.data.smichbtf);
                const resSmichbtfDate = Object.keys(resSmichbtf.data.smichbtf);
                const smichbtfFrDate = dateTransform(resSmichbtfDate);   
            const resMva = res[10];
                const resMvaMontant = Object.values(resMva.data.mva);
                const resMvaDate = Object.keys(resMva.data.mva);
                const mvaFrDate = dateTransform(resMvaDate);   
            const resAgeMinimal = res[11];
                const resAgeMinimalAge = Object.values(resAgeMinimal.data.ageMinimal);
                const resAgeMinimalDate = Object.keys(resAgeMinimal.data.ageMinimal);
                const ageMinimalFrDate = dateTransform(resAgeMinimalDate);   
            const resAgeRetraite = res[12];
                const resAgeRetraiteAge = Object.values(resAgeRetraite.data.ageRetraite);
                const resAgeRetraiteDate = Object.keys(resAgeRetraite.data.ageRetraite);
                const ageRetraiteFrDate = dateTransform(resAgeRetraiteDate);   
            const resTauxInvalidite = res[13];
                const resTauxInvaliditeTaux = Object.values(resTauxInvalidite.data.tauxInvalidite);
                const resTauxInvaliditeDate = Object.keys(resTauxInvalidite.data.tauxInvalidite);
                const tauxInvaliditeFrDate = dateTransform(resTauxInvaliditeDate);   
            const resTauxInvaliditeMinimum = res[14];
                const resTauxInvaliditeMinimumTaux = Object.values(resTauxInvaliditeMinimum.data.tauxInvaliditeMinimum);
                const resTauxInvaliditeMinimumDate = Object.keys(resTauxInvaliditeMinimum.data.tauxInvaliditeMinimum);
                const tauxInvaliditeMinimumFrDate = dateTransform(resTauxInvaliditeMinimumDate);   

            setValuesNbArticles(resNbArticles.data.message)
            setValuesNbGuestbooks(resNbGuestbooks.data.message)
            setValuesNbComments(resNbComments.data.message)
            setValuesNbUsers(resNbUsers.data.message)
            setValuesNbSimulation(resNbSimulations.data.message)
            setAahDescription((resAah.data.aahDescription).toLowerCase())
            setAahDate(aahFrDate)
            setAahMontant((resAahMontant[0].toFixed(2)))
            setMajorationPlafondCoupleDescription((resMajorationPlafondCouple.data.majorationPlafondCoupleDescription).toLowerCase())
            setMajorationPlafondCoupleDate(majorationPlafondCoupleFrDate)
            setMajorationPlafondCoupleCoef(resMajorationPlafondCoupleCoef[0])
            setCoefPersonneAChargeDescription((resCoefPersonneACharge.data.coefPersonneAChargeDescription).toLowerCase())
            setCoefPersonneAChargeDate(coefPersonneAChargeFrDate)
            setCoefPersonneAChargeCoef(resCoefPersonneAChargeCoef[0])
            setSmichbDescription(resSmichb.data.smichbDescription)
            setSmichbDate(smichbFrDate)
            setSmichbMontant((resSmichbMontant[0].toFixed(2)))
            setSmichbtfDescription((resSmichbtf.data.smichbtfDescription).toLowerCase())
            setSmichbtfDate(smichbtfFrDate)
            setSmichbtfMontant((resSmichbtfNombre[0].toFixed(2)))
            setMvaDescription((resMva.data.mvaDescription).toLowerCase())
            setMvaDate(mvaFrDate)
            setMvaMontant((resMvaMontant[0].toFixed(2)))
            setAgeMinimalDescription((resAgeMinimal.data.ageMinimalDescription).toLowerCase())
            setAgeMinimalDate(ageMinimalFrDate)
            setAgeMinimalAge(resAgeMinimalAge[0])
            setAgeRetraiteDescription((resAgeRetraite.data.ageRetraiteDescription).toLowerCase())
            setAgeRetraiteDate(ageRetraiteFrDate)
            setAgeRetraiteAge(resAgeRetraiteAge[0])
            setTauxInvaliditeDescription((resTauxInvalidite.data.tauxInvaliditeDescription).toLowerCase())
            setTauxInvaliditeDate(tauxInvaliditeFrDate)
            setTauxInvaliditeTaux((resTauxInvaliditeTaux[0])*100)
            setTauxInvaliditeMinimumDescription((resTauxInvaliditeMinimum.data.tauxInvaliditeMinimumDescription).toLowerCase())
            setTauxInvaliditeMinimumDate(tauxInvaliditeMinimumFrDate)
            setTauxInvaliditeMinimumTaux((resTauxInvaliditeMinimumTaux[0])*100)
          })
        ).catch(errors =>{
          console.error(errors);
           res[0].status(500).json({
         // success: false,
         // message:(`Les serveurs d'OpenFisca FRANCE sont indisponible pour le moment`),
          error: error.message})
        })
        
    }, []);


  return (
    <div>
      <h2>Les chiffres</h2>
      <ul>

        <li>{resNbArticles}</li>
        <li>{resNbGuestbooks}</li>
        <li>{resNbComments}</li>
        <li>{resNbUsers}</li>
        <li>{resNbSimulations}</li>

        Les chiffres officiels

        <li> Le {resAahDescription} depuis le {resAahDate} est de {resAahMontant} €</li>
        <li> La {resMajorationPlafondCoupleDescription} depuis le { resMajorationPlafondCoupleDate } est de {resMajorationPlafondCoupleCoef}</li>
        <li>La {resCoefPersonneAChargeDescription} depuis le { resCoefPersonneAChargeDate } est de {resCoefPersonneAChargeCoef}</li>
        <li>Le montant du {resSmichbDescription} depuis le {resSmichbDate} est de {resSmichbMontant} €</li>
        <li>Le {resSmichbtfDescription} depuis le {resSmichbtfDate} est de {resSmichbtfNombre} €</li>
        <li>La {resMvaDescription} depuis le {resMvaDate} est de {resMvaMontant} €</li>
        <li>L'{resAgeMinimalDescription} depuis le {resAgeMinimalDate} est de {resAgeMinimalAge} ans</li>
        <li>L'{resAgeRetraiteDescription} depuis le {resAgeRetraiteDate} est de {resAgeRetraiteAge} ans</li>
        <li>Le {resTauxInvaliditeDescription} depuis le {resTauxInvaliditeDate} est de {resTauxInvaliditeTaux} %</li>
        <li>Le {resTauxInvaliditeMinimumDescription} depuis le {resTauxInvaliditeMinimumDate} est de {resTauxInvaliditeMinimumTaux} %</li>

      </ul>
    </div>
  );
};

export default Chiffre;

