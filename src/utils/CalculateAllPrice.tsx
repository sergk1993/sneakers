import { IDataProducts } from '../Types/Types';

/*  */
function CalculateAllPrice(arr: IDataProducts[]) {
	return arr.reduce((total:number, amount:IDataProducts) => total + amount.price * amount.count, 0)
}

export default CalculateAllPrice