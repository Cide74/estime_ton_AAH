import axios from "axios";

export default axios.create({
  baseURL: "https://projet-estime-ton-aah-back.herokuapp.com",
  timeout: 6500
});
/*
postgres://yblkbrqh:UqtEgL4auyMVO656LSLoyIAyCSDKpNMQ@hattie.db.elephantsql.com/yblkbrqh


https://api.elephantsql.com/console/8b017cae-9294-46b1-bb4b-05f57f403b1a/details?
*/
