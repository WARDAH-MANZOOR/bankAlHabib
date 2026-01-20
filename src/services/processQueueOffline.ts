import { createSoapClient } from "../utils/soapClient.js";
import dotenv from "dotenv";
dotenv.config();

const WSDL_URL = process.env.WSDL_URL!;
const APP_ID = process.env.APP_ID!;
const APP_PASSWORD = process.env.APP_PASSWORD!;

export const processQueueOfflineService = async (payload: any) => {
  const client = await createSoapClient(WSDL_URL);

  const requestArgs = {
    App_ID: APP_ID,
    APP_Password: APP_PASSWORD,
    obj_User: {
      AgentId: payload.AgentId,
      StatusCode: payload.StatusCode,
      TieUpCode: payload.TieUpCode,
      UserId: payload.UserId,
      UserPassword: payload.UserPassword,
    },
    obj_ResModel: {}
  };

  return new Promise((resolve, reject) => {
    client.ProcessQueueOffline(requestArgs, (err: any, res: any, rawResponse: any) => {
      if (err) return reject(err);

      console.log("=== RAW RESPONSE ===");
      console.log(rawResponse);
      console.log("=== RES OBJECT ===");
      console.log(res);

      resolve(res);
    });
  });
};
