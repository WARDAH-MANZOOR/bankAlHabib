import { createSoapClient } from "../utils/soapClient";
import dotenv from "dotenv";
dotenv.config();

const WSDL_URL = process.env.WSDL_URL!;
const APP_ID = process.env.APP_ID!;
const APP_PASSWORD = process.env.APP_PASSWORD!;

export const fundTransfer = async (payload: any) => {
  const client = await createSoapClient(WSDL_URL);

  const requestArgs = {
    App_ID: APP_ID,
    APP_Password: APP_PASSWORD,

    obj_User: {
      AgentId: payload.AgentId,
      TieUpCode: payload.TieUpCode,
      UserId: payload.UserId,
      UserPassword: payload.UserPassword,
      BankCode: payload.BankCode,
      AccountNo: payload.AccountNo,

      ApplicantIDType: payload.ApplicantIDType,
      ApplicantIDNo: payload.ApplicantIDNo,
      ApplicantDOB: payload.ApplicantDOB,
      ApplicantName: payload.ApplicantName,
      ApplicantAddress: payload.ApplicantAddress,
      ApplicantCellNo: payload.ApplicantCellNo,
      ApplicantLegalCountry: payload.ApplicantLegalCountry,
      ApplicantNationality: payload.ApplicantNationality,

      BeneficiaryName: payload.BeneficiaryName,
      BeneficiaryIDType: payload.BeneficiaryIDType,
      BeneficiaryIDNo: payload.BeneficiaryIDNo,
      BeneficiaryAddress: payload.BeneficiaryAddress,
      BeneficiaryCountry: payload.BeneficiaryCountry,
      BeneficiaryAccTitle: payload.BeneficiaryAccTitle,
      BeneficiaryBranchName: payload.BeneficiaryBranchName,
      BeneficiaryCity: payload.BeneficiaryCity,

      PurposeOfTransaction: payload.PurposeOfTransaction,
      SourceOfIncome: payload.SourceOfIncome,

      CurrencyID: payload.CurrencyID,
      Amount: payload.Amount,
      TranAmount: payload.TranAmount,

      SessionID: payload.SessionID,       // 👈 TitleFetch ka
      ReferenceNumber: payload.ReferenceNumber,

      DeliveryMode: payload.DeliveryMode,
      EntryMode: payload.EntryMode,
      OnlineStatus: payload.OnlineStatus,
      BulkTransaction: payload.BulkTransaction || false,

      isIBAN: payload.isIBAN || false,
    },

    obj_ResModel: {}
  };

  const result = await new Promise((resolve, reject) => {
    client.FundTransfer(requestArgs, (err: any, res: any) => {
      if (err) return reject(err);
      resolve(res);
    });
  });

  return result;
};
