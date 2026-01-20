import * as soap from "soap";

export const createSoapClient = async (wsdlUrl: string) => {
  return new Promise<soap.Client>((resolve, reject) => {
    soap.createClient(wsdlUrl, (err, client) => {
      if (err || !client) return reject(err);
      resolve(client);
    });
  });
};
