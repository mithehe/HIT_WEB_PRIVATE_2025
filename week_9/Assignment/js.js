let todoList = [];

while (true) {
    let action = prompt(
        "Bạn muốn làm gì?\n" +
        "1. add: Thêm công việc\n" +
        "2. show: Hiển thị công việc\n" +
        "3. edit: Sửa công việc\n" +
        "4. remove: Xóa công việc\n" +
        "5. exit: Thoát"
    );

    switch (action) {
        case "1":
            let newTodo = prompt("Nhập tên công việc mới:");
            if (newTodo !== null && newTodo !== "") {
                todoList.push(newTodo);
                alert("Đã thêm công việc!");
            }
            break;

        case "show":
            if (todoList.length === 0) {
                alert("Danh sách công việc trống.");
            } else {
                let result = "Danh sách công việc:\n";
                let index = 1;
                for (let todo of todoList) {
                    result += `${index}. ${todo}\n`;
                    index++;
                }
                alert(result);
            }
            break;

        case "edit":
            let editTodo = prompt("Nhập tên công việc muốn sửa:");
            let foundEdit = false;

            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i] === editTodo) {
                    let newContent = prompt("Nhập nội dung mới:");
                    if (newContent !== null && newContent !== "") {
                        todoList[i] = newContent;
                        alert("Đã cập nhật công việc!");
                    }
                    foundEdit = true;
                    break;
                }
            }

            if (!foundEdit) {
                alert("Công việc không tồn tại");
            }
            break;

        case "remove":
            let removeTodo = prompt("Nhập tên công việc muốn xóa:");
            let newList = [];
            let foundRemove = false;

            for (let todo of todoList) {
                if (todo === removeTodo && !foundRemove) {
                    foundRemove = true;
                } else {
                    newList.push(todo);
                }
            }

            if (foundRemove) {
                todoList = newList;
                alert("Đã xóa công việc!");
            } else {
                alert("Công việc không tồn tại");
            }
            break;

        case "exit":
            alert("Kết thúc");
            break;
        default:
            alert("Lệnh không hợp lệ. Vui lòng nhập lại!");
    }

    if (action === "exit") {
        break;
    }
}
