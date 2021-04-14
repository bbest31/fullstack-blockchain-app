var Token = artifacts.require("./Token.sol");
var EthSwap = artifacts.require("./EthSwap.sol");

module.exports = async function (deployer) {
  await deployer.deploy(Token);
  const token = await Token.deployed();
  await deployer.deploy(EthSwap);
  const ethSwap = await EthSwap.deployed();

  // Transfer all tokens to EthSwap
  await token.transfer(ethSwap.address, '1000000000000000000000000');
};
