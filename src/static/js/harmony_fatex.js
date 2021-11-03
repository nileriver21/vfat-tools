
$(function() {
    consoleInit(main)
      });
    
    const FATExDAO_CHEF_ABI = [
        {
            "inputs": [
                {
                    "name": "_fate",
                    "type": "address",
                    "internalType": "contract FateToken"
                },
                {
                    "internalType": "contract RewardSchedule",
                    "type": "address",
                    "name": "_emissionSchedule"
                },
                {
                    "name": "_vault",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "type": "constructor",
            "stateMutability": "nonpayable"
        },
        {
            "anonymous": false,
            "type": "event",
            "name": "ClaimRewards",
            "inputs": [
                {
                    "type": "address",
                    "indexed": true,
                    "name": "user",
                    "internalType": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false
                }
            ]
        },
        {
            "name": "Deposit",
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "pid",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "amount",
                    "indexed": false
                }
            ],
            "type": "event",
            "anonymous": false
        },
        {
            "name": "EmergencyWithdraw",
            "anonymous": false,
            "type": "event",
            "inputs": [
                {
                    "type": "address",
                    "internalType": "address",
                    "indexed": true,
                    "name": "user"
                },
                {
                    "type": "uint256",
                    "indexed": true,
                    "name": "pid",
                    "internalType": "uint256"
                },
                {
                    "internalType": "uint256",
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ]
        },
        {
            "anonymous": false,
            "name": "EmissionScheduleSet",
            "inputs": [
                {
                    "internalType": "address",
                    "indexed": true,
                    "name": "emissionSchedule",
                    "type": "address"
                }
            ],
            "type": "event"
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "anonymous": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "previousOwner",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ]
        },
        {
            "anonymous": false,
            "type": "event",
            "inputs": [
                {
                    "internalType": "address",
                    "indexed": true,
                    "type": "address",
                    "name": "emissionSchedule"
                }
            ],
            "name": "VaultSet"
        },
        {
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "pid",
                    "internalType": "uint256",
                    "type": "uint256",
                    "indexed": true
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false
                }
            ],
            "anonymous": false,
            "type": "event",
            "name": "Withdraw"
        },
        {
            "stateMutability": "view",
            "type": "function",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "name": "BONUS_MULTIPLIER",
            "constant": true,
            "signature": "0x8aa28550"
        },
        {
            "stateMutability": "view",
            "type": "function",
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract RewardSchedule"
                }
            ],
            "name": "emissionSchedule",
            "inputs": [],
            "constant": true,
            "signature": "0xed51e69c"
        },
        {
            "type": "function",
            "inputs": [],
            "name": "fate",
            "outputs": [
                {
                    "type": "address",
                    "name": "",
                    "internalType": "contract FateToken"
                }
            ],
            "stateMutability": "view",
            "constant": true,
            "signature": "0x1c703655"
        },
        {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "outputs": [
                {
                    "internalType": "contract IMigratorChef",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "migrator",
            "constant": true,
            "signature": "0x7cd07e47"
        },
        {
            "type": "function",
            "name": "owner",
            "stateMutability": "view",
            "outputs": [
                {
                    "internalType": "address",
                    "type": "address",
                    "name": ""
                }
            ],
            "inputs": [],
            "constant": true,
            "signature": "0x8da5cb5b"
        },
        {
            "name": "poolInfo",
            "stateMutability": "view",
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "type": "function",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "lpToken",
                    "type": "address"
                },
                {
                    "name": "allocPoint",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastRewardBlock",
                    "type": "uint256"
                },
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "accumulatedFatePerShare"
                }
            ],
            "constant": true,
            "signature": "0x1526fe27"
        },
        {
            "stateMutability": "nonpayable",
            "name": "renounceOwnership",
            "inputs": [],
            "outputs": [],
            "type": "function"
        },
        {
            "stateMutability": "view",
            "name": "startBlock",
            "inputs": [],
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "type": "function",
            "constant": true,
            "signature": "0x48cd4cb1"
        },
        {
            "stateMutability": "view",
            "outputs": [
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": ""
                }
            ],
            "name": "totalAllocPoint",
            "inputs": [],
            "type": "function",
            "constant": true,
            "signature": "0x17caf6f1"
        },
        {
            "stateMutability": "nonpayable",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "name": "transferOwnership",
            "type": "function"
        },
        {
            "type": "function",
            "name": "userInfo",
            "inputs": [
                {
                    "name": "",
                    "internalType": "uint256",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "internalType": "address",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "outputs": [
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "amount"
                },
                {
                    "type": "uint256",
                    "name": "rewardDebt",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "function",
            "stateMutability": "view",
            "outputs": [
                {
                    "type": "address",
                    "internalType": "address",
                    "name": ""
                }
            ],
            "name": "vault",
            "inputs": [],
            "constant": true,
            "signature": "0xfbfa77cf"
        },
        {
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "name": "poolLength",
            "inputs": [],
            "type": "function",
            "stateMutability": "view",
            "constant": true,
            "signature": "0x081e3eda"
        },
        {
            "name": "add",
            "stateMutability": "nonpayable",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_allocPoint",
                    "internalType": "uint256"
                },
                {
                    "type": "address",
                    "name": "_lpToken",
                    "internalType": "contract IERC20"
                },
                {
                    "type": "bool",
                    "internalType": "bool",
                    "name": "_withUpdate"
                }
            ],
            "outputs": [],
            "type": "function"
        },
        {
            "name": "set",
            "inputs": [
                {
                    "name": "_pid",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_allocPoint",
                    "internalType": "uint256",
                    "type": "uint256"
                },
                {
                    "name": "_withUpdate",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "inputs": [
                {
                    "internalType": "contract IMigratorChef",
                    "name": "_migrator",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "outputs": [],
            "name": "setMigrator"
        },
        {
            "type": "function",
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "name": "migrate",
            "outputs": []
        },
        {
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "type": "function",
            "stateMutability": "view",
            "name": "pendingFate",
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                },
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "inputs": [],
            "type": "function",
            "name": "massUpdatePools",
            "stateMutability": "nonpayable",
            "outputs": []
        },
        {
            "outputs": [
                {
                    "name": "",
                    "internalType": "uint256",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getNewRewardPerBlock",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "pid1",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "_pid",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "name": "updatePool",
            "type": "function",
            "stateMutability": "nonpayable",
            "outputs": []
        },
        {
            "type": "function",
            "name": "deposit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "inputs": [
                {
                    "name": "_pid",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "_amount",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "name": "withdraw",
            "outputs": [],
            "type": "function",
            "stateMutability": "nonpayable",
            "inputs": [
                {
                    "internalType": "uint256",
                    "type": "uint256",
                    "name": "_pid"
                },
                {
                    "internalType": "uint256",
                    "type": "uint256",
                    "name": "_amount"
                }
            ]
        },
        {
            "type": "function",
            "name": "claimReward",
            "stateMutability": "nonpayable",
            "outputs": [],
            "inputs": [
                {
                    "internalType": "uint256",
                    "type": "uint256",
                    "name": "_pid"
                }
            ]
        },
        {
            "type": "function",
            "stateMutability": "nonpayable",
            "outputs": [],
            "name": "claimRewards",
            "inputs": [
                {
                    "name": "_pids",
                    "internalType": "uint256[]",
                    "type": "uint256[]"
                }
            ]
        },
        {
            "type": "function",
            "outputs": [],
            "inputs": [
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "_pid"
                }
            ],
            "name": "emergencyWithdraw",
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "outputs": [],
            "name": "setEmissionSchedule",
            "stateMutability": "nonpayable",
            "inputs": [
                {
                    "name": "_emissionSchedule",
                    "internalType": "contract RewardSchedule",
                    "type": "address"
                }
            ]
        },
        {
            "type": "function",
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_vault",
                    "type": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable",
            "name": "setVault"
        }
    ]

    async function main() {
        const App = await init_ethers();
    
        _print(`Initialized ${App.YOUR_ADDRESS}\n`);
        _print("Reading smart contracts...\n");
    
       const FATExDAO_CHEF_ADDR = "0xef1a47106b5b1eb839a2995fb29fa5a7ff37be27";
       const rewardTokenTicker = "FATE";
       const FATExDAO_CHEF = new ethers.Contract(FATExDAO_CHEF_ADDR, FATExDAO_CHEF_ABI, App.provider);
    
        const tokens = {};
        const prices = await getHarmonyPrices();
    
        await loadFateChefContract(App, tokens, prices, FATExDAO_CHEF, FATExDAO_CHEF_ADDR, FATExDAO_CHEF_ABI, rewardTokenTicker,
            "fate", "pendingFate");
    
        hideLoading();
      }
    
async function getFatePoolInfo(app, chefContract, chefAddress, poolIndex, pendingRewardsFunction) {
  const poolInfo = await chefContract.poolInfo(poolIndex);
  if (poolInfo.allocPoint == 0) {
    return {
      address: poolInfo.lpToken,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: null,
      userStaked : 0,
      pendingRewardTokens : 0,
    };
  }
  const multiplier = chefContract.BONUS_MULTIPLIER();
  const rewardsPerWeek = chefContract.getNewRewardPerBlock(poolIndex) / 1e18 * 604800 * multiplier / 2
  const poolToken = await getHarmonyToken(app, poolInfo.lpToken, chefAddress);
  const userInfo = await chefContract.userInfo(poolIndex, app.YOUR_ADDRESS);
  const pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](poolIndex, app.YOUR_ADDRESS);
  const staked = userInfo.amount / 10 ** poolToken.decimals;
  return {
      address: poolInfo.lpToken,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: poolToken,
      userStaked : staked,
      pendingRewardTokens : pendingRewardTokens / 10 ** 18,
      rewardsPerWeek : rewardsPerWeek
  };
}

async function loadFateChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
  rewardTokenFunction, pendingRewardsFunction,
  deathPoolIndices, hideFooter) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = parseInt(await chefContract.poolLength(), 10);
  const totalAllocPoints = await chefContract.totalAllocPoint();

  _print(`Found ${poolCount} pools.\n`)

  _print(`Showing incentivized pools only.\n`);

  var tokens = {};

  const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
  const rewardToken = await getHarmonyToken(App, rewardTokenAddress, chefAddress);

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getFatePoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getHarmonyToken(App, address, chefAddress);
  }));

  if (deathPoolIndices) {   //load prices for the deathpool assets
    deathPoolIndices.map(i => poolInfos[i])
                     .map(poolInfo =>
      poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "Harmony") : undefined);
  }

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "Harmony") : undefined);


  _print("Finished reading smart contracts.\n");

  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printChefPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        totalAllocPoints, poolInfos[i].rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
        pendingRewardsFunction, null, null, "bsc")
      aprs.push(apr);
    }
  }
  let totalUserStaked=0, totalStaked=0, averageApr=0;
  for (const a of aprs) {
    if (!isNaN(a.totalStakedUsd)) {
      totalStaked += a.totalStakedUsd;
    }
    if (a.userStakedUsd > 0) {
      totalUserStaked += a.userStakedUsd;
      averageApr += a.userStakedUsd * a.yearlyAPR / 100;
    }
  }
  averageApr = averageApr / totalUserStaked;

  if (!hideFooter) {
    _print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
    if (totalUserStaked > 0) {
      _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)} at an average APR of ${(averageApr * 100).toFixed(2)}%`)
      _print(`Estimated earnings:`
          + ` Day $${formatMoney(totalUserStaked*averageApr/365)}`
          + ` Week $${formatMoney(totalUserStaked*averageApr/52)}`
          + ` Year $${formatMoney(totalUserStaked*averageApr)}\n`);
    }
  }

  return { prices, totalUserStaked, totalStaked, averageApr }
}