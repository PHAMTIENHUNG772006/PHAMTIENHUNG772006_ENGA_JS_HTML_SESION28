let choice;
let employees = [];

do {
  choice = +prompt(` Mời bạn nhập lựa chọn `);

  switch (choice) {
    case 1:
        let employeeNameInput = prompt(` Nhập tên nhân viên: `);
        let positionInput = prompt(` Nhập chức danh: `);
        let salaryInput = +prompt(` Mời bạn nhập lương: `)
        // gom giữ liệu người dùng
        let newEmployee = {
            id: Math.ceil(Math.random() * 1000),
            employeeName: employeeNameInput,
            position: positionInput,
            salary: salaryInput,
        }
        employees.push(newEmployee);
      break;
    case 2:
        let idDelete = +prompt(` Mời bạn nhập id nhân viên cần xoá`);

        let findDeleteEmployee = employees.findIndex(employee => employee.id === idDelete);

        if(findDeleteEmployee !== -1){

        let employeeNameDelete = employees[findDeleteEmployee].employeeName;

        let confirmDelete = confirm(`Bạn có chắc xoá ${employeeNameDelete} không`);
        if(confirmDelete){
            employees.splice(findDeleteEmployee,1);
            console.log(` Xoá nhâm viên thành công`);
          }
        }else{
            console.log(` Không tìm thấy nhân viên `); 
        }
      break;
    case 3:
        let idUpdate = +prompt(` mời bạn nhập id nhân viên cần thay đổi`);

        let findIdEmployee = employees.findIndex(
            (employee) => employee.id === idUpdate
        );
        if(findIdEmployee !== -1){
            let employeeSalaryUpdate = +prompt(` Mời bạn nhập mức lương mới :`);
            employees[findIdEmployee].salary = employeeSalaryUpdate;
        }else{
            console.log(` Không tìm thấy nhân viên`);
        }
      break;
    case 4:
        let employeeNameSeach = prompt(` nhập tên nhân viên cần tìm`);

        let findEmployeeByName = employees.find(
            (employee) => employee.employeeName.trim().toLocaleUpperCase() === employeeNameSeach.toLocaleUpperCase()
        );
        if(findEmployeeByName){
            console.log(`Nhân viên được tìm thấy:`);
            
            console.table(findEmployeeByName);
        }else{
            console.log(` Không tìm thấy nhân viên`); 
        }
      break;
    case 5:
       console.table(employees);
      break;
    case 6:
        console.log(` Đã thoát chương trình `);
      break;
    default:
        console.log(`Lựa chọn không hợp lệ`);
      break;
  }
} while (choice !== 6);
