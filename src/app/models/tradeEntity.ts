
enum Side{
    Buy,
    Sell
}
enum Status{
    Open,
    Nominated
}
import { RefData } from './RefData';

export class TradeEntity{

    constructor (
        public tradeId:string,
        public commodity:string,
        public commodityId:string,
        public counterParty:string,
        public counterPartyId:string,
        public tradeDate:string,
        public location:string,
        public locationId:string,
        public price:number,
        public quantity:number,
        public side: string,
        public status:string,
        public user : string,
        public userId : string
    ){};
}