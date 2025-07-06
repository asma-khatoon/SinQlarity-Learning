function product(productName, price){
    this.productName = productName;
    this.price = price;
}
function student( sname,productName, price ){
    this.sname = sname;
    product.call(this, productName, price);
    
}
const st = new student("xyz", "dell", "50k");
console.log(st.sname,"bought laptop of", st.productName ,"in price", st.price);