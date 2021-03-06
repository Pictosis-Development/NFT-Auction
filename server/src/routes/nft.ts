import express from "express";
import { indexer, rpc } from "../index";
import { Script } from "@ckb-lumos/base";
import { common, secp256k1Blake160 } from "@ckb-lumos/common-scripts";
import { TransactionSkeleton, sealTransaction } from "@ckb-lumos/helpers";
import { buildTransferCkbTx, buildCreateNFTCkbTx, getCkbBalance } from "../generators/ckb";

const routes = express.Router();


routes.post("/build-CreateNFT", async (req: any, res) => {
  try {
    const txSkeleton = await buildCreateNFTCkbTx(req.body);
    return res
      .status(200)
      .json(JSON.stringify({ params: req.body, txSkeleton }));
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

routes.post("/send-CreateNFT", async (req: any, res) => {
  const { params, signatures } = req.body;
  try {
    const txSkeleton = await buildCreateNFTCkbTx(params);
    const tx = sealTransaction(txSkeleton, signatures);
    const txHash = await rpc.send_transaction(tx);
    return res.status(200).json(JSON.stringify({ txHash }));
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

routes.post("/get-CreateNFT", async (req: any, res) => {
    const { lockScript } = req.body;
    try {
      const balance = await getCkbBalance(lockScript);
      return res
        .status(200)
        .json(JSON.stringify({ balance: balance.toString() }));
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  

export default routes;
