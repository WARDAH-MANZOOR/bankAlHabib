// import { createSoapClient } from "../utils/soapClient";
// import dotenv from "dotenv";
// dotenv.config();

// const WSDL_URL = process.env.WSDL_URL!;
// const APP_ID = process.env.APP_ID!;
// const APP_PASSWORD = process.env.APP_PASSWORD!;

// export const fundTransfer = async (payload: any) => {
//   const client = await createSoapClient(WSDL_URL);

//   const requestArgs = {
//     App_ID: APP_ID,
//     APP_Password: APP_PASSWORD,

//     obj_User: {
//       AgentId: payload.AgentId,
//       TieUpCode: payload.TieUpCode,
//       UserId: payload.UserId,
//       UserPassword: payload.UserPassword,
//       BankCode: payload.BankCode,
//       AccountNo: payload.AccountNo,
//       BeneficiaryAcc: payload.BeneficiaryAcc,


//       ApplicantIDType: payload.ApplicantIDType || "",
//       ApplicantIDNo: payload.ApplicantIDNo,
//       ApplicantPlacedOfBirth: payload.ApplicantPlacedOfBirth || "",
//       ApplicantLegalCountry: payload.ApplicantLegalCountry,
//       ApplicantName: payload.ApplicantName,
//       ApplicantAddress: payload.ApplicantAddress,
//       ApplicantCellNo: payload.ApplicantCellNo,
//       BeneficiaryName: payload.BeneficiaryName,
//       BeneficiaryIDType: payload.BeneficiaryIDType || "",
//       BeneficiaryIDNo: payload.BeneficiaryIDNo || "",
//       BeneficiaryAddress: payload.BeneficiaryAddress || "",
//       BeneficiaryCountry: payload.BeneficiaryCountry || "",  
//       PurposeOfTransaction: payload.PurposeOfTransaction,
//       SourceOfIncome: payload.SourceOfIncome || "",
//       CurrencyID: payload.CurrencyID,
//       Amount: payload.Amount,
//       TranAmount: payload.TranAmount,
//       SessionID: payload.SessionID,       // 👈 TitleFetch ka
//       ReferenceNumber: payload.ReferenceNumber,
//       BulkTransaction: payload.BulkTransaction || false,
//       ApplicantNationality: payload.ApplicantNationality || "",
//       ApplicantDOB: payload.ApplicantDOB,
//       BeneficiaryBranchName: payload.BeneficiaryBranchName  || "",
//       BeneficiaryCity: payload.BeneficiaryCity || "",
//       DeliveryMode: payload.DeliveryMode,
//       Relationship: payload.Relationship || "",
//       BeneficiaryCellNo: payload.BeneficiaryCellNo || "",
//       BeneficiaryAccTitle: payload.BeneficiaryAccTitle,
//       EntryMode: payload.EntryMode,
//       OnlineStatus: payload.OnlineStatus,
//       ApplicantIDNoIssueDate: payload.ApplicantIDNoIssueDate || "",
//       ApplicantIDNoExpiryDate : payload.ApplicantIDNoExpiryDate || "",
//       isIBAN: payload.isIBAN || false,
//     },

//     obj_ResModel: {}
//   };

//   const result = await new Promise((resolve, reject) => {
//     client.FundTransfer(requestArgs, (err: any, res: any) => {
//       if (err) return reject(err);
//       resolve(res);
//     });
//   });

//   return result;
// };
import { createSoapClient } from "../utils/soapClient.js";
import dotenv from "dotenv";
dotenv.config();

const WSDL_URL = process.env.WSDL_URL!;
const APP_ID = process.env.APP_ID!;
const APP_PASSWORD = process.env.APP_PASSWORD!;

export const fundTransfer = async (payload: any) => {
  const client = await createSoapClient(WSDL_URL);

  // const requestArgs = {
  //   App_ID: APP_ID,
  //   APP_Password: APP_PASSWORD,
  //   obj_User: {
  //     AccountNo: payload.AccountNo,
  //     AgentId: payload.AgentId,
  //     Amount: payload.Amount,
  //     ApplicantAddress: payload.ApplicantAddress,
  //     ApplicantCellNo: payload.ApplicantCellNo,
  //     ApplicantDOB: payload.ApplicantDOB,
  //     ApplicantIDNo: payload.ApplicantIDNo,
  //     ApplicantLegalCountry: payload.ApplicantLegalCountry,
  //     ApplicantName: payload.ApplicantName,
  //     BankCode: payload.BankCode,
  //     BeneficiaryAcc: payload.BeneficiaryAcc,
  //     BeneficiaryAccTitle: payload.BeneficiaryAccTitle,
  //     BeneficiaryName: payload.BeneficiaryName,
  //     CurrencyID: payload.CurrencyID,
  //     DeliveryMode: payload.DeliveryMode,
  //     EntryMode: payload.EntryMode || "Instant",
  //     OnlineStatus: payload.OnlineStatus,
  //     PurposeOfTransaction: payload.PurposeOfTransaction,
  //     ReferenceNumber: payload.ReferenceNumber,
  //     SessionID: payload.SessionID,
  //     TieUpCode: payload.TieUpCode,
  //     UserId: payload.UserId,
  //     UserPassword: payload.UserPassword,
  //     isIBAN: payload.isIBAN || false,
  //     BeneficiaryBranchName: payload.BeneficiaryBranchName || "",
  //     BeneficiaryCity: payload.BeneficiaryCity || 0,
  //     Relationship: payload.Relationship || "",
  //     BeneficiaryCellNo: payload.BeneficiaryCellNo || "",
  //     ApplicantIDNoIssueDate: payload.ApplicantIDNoIssueDate || "",
  //     ApplicantIDNoExpiryDate: payload.ApplicantIDNoExpiryDate || "",
  //     ApplicantNationality: payload.ApplicantNationality || "",
  //     BulkTransaction: payload.BulkTransaction || false,
  //     TranAmount: payload.TranAmount,
  //   },
  //   obj_ResModel: {}
  // };
    const requestArgs = {
    App_ID: APP_ID,
    APP_Password: APP_PASSWORD,
    obj_User: {
      AccountNo: payload.AccountNo,
      AgentId: payload.AgentId,
      Amount: payload.Amount,
      ApplicantAddress: payload.ApplicantAddress,
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
      DeliveryMode: payload.DeliveryMode,
      EntryMode: payload.EntryMode || "Instant",
      OnlineStatus: payload.OnlineStatus,
      PurposeOfTransaction: payload.PurposeOfTransaction,
      ReferenceNumber: payload.ReferenceNumber,
      SessionID: payload.SessionID,
      TieUpCode: payload.TieUpCode,
      TranAmount: payload.TranAmount,
      UserId: payload.UserId,
      UserPassword: payload.UserPassword,
      isIBAN: payload.isIBAN || false,
    },
    obj_ResModel: {}
  };


  const result = await new Promise((resolve, reject) => {
    client.FundTransfer(requestArgs, (err: any, res: any, rawResponse: any) => {
      if (err) return reject(err);
      console.log("=== RAW RESPONSE ===");
      console.log(rawResponse); // <=== log raw XML response
      console.log("=== RES OBJECT ===");
      console.log(res); // <=== log parsed object

      resolve(res);
    });
  });

  //     // SOAP response may be nested
  //     const fundResult = res.FundTransferResponse?.FundTransferResult;
  //     const responseModel = res.FundTransferResponse?.obj_ResModel;

  //     resolve({ fundResult, responseModel });
  //   });
  // });

  return result;
};
