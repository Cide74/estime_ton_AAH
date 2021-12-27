import Api from "src/API/index";
import axios from "axios";
import { GET_CHIFFRE, refreshChiffre } from "src/actions/chiffre";

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

const chiffre = store => next => async action => {
  switch (action.type) {
    case GET_CHIFFRE: {
      try {
        const allDatas = await axios.all([
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
          req_tauxInvaliditeMinimum
        ])

        const getAllDatas = refreshChiffre(allDatas);
          console.log(`getAlldatas middle =>`, getAllDatas)

        store.dispatch(getAllDatas);
      } catch (error) {
        console.log("getAllDatas =>", error);
      }
      break;
    }
    default:
      next(action);
  }
};

export default chiffre;
