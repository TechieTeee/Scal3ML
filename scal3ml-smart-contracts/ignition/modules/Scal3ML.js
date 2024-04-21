const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Scal3MLModule", (m) => {
  // Define parameters for your smart contract deployment
  const unlockTime = m.getParameter("unlockTime", /* Specify unlock time here */);
  const lockedAmount = m.getParameter("lockedAmount", /* Specify locked amount here */);

  // Deploy the Scal3ML contract with the provided parameters
  const scal3ML = m.contract("Scal3ML", [unlockTime], {
    value: lockedAmount, // Include the locked amount as the value if required
  });

  return { scal3ML };
});
