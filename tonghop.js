let choice;
let products = [];

do {
  choice = +prompt(` Mời bạn nhập lựa chọn `);

  switch (choice) {
    case 1:
        let productNameInput = prompt(` Nhập tên sản phẩm`);
        let productPriceInput = +prompt(` Nhập giá sản phẩm`);
        // gom giữ liệu người dùng
        let newProduct = {
            id: Math.ceil(Math.random() * 1000),
            productName: productNameInput,
            price: productPriceInput,
        }
        products.push(newProduct);
      break;
    case 2:
        let idUpdate = +prompt(` Mời bạn nhập id cập nhật `);
        

        let findIndexProductNumber = products.findIndex(
            (products) => products.id === idUpdate
        );
        if(findIndexProductNumber !== -1){
            let productNameUpdateInput = prompt(` Mời bạn nhập tên mới`);
            let productPriceUpdateInput = +prompt(` Mời bạn nhập giá mới`);

            // cập nhật lại sp
            products[findIndexProductNumber].productName = productNameUpdateInput;
            products[findIndexProductNumber].price = productPriceUpdateInput;
        }else{
            console.log(` Không tìm thấy sản phẩm `);
            
        }
      break;
    case 3:
        let idDelete = +prompt(` Mời bạn nhập id cần xoá `);
        //kiểm tra id
        let findIndexProductDelete = products.findIndex(
            (product) => product.id === idDelete);
            if(findIndexProductDelete !== -1){

                // lấy tên sp cầm xoá
                let productNameDelete = products[findIndexProductDelete].productName;

            // thông báo
            let confirmDelete = confirm(`Bạn có chắc xoá ${productNameDelete} không`)
            if(confirmDelete){
                products.splice(findIndexProductDelete,1);
                console.log(` Xoá sản phẩm thành công`);
            }
            }else{
                console.log(` Không tìm thấy sản phẩm `);
                
            }
      break;
    case 4:
        console.table(products);
      break;
    case 5:
        // tìm kiếm sản phẩm trong mảng
        let productNameSeach = prompt(` nhập tên sp cần tìm`);

        let findProductByName = products.find(
            (product) => product.productName.trim().toLocaleUpperCase() === productNameSeach.toLocaleUpperCase()
        );
        if(findProductByName){
            console.log(` Tìm thấy sản phẩm `);
        }else{
            console.log(` Không tìm thấy sp`); 
        }
      break;
    case 6:
        console.log(` Đã thoát chương trình `);
        
      break;
    default:
        console.log(`Lựa chọn không hợp lệ`);
      break;
  }
} while (choice !== 6);
