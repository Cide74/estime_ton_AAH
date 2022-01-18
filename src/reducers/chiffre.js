
import { REFRESH_CHIFFRE } from "src/actions/chiffre";
import { englishDateTransform } from "../assets/datas/fonction";

const initialState = {
  chiffres : [],
};

const chiffre = (state = initialState, action = {}) => {
  switch (action.type) {
    case REFRESH_CHIFFRE: {

      const aahMontantValue = Object.values(action.payload[5].data.aahMontant);
      const resAahDate = Object.keys(action.payload[5].data.aahMontant);
      const aahFrDate = englishDateTransform(resAahDate);

      const resMajorationPlafondCoupleCoef = Object.values(action.payload[6].data.majorationPlafondCoupleCoef);
      const resMajorationPlafondCoupleDate = Object.keys(action.payload[6].data.majorationPlafondCoupleCoef);
      const majorationPlafondCoupleFrDate = englishDateTransform(resMajorationPlafondCoupleDate); 

      const resCoefPersonneAChargeCoef = Object.values(action.payload[7].data.coefPersonneACharge);
      const resCoefPersonneAChargeDate = Object.keys(action.payload[7].data.coefPersonneACharge);
      const coefPersonneAChargeFrDate = englishDateTransform(resCoefPersonneAChargeDate);  

      const resSmichbMontant = Object.values(action.payload[8].data.smichb);
      const resSmichbDate = Object.keys(action.payload[8].data.smichb);
      const smichbFrDate = englishDateTransform(resSmichbDate);   

      const resSmichbtfNombre = Object.values(action.payload[9].data.smichbtf);
      const resSmichbtfDate = Object.keys(action.payload[9].data.smichbtf);
      const smichbtfFrDate = englishDateTransform(resSmichbtfDate);   

      const resMvaMontant = Object.values(action.payload[10].data.mva);
      const resMvaDate = Object.keys(action.payload[10].data.mva);
      const mvaFrDate = englishDateTransform(resMvaDate);  

      const resAgeMinimalAge = Object.values(action.payload[11].data.ageMinimal);
      const resAgeMinimalDate = Object.keys(action.payload[11].data.ageMinimal);
      const ageMinimalFrDate = englishDateTransform(resAgeMinimalDate); 

      const resAgeRetraiteAge = Object.values(action.payload[12].data.ageRetraite);
      const resAgeRetraiteDate = Object.keys(action.payload[12].data.ageRetraite);
      const ageRetraiteFrDate = englishDateTransform(resAgeRetraiteDate);   

      const resTauxInvaliditeTaux = Object.values(action.payload[13].data.tauxInvalidite);
      const resTauxInvaliditeDate = Object.keys(action.payload[13].data.tauxInvalidite);
      const tauxInvaliditeFrDate = englishDateTransform(resTauxInvaliditeDate);   

      const resTauxInvaliditeMinimumTaux = Object.values(action.payload[14].data.tauxInvaliditeMinimum);
      const resTauxInvaliditeMinimumDate = Object.keys(action.payload[14].data.tauxInvaliditeMinimum);
      const tauxInvaliditeMinimumFrDate = englishDateTransform(resTauxInvaliditeMinimumDate);   

      return {
        ...state,
      //* toutes les datas
        chiffres: action.payload,

      //* les chiffres de notre API
        resNbArticles: action.payload[0].data.message,
        resNbGuestbooks: action.payload[1].data.message,
        resNbComments: action.payload[2].data.message,
        resNbUsers: action.payload[3].data.message,
        resNbSimulations: action.payload[4].data.message,

      //* Les datas d'OpenFisca FRANCE
        resAahDescription: (action.payload[5].data.aahDescription).toLowerCase(),
        resAahDate: aahFrDate,
        resAahMontant: aahMontantValue[0].toFixed(2),

        resMajorationPlafondCoupleDescription: (action.payload[6].data.majorationPlafondCoupleDescription).toLowerCase(),
        resMajorationPlafondCoupleDate: majorationPlafondCoupleFrDate,
        resMajorationPlafondCoupleCoef: resMajorationPlafondCoupleCoef[0],

        resCoefPersonneAChargeDescription: (action.payload[7].data.coefPersonneAChargeDescription).toLowerCase(),
        resCoefPersonneAChargeDate: coefPersonneAChargeFrDate,
        resCoefPersonneAChargeCoef: resCoefPersonneAChargeCoef[0].toFixed(2),

        resSmichbDescription: (action.payload[8].data.smichbDescription).toLowerCase(),
        resSmichbDate: smichbFrDate,
        resSmichbMontant: resSmichbMontant[0].toFixed(2),

        resSmichbtfDescription: (action.payload[9].data.smichbtfDescription).toLowerCase(),
        resSmichbtfDate: smichbtfFrDate,
        resSmichbtfNombre: resSmichbtfNombre[0].toFixed(2),

        resMvaDescription: (action.payload[10].data.mvaDescription).toLowerCase(),
        resMvaDate: mvaFrDate,
        resMvaMontant: resMvaMontant[0].toFixed(2),

        resAgeMinimalDescription: (action.payload[11].data.ageMinimalDescription).toLowerCase(),
        resAgeMinimalDate: ageMinimalFrDate,
        resAgeMinimalAge: resAgeMinimalAge[0].toFixed(0),

        resAgeRetraiteDescription: (action.payload[12].data.ageRetraiteDescription).toLowerCase(),
        resAgeRetraiteDate: ageRetraiteFrDate,
        resAgeRetraiteAge: resAgeRetraiteAge[0].toFixed(0),

        resTauxInvaliditeDescription: (action.payload[13].data.tauxInvaliditeDescription).toLowerCase(),
        resTauxInvaliditeDate: tauxInvaliditeFrDate,
        resTauxInvaliditeTaux: resTauxInvaliditeTaux[0].toFixed(2),

        resTauxInvaliditeMinimumDescription: (action.payload[14].data.tauxInvaliditeMinimumDescription).toLowerCase(),
        resTauxInvaliditeMinimumDate: tauxInvaliditeMinimumFrDate,
        resTauxInvaliditeMinimumTaux: resTauxInvaliditeMinimumTaux[0].toFixed(2),

      };
    }
    default:
      return state;
  }
};
export default chiffre;
