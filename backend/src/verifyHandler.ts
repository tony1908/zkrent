import { Request, Response } from "express";
import axios from "axios";

export type VerifyReply = {
  code: string;
  detail: string;
};

const verifyEndpoint = `${"https://developer.worldcoin.org"}/api/v1/verify/${""}`;

export const verifyHandler = async (req: Request, res: Response<VerifyReply>) => {
  try {
    console.log("Received request to verify credential:\n", req.body);

    const reqBody = {
      nullifier_hash: req.body.nullifier_hash,
      merkle_root: req.body.merkle_root,
      proof: req.body.proof,
      verification_level: req.body.verification_level,
      action: req.body.action,
      signal: req.body.signal,
    };

    console.log("Sending request to World ID /verify endpoint:\n", reqBody);

    const verifyRes = await axios.post(verifyEndpoint, reqBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const wldResponse = verifyRes.data;
    console.log(`Received ${verifyRes.status} response from World ID /verify endpoint:\n`, wldResponse);

    if (verifyRes.status === 200) {
      console.log("Credential verified! This user's nullifier hash is: ", wldResponse.nullifier_hash);
      res.status(verifyRes.status).send({
        code: "success",
        detail: "This action verified correctly!",
      });
    } else {
      res.status(verifyRes.status).send({
        code: wldResponse.code,
        detail: wldResponse.detail,
      });
    }
  } catch (error) {
    console.error("Error verifying credential:", error);
    res.status(500).send({
      code: "error",
      detail: "An error occurred while verifying the credential.",
    });
  }
};
