class Logger {
  constructor(logChannelID,client) {
    this.client = client;
    this.logChannelID = logChannelID;
  }

  Log(message){
    client.servers.get(global.serverID)
  }

}
