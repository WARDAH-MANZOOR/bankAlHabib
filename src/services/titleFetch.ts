import { createSoapClient } from "../utils/soapClient";
import dotenv from "dotenv";
dotenv.config();

const WSDL_URL = process.env.WSDL_URL!;
const APP_ID = process.env.APP_ID!;
const APP_PASSWORD = process.env.APP_PASSWORD!;

export const titleFetch = async (payload: any) => {
  const client = await createSoapClient(WSDL_URL);

  const requestArgs = {
    App_ID: APP_ID,
    APP_Password: APP_PASSWORD,
    ObjACC: {
      AgentId: payload.AgentId,
    },
    obj_User: {
      AccountNo: payload.AccountNo,
      AgentId: payload.AgentId,
      Amount: payload.Amount || 0,
      BankCode: payload.BankCode,
      TieUpCode: payload.TieUpCode,
      UserId: payload.UserId,
      UserPassword: payload.UserPassword,
      isIBAN: payload.isIBAN || false,
    },
    response: "",
  };

  const result = await new Promise((resolve, reject) => {
    client.TitleFetch(requestArgs, (err: any, res: any) => {
      if (err) return reject(err);
      resolve(res);
    });
  });

  // ✅ result already JSON hota hai
  return result;
};
