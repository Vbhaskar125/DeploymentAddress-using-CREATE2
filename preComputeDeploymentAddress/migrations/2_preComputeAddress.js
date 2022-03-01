const preComputeAddress = artifacts.require("./preComputeAddress.sol");

module.exports = function (deployer) {
  deployer.deploy(preComputeAddress);
};
