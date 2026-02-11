const hre = require("hardhat");

async function main() {
  const greeting = "Hello from Celo Sepolia!";
  const greeter = await hre.ethers.deployContract("Greeter", [greeting]);
  await greeter.waitForDeployment();

  const address = await greeter.getAddress();
  console.log(`Greeter deployed to: ${address}`);
  console.log(`Initial greeting: ${greeting}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
