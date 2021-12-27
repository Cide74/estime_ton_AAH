import { connect } from "react-redux";
import Chiffre from "src/components/Chiffre";
import { getChiffre } from "src/actions/chiffre";

const mapStateToProps = state => ({
  chiffres: state.chiffre,
  resNbArticles: state.chiffre.resNbArticles,
  resNbGuestbooks: state.chiffre.resNbGuestbooks,
  resNbComments: state.chiffre.resNbComments,
  resNbUsers: state.chiffre.resNbUsers,
  resNbSimulations: state.chiffre.resNbSimulations,

  resAahDescription: state.chiffre.resAahDescription,
  resAahDate: state.chiffre.resAahDate,
  resAahMontant: state.chiffre.resAahMontant,

  resMajorationPlafondCoupleDescription: state.chiffre.resMajorationPlafondCoupleDescription,
  resMajorationPlafondCoupleDate: state.chiffre.resMajorationPlafondCoupleDate,
  resMajorationPlafondCoupleCoef: state.chiffre.resMajorationPlafondCoupleCoef,

  resCoefPersonneAChargeDescription: state.chiffre.resCoefPersonneAChargeDescription,
  resCoefPersonneAChargeDate: state.chiffre.resCoefPersonneAChargeDate,
  resCoefPersonneAChargeCoef: state.chiffre.resCoefPersonneAChargeCoef,

  resSmichbDescription: state.chiffre.resSmichbDescription,
  resSmichbDate: state.chiffre.resSmichbDate,
  resSmichbMontant: state.chiffre.resSmichbMontant,

  resSmichbtfDescription: state.chiffre.resSmichbtfDescription,
  resSmichbtfDate: state.chiffre.resSmichbtfDate,
  resSmichbtfNombre: state.chiffre.resSmichbtfNombre,

  resMvaDescription: state.chiffre.resMvaDescription,
  resMvaDate: state.chiffre.resMvaDate,
  resMvaMontant: state.chiffre.resMvaMontant,

  resAgeMinimalDescription: state.chiffre.resAgeMinimalDescription,
  resAgeMinimalDate: state.chiffre.resAgeMinimalDate,
  resAgeMinimalAge: state.chiffre.resAgeMinimalAge,

  resAgeRetraiteDescription: state.chiffre.resAgeRetraiteDescription,
  resAgeRetraiteDate: state.chiffre.resAgeRetraiteDate,
  resAgeRetraiteAge: state.chiffre.resAgeRetraiteAge,

  resTauxInvaliditeDescription: state.chiffre.resTauxInvaliditeDescription,
  resTauxInvaliditeDate: state.chiffre.resTauxInvaliditeDate,
  resTauxInvaliditeTaux: state.chiffre.resTauxInvaliditeTaux,

  resTauxInvaliditeMinimumDescription: state.chiffre.resTauxInvaliditeMinimumDescription,
  resTauxInvaliditeMinimumDate: state.chiffre.resTauxInvaliditeMinimumDate,
  resTauxInvaliditeMinimumTaux: state.chiffre.resTauxInvaliditeMinimumTaux,

});

const mapDispatchToProps = dispatch => ({
  getChiffre: () => {
    const action = getChiffre();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chiffre);
