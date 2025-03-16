let choice;
let books = [];
function inputBook(){
    let titleInput = prompt(` Nhập tên sách: `);
    let priceInput = +prompt(` Mời bạn giá tiền: `);
    let authorInput = prompt(` Nhập tên tác giả: `);
    let yearInput = +prompt(` Mời bạn nhập năm xuất bản: `);
    let isAvailableInput = prompt(` Mời bạn nhập trạng thái mượn trả (true/false)`)
        // gom giữ liệu người dùng  
        let newBook = {
            id: Math.ceil(Math.random() * 1000),
            title: titleInput,
            author: authorInput,
            price: priceInput,
            year: yearInput,
            isAvailable: isAvailableInput,
        }
        books.push(newBook);
};
do {
  choice = +prompt(` Mời bạn nhập lựa chọn `);

  switch (choice) {
    case 1:
        inputBook();
      break;
    case 2:
        console.table(books);
      break;
    case 3:
        let titleSeach = prompt(` Mời bạn nhập tiêu đề cần tìm :`);

        let titleList = books.filter( book => book.title.toUpperCase() === titleSeach.toUpperCase());
        if(titleList !== 0){
            console.table(titleList);
        }else{
            console.log(` Không tìm thấy tiêu đề cần tìm`); 
        }
      break;
    case 4:

    let idIsAvailable = +prompt(` Mời bạn nhập id sách cần tìm : `);
    
    let findIdBook = books.findIndex(books  => books.id === idIsAvailable)
    if(findIdBook !== -1){
        let isAvailbleUpdate = prompt(` Mời bạn nhập trạng thái sách mới`)
        books[findIdBook].isAvailable === isAvailbleUpdate;
    }else{
        console.log(` Không tìm thấy ID cần tìm`);
    }
      break;
    case 5:
      let idDelete = +prompt(` Mời bạn nhập id sách cần xoá`);

      let findDeleteBook = books.findIndex(book => book.id === idDelete);

      if(findDeleteBook !== -1){

      let bookNameDelete = books[findDeleteBook].id;

      let confirmDelete = confirm(`Bạn có chắc xoá ${bookNameDelete} không`);
      if(confirmDelete){
          employees.splice(findDeleteBook,1);
          console.log(` Xoá sách thành công`);
        }
      }else{
          console.log(` Không tìm thấy id sách `); 
      }
      break;
    case 6:
      books.sort((a,b) => a.id - b.id);
      console.log(` danh sách sau khi sắp xếp `);
      console.table(books);
      
      break;
    case 7:
        console.log(` Đã thoát chương trình `);
      break;
    default:
        console.log(`Lựa chọn không hợp lệ`);
      break;
  }
} while (choice !== 7);