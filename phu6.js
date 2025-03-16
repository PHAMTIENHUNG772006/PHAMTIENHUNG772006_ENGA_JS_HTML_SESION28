let cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];


let total = (items) =>{
    let totalReduce = items.reduce((sum,items) => sum + items.price * items.quantity,0
);//reduce quy toàn bộ giá trị trong mảng thành một giá trị
return totalReduce;
}
console.log(` tổng giá tiền các sản phẩm trong giỏ hàng là : ${total(cart )}`);
