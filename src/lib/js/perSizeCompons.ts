'use strict';
/**
 * @param showPageButton?: boolean;
 * @param total: number;
 * @param pageIndex: number; 
 * @param itemIndex: number; 
 * @param pageItemNum: number;
 */
export interface PerSozeComponsObj {
	showPageButton?: boolean;
	total: number;
	pageIndex: number; 
	pageItemNum: number;
}

export class PerSizeCompons  {
	private showPageButton: boolean //是否显示分页按钮
	private total: number; //总数
	private pageIndex = 1; //当前页
	private defaultIndex = 1;//默认显示的页码
	private pageItemNum: number;//每页按照几个元素渲染
	private totalPages: number;//一共有多少页
	private data: any[]
  constructor(obj: PerSozeComponsObj , data: object[]|Array<any>) {
		this.showPageButton = obj.showPageButton === undefined? true : obj.showPageButton;
		this.total = obj.total;
		this.pageIndex = obj.pageIndex;
		this.pageItemNum = obj.pageItemNum
		this.totalPages = Math.ceil(obj.total/obj.pageItemNum)
		this.data = data
	}
	get getdata () {
		return this.getData()
	}
	
	
	private getData() {
		const start = (this.pageIndex-1) * this.pageItemNum , end = this.pageIndex * this.pageItemNum
		const data = this.data.slice(start,end)
		return data
	}
	
}