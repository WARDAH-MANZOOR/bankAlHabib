
import { createSoapClient } from "../utils/soapClient.js";
import dotenv from "dotenv";
dotenv.config();

const WSDL_URL = process.env.WSDL_URL!;
const APP_ID = process.env.APP_ID!;
const APP_PASSWORD = process.env.APP_PASSWORD!;

export const addTransactionInQueueService = async (payload: any) => {
  const client = await createSoapClient(WSDL_URL);

  const requestArgs = {
    App_ID: APP_ID,
    APP_Password: APP_PASSWORD,
    objTrans: {
      AccountNo: payload.AccountNo,
      AgentId: payload.AgentId,
      Amount: payload.Amount,
      ApplicantCellNo: payload.ApplicantCellNo,
      ApplicantDOB: payload.ApplicantDOB,
      ApplicantIDNo: payload.ApplicantIDNo,
      ApplicantLegalCountry: payload.ApplicantLegalCountry,
      ApplicantName: payload.ApplicantName,
      BankCode: payload.BankCode,
      BeneficiaryAcc: payload.BeneficiaryAcc,
      BeneficiaryAccTitle: payload.BeneficiaryAccTitle,
      BeneficiaryName: payload.BeneficiaryName,
      CurrencyID: payload.CurrencyID,
      Dated: payload.Dated,
      DeliveryMode: payload.DeliveryMode,
      EntryMode: payload.EntryMode || "Queue",
      OnlineStatus: payload.OnlineStatus,
      PurposeOfTransaction: payload.PurposeOfTransaction,
      ReferenceNo: payload.ReferenceNo,
      SessionID: payload.SessionID,
      StatusCode: payload.StatusCode,
      TerminalIP: payload.TerminalIP,
      TieUpCode: payload.TieUpCode,
      TranAmount: payload.TranAmount,
      UserId: payload.UserId,
      UserPassword: payload.UserPassword,
      isIBAN: payload.isIBAN || false,
    },
    obj_ResModel: {}
  };

  return new Promise((resolve, reject) => {
    client.AddTransactionInQueue(requestArgs, (err: any, res: any, rawResponse: any) => {
      if (err) return reject(err);

      console.log("=== RAW RESPONSE ===");
      console.log(rawResponse); // raw XML
      console.log("=== RES OBJECT ===");
      console.log(res); // parsed object

      resolve(res);
    });
  });
};
