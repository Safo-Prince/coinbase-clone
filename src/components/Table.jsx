import React from "react";
export default function Table() {
  return (
    <div>
      <div className="flex justify-center mt-32">
        <table className="border-2 w-2/3 p-4   ">
          <tr className="border-2  h-20  ">
            <th>#</th>
            <th className="">Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Chart</th>
            <th>Trade</th>
          </tr>
          <tr className="border-2 hover:bg-gray-50 cursor-pointer h-20">
            <td>1</td>
            <td>
              <img
                className="inline mr-5"
                width="35"
                src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
                alt=""
              />
              Bitcon <span> BTC</span>
            </td>
            <td>$16,637.62</td>
            <td className="text-red-700">-0.97%</td>
            <td></td>
            <td>
              <button className="h-12 w-20 bg-green-700 rounded text-white hover:bg-green-600">
                Buy
              </button>
            </td>
          </tr>
          <tr className="border-2 hover:bg-gray-50 cursor-pointer h-20">
            <td>2</td>
            <td>
              <img
                className="inline mr-5"
                width="35"
                src="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"
                alt=""
              />
              Ethereum <span> ETH</span>
            </td>
            <td>$1266.98</td>
            <td>-3.2%</td>
            <td></td>
            <td>
              <button className="h-12 w-20 bg-green-700 rounded text-white hover:bg-green-600">
                Buy
              </button>
            </td>
          </tr>
          <tr className="border-2 hover:bg-gray-50 cursor-pointer h-20">
            <td>3</td>
            <td>
              <img
                className="inline mr-5"
                width="35"
                src="https://dynamic-assets.coinbase.com/da39dfe3632bf7a9c26b5aff94fe72bc1a70850bc488e0c4d68ab3cf87ddac277cd1561427b94acb4b3e37479a1f73f1c37ed311c11a742d6edf512672aea7bb/asset_icons/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da.png"
                alt=""
              />
              Cardano <span> ADA</span>
            </td>
            <td> $0.33</td>
            <td>-2.85%</td>
            <td></td>
            <td>
              <button className="h-12 w-20 bg-green-700 rounded text-white hover:bg-green-600">
                Buy
              </button>
            </td>
          </tr>
          <tr className="border-2 hover:bg-gray-50 cursor-pointer h-20">
            <td>4</td>
            <td>
              <img
                className="inline mr-5"
                width="35"
                src="https://dynamic-assets.coinbase.com/2eefc7ffd92b6460ebdcab6fd67e384146ecdec29bff68d78f68b5d9cb9af05652a8d78087b6090c6d598f8fb9af1c3c062c33df15d0db3ba8e465b819841820/asset_icons/fd6899026b1e517bbb7995e5c992c71dc33b85edb3b28b66591579d6706deab2.png"
                alt=""
              />
              Solana <span> SOL</span>
            </td>
            <td>$13.87</td>
            <td>-7.22%</td>
            <td></td>
            <td>
              <button className="h-12 w-20 bg-green-700 rounded text-white hover:bg-green-600">
                Buy
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div className="grid grid-cols-2 mt-20">
        <div>
          <h1>Earn up to $16 worth of crypto</h1>
          <h2>
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </h2>
          <button> Start earning</button>
        </div>
        <div>
          <div className="w-2/3 h-28 flex justify-between items-center hover:shadow-xl transition transform  cursor-pointer rounded pt-6">
            <div className="ml-8">
              <img
                className="inline mr-5 mb-4"
                width="35"
                src="https://published-assets.coinbase.com/processed/62/36/62365d11-b992-47f4-beed-588a457f71ed"
              />
              <span className="inline text-3xl "> The Graph</span>
            </div>
            <span className="mr-8 mr-5 text-green-700"> Earn $4 GRT</span>
          </div>
          <div className="w-2/3 h-28 flex justify-between items-center hover:shadow-xl transition ease-in-out delay-150 cursor-pointer rounded pt-6">
            <div className="ml-8">
              <img
                className="inline mr-5 mb-4"
                width="35"
                src="https://published-assets.coinbase.com/processed/07/6e/076edf71-8380-4a3d-9f3c-4601da34f425"
              />
              <span className="inline text-3xl"> Chain</span>
            </div>
            <span className="mr-8 text-green-700"> Earn $4 XCN</span>
          </div>
          <div className="w-2/3 h-28 flex justify-between items-center hover:shadow-xl transition-all cursor-pointer rounded pt-6">
            <div className="ml-8">
              <img
                className="inline mr-5 mb-4"
                width="35"
                src="https://published-assets.coinbase.com/processed/62/66/626691ce-b363-4e21-a0a5-f3e6579a85d3 "
              />
              <span className="inline text-3xl"> Amp</span>
            </div>
            <span className="mr-8 text-green-700"> Earn $3 AMP</span>
          </div>
          <div className="w-2/3 h-28 flex justify-between items-center hover:shadow-xl cursor-pointer rounded pt-6">
            <div className="ml-8">
              <img
                className="inline mr-5 text-3xl mb-4"
                width="35"
                src="https://published-assets.coinbase.com/processed/4c/4e/4c4ea7a0-2905-41a1-8ee5-75e76c14b232"
              />
              <span className="inline text-3xl"> SHPING</span>
            </div>
            <span className="mr-8 text-green-700"> Earn $4 SHPING</span>
          </div>
        </div>
      </div>
    </div>
  );
}
