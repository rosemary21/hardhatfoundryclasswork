const hre = require("hardhat");

async function main() {
  const greeter = await hre.ethers.deployContract("Greeter");
  await greeter.waitForDeployment();

  const address = await greeter.getAddress();
  console.log(`Greeter deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
