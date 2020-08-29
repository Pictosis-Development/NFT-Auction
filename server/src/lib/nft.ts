import { TransactionSkeletonInterface, sealTransaction } from "@ckb-lumos/helpers";

//Input interfaces

//used to create a token
export interface CreateNFT {
    nftName: string,
    copies: string,
    symbol: string,
    fileAddress: string,
    sender: string,
	txFee: string
}

//used to put a token in an auction 'state'
export interface AuctionBuild {
    address: string,
    sender: string
}

export interface BidBuild {
    address: string,
	sender: string,
	amount: string
}

//Output interfaces

//Used for 
export interface PicOutput {
    message: string
    data: {
        txHash: string;
        address: string;
    }
}

export interface NFTDataOutput{
    nftName: string,
    copies: string,
    symbol: string,
    fileAddress: string
}

export interface TxOutput{
    txEsqueleton: TransactionSkeletonInterface
}


