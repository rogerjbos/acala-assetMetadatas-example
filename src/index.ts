const { ApiPromise, WsProvider } = require("@polkadot/api");
const { options } = require("@acala-network/api");

const ACALA_ENDPOINTS = [
  "wss://acala-rpc-0.aca-api.network",
  "wss://acala-rpc-1.aca-api.network",
  "wss://acala-rpc-3.aca-api.network/ws",
];

const KARURA_ENDPOINTS = [
  "wss://karura-rpc-0.aca-api.network",
  "wss://karura-rpc-1.aca-api.network",
  "wss://karura-rpc-2.aca-api.network/ws",
];

const getApi = async (chainName: string) => {
  let apiOptions;

  if (chainName === "acala") {
    apiOptions = options({ provider: new WsProvider(ACALA_ENDPOINTS) });
  } else if (chainName === "karura") {
    apiOptions = options({ provider: new WsProvider(KARURA_ENDPOINTS) });
  } else {
    throw "Invalid chain name";
  }

  return await ApiPromise.create(apiOptions);
};

const main = async () => {
  
  const chain: any = 'karura';

  // Sample output
  // {"name":"0x5461696761204b534d","symbol":"0x7461694b534d","decimals":12,"minimalBalance":100000000}

  const api = await getApi(chain);
  const ent = await api.query.assetRegistry.assetMetadatas.entries();

  let a;
  let b: string;
  var out = "[";  
  ent.forEach(([{ args: [asset] }, value]:any) => {

    a = asset
    b = JSON.stringify(a)
    if (b.search('nativeAssetId') > 0) {
      b = a.value.toHuman().Token;
    } else if (b.search('stableAssetId') > 0) {
      b = "sa://" + a.value.toHuman();
    } else if (b.search('foreignAssetId') > 0) {
      b = "fa://" + a.value.toHuman();
    } else {
      b = "erc20://" + a.value.toHuman();
    }
    
    out += `{"id": "${b}", 
      "name": "${value.toHuman().name}", 
      "symbol": "${value.toHuman().symbol}", 
      "decimals": ${value.toHuman().decimals},
      "minimalBalance": "${value.toHuman().minimalBalance}"},
      `;
  });
  out += "{}]";

  let outj = JSON.parse(out);  
  console.table(outj);
  
}
main().catch(e => console.error(e)).finally(() => process.exit(0))

