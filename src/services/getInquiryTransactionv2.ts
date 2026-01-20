import { createSoapClient } from "../utils/soapClient.js";
import dotenv from "dotenv";
dotenv.config();

const WSDL_URL = process.env.WSDL_URL!;
const APP_ID = process.env.APP_ID!;
const APP_PASSWORD = process.env.APP_PASSWORD!;

export const getInquiryTransactionService = async (payload: any) => {
  const client = await createSoapClient(WSDL_URL);

  const requestArgs = {
    App_ID: APP_ID,
    APP_Password: APP_PASSWORD,
    objTrans: {
      AgentId: payload.AgentId,
      ReferenceNo: payload.ReferenceNo,
      TieUpCode: payload.TieUpCode,
      UserId: payload.UserId,
      UserPassword: payload.UserPassword,
    }
  };

  return new Promise((resolve, reject) => {
    client.GetInquiryTransactionV2(requestArgs, (err: any, res: any, rawResponse: any) => {
      if (err) return reject(err);

      console.log("=== RAW RESPONSE ===");
      console.log(rawResponse);
      console.log("=== RES OBJECT ===");
      console.log(res);

      resolve(res);
    });
  });
};
