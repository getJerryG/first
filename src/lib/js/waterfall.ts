'use strict';
interface WaterFallInterface {
  columnNum?: number;
  spacerSizeAuto?: boolean;
  spacerSize?: number;
  spacerSizeTop?: number;
  spacerSizeRight?: number;
  spacerSizeBottom?: number;
  spacerSizeLeft?: number;
}
class WaterFall {
  private event: HTMLElement;
  private width: number;//定义父级宽度
  private height: number;//定义父级高度
  private columnNum: number;//定义瀑布流列数
  private spacerSizeAuto: boolean;
  private spacerSize: number;//定义间隔 默认为四周
  private spacerSizeTop: number;//定义间隔
  private spacerSizeRight: number;//定义间隔
  private spacerSizeBottom: number;//定义间隔
  private spacerSizeLeft: number;//定义间隔


  constructor(event: HTMLElement, obj: WaterFallInterface = {}) {
    this.event = event
    this.width = event.offsetWidth;
    this.height = event.offsetHeight;
    this.spacerSizeAuto = obj.spacerSizeAuto ? obj.spacerSizeAuto : true
    this.columnNum = obj.columnNum ? obj.columnNum : 5
    this.spacerSize = obj.spacerSize ? obj.spacerSize : 10
    this.spacerSizeTop = this.getValue(obj.spacerSize, obj.spacerSizeTop, 10)
    this.spacerSizeRight = this.getValue(obj.spacerSize, obj.spacerSizeRight, 10)
    this.spacerSizeBottom = this.getValue(obj.spacerSize, obj.spacerSizeBottom, 10)
    this.spacerSizeLeft = this.getValue(obj.spacerSize, obj.spacerSizeLeft, 10)
    this.init()
  }
  /**
   * 入口
   */
  private init() {
    this.setEventClassName()
  }
  private setEventClassName() {
    this.event.style.position = 'relative'
    const children: HTMLElement[] = [].slice.call(this.event.children);
    for (let i = 0; i <= children.length - 1; i++) {
      children[i].style.position = 'absolute'
      this.setspacerSizeValue(this.spacerSizeAuto, children, i)
    }
  }
  private setspacerSizeValue(auto: boolean, children: HTMLElement[], i: number) {
    if (!auto) return;
    const row = Math.floor(i / this.columnNum),
      clo = i % this.columnNum,
      oldChildren: HTMLElement = i < this.columnNum ? children[i] : children[i - this.columnNum];
    let asSpacerSize = 0,
      width = 0,
      size = 0,
      a = 0;
    if ((i - row * this.columnNum) < 0) return;
    a = oldChildren.offsetHeight ? oldChildren.offsetTop + oldChildren.offsetHeight : oldChildren.offsetTop
    for (let j = 0; j < this.columnNum; j++) {
      size += children[j].offsetWidth
      asSpacerSize = auto ? (this.width - size) / (this.columnNum + 1) : this.getspacerSizeValue()
    }
    if (clo == 0) {
      width = children[clo].offsetWidth
      children[i].style.left = asSpacerSize + 'px'
    } else {
      width = children[i].offsetWidth + children[clo - 1].offsetLeft
      children[i].style.left = children[clo - 1].offsetWidth + children[clo - 1].offsetLeft + asSpacerSize + 'px';
    }
    if (row == 0) {
      children[i].style.top = asSpacerSize + 'px'
    } else {
      children[i].style.top = a + asSpacerSize + 'px'
    }
  }
  /**
   * 无法实现自定义间隔
   * 
   * @param key 
   */
  getspacerSizeValue(key?: string): number {
    let value = this.spacerSize
    switch (key) {
      case 'top': value = this.spacerSizeTop; break;
      case 'left': value = this.spacerSizeLeft; break;
      case 'bottom': value = this.spacerSizeBottom; break;
      case 'right': value = this.spacerSizeRight; break;
      default: break;
    }
    return value
  }
  /** 
   * 对于传值的重要性返回对应值（Number）
   * @param value 第二重要的
   * @param importantValue 重要的
   * @param defaultValue 默认的
   */
  private getValue(value: number | undefined, importantValue: number | undefined, defaultValue: number): number {
    if (importantValue) {
      return importantValue
    } else if (value) {
      return value
    } else {
      return defaultValue
    }
  }

}
export default WaterFall 