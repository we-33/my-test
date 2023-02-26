
class MyString {
    private strArr: Array<string>;
    lenght: number = 0;

    constructor(str: string ){
        this.strArr = [...str];
        this.lenght = this.strArr.length;
    }

    private getIndex(index: any){
        
    }

    /**
     * substring
     */
    public substring(start: number, last:number = this.lenght) {
        //输入参数处理
    }
}

export default MyString;