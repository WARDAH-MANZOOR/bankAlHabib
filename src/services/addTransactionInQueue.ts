import { createSoapClient } from "../utils/soapClient.js";
import dotenv from "dotenv";
dotenv.config();

const WSDL_URL = process.env.WSDL_URL!;
const APP_ID = process.env.APP_ID!;
const APP_PASSWORD = process.env.APP_PASSWORD!;

export const addTransactionInQueue = async (payload: any) => {
  const client = await createSoapClient(WSDL_URL);

  // Build SOAP request args based on your XML
  const requestArgs = {
    App_ID: APP_ID,
    APP_Password: APP_PASSWORD,
    objTrans: {
      AccountNo: payload.AccountNo,
      AgentId: payload.AgentId,
      Amount: payload.Amount,
      TranAmount: payload.TranAmount,
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
      Dated: payload.Dated || new Date().toISOString().split('T')[0], // yyyy-mm-dd
      DeliveryMode: 2,   // Queue
      EntryMode: "Queue",
      OnlineStatus: 2,
      PurposeOfTransaction: payload.PurposeOfTransaction,
      ReferenceNo: payload.ReferenceNumber,
      SessionID: payload.SessionID,
      StatusCode: "F",
      TerminalIP: payload.TerminalIP || "",
      TieUpCode: payload.TieUpCode,
      UserId: payload.UserId,
      UserPassword: payload.UserPassword,
      isIBAN: payload.isIBAN || false
    },
    obj_ResModel: {}
  };

  const result = await new Promise((resolve, reject) => {
    client.AddTransactionInQueue(requestArgs, (err: any, res: any, rawResponse: any) => {
      if (err) return reject(err);
      console.log("=== RAW RESPONSE ===");
      console.log(rawResponse);
      console.log("=== RES OBJECT ===");
      console.log(res);
      resolve(res);
    });
  });

  return result;
};
