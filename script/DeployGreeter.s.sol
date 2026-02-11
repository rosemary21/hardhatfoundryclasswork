// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../contracts/Greeter.sol";

contract DeployGreeter is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Greeter greeter = new Greeter("Hello from Celo Sepolia!");
        console.log("Greeter deployed to:", address(greeter));

        vm.stopBroadcast();
    }
}
