# src

- Install
  - `yarn`
- Run
  - `yarn start`

The file src/index.ts shows a minimal example of pulling in the assetMetadatas from the assetRegistry. The example shows Symbol and MinimalBalance, like this 

{"nativeAssetId":{"token":"LKSM"}}: LKSM MinimalBalance: 500,000,000
{"stableAssetId":0}: taiKSM MinimalBalance: 100,000,000
{"nativeAssetId":{"token":"KAR"}}: KAR MinimalBalance: 100,000,000,000
{"nativeAssetId":{"token":"BNC"}}: BNC MinimalBalance: 8,000,000,000
{"nativeAssetId":{"token":"TAI"}}: TAI MinimalBalance: 1,000,000,000,000
{"foreignAssetId":4}: HKO MinimalBalance: 100,000,000,000
{"foreignAssetId":6}: KICO MinimalBalance: 100,000,000,000,000
{"foreignAssetId":2}: QTZ MinimalBalance: 1,000,000,000,000,000,000
{"nativeAssetId":{"token":"PHA"}}: PHA MinimalBalance: 40,000,000,000
{"foreignAssetId":1}: ARIS MinimalBalance: 10,000,000
{"nativeAssetId":{"token":"KINT"}}: KINT MinimalBalance: 133,330,000
{"foreignAssetId":0}: RMRK MinimalBalance: 100,000,000
{"foreignAssetId":5}: CSM MinimalBalance: 1,000,000,000,000
{"nativeAssetId":{"token":"VSKSM"}}: VSKSM MinimalBalance: 100,000,000
{"nativeAssetId":{"token":"KSM"}}: KSM MinimalBalance: 100,000,000
{"nativeAssetId":{"token":"KUSD"}}: aUSD MinimalBalance: 10,000,000,000
{"nativeAssetId":{"token":"KBTC"}}: KBTC MinimalBalance: 66
{"foreignAssetId":7}: USDT MinimalBalance: 10,000
{"foreignAssetId":3}: MOVR MinimalBalance: 1,000,000,000,000,000

The full list of fields is as follows:

{"name":"0x5461696761204b534d","symbol":"0x7461694b534d","decimals":12,"minimalBalance":100000000}