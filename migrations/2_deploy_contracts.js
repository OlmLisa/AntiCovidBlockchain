var HealthShare = artifacts.require("./HealthShare.sol");
module.exports = function(deployer) {
    deployer.deploy(HealthShare);
};
