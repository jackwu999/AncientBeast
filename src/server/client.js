import {Client} from "@heroiclabs/nakama-js/dist/nakama-js.esm";

export default class  ClientCI {
  constructor(clientInfo){
    this._client = new Client(clientInfo.key,clientInfo.ip, clientInfo.port);
    
  }

  get client() {
    return this._client;
  }


}