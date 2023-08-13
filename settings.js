const Settings = {
    secretKey: 'AAAAA',
    userPass: 'BBBBB',
    databaseName:'CCCCC'
}
const getSecretKey = () => {
    return Settings.secretKey;
}
module.exports.getSecretKey = getSecretKey;
module.exports.userPass = Settings.userPass;
module.exports.databaseName = Settings.databaseName;
