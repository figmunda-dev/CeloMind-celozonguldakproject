import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const cUSD_ADDRESS = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"; // cUSD on Alfajores
  const fee = hre.ethers.utils.parseUnits("0.01", 18); // 0.01 cUSD

  await deploy("PayPerMessageCUSD", {
    from: deployer,
    args: [cUSD_ADDRESS, fee],
    log: true,
  });
};

export default func;
func.tags = ["PayPerMessageCUSD"];
