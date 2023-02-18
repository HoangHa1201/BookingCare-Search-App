
### tải dự án về máy 

### `npm i`
thực hiện cài các package cần thiết và node_modules

### `npm start`

Khởi chạy trên môi trường development.\
(http://localhost:3000)

### `npm run build`

Tạo thư mục Build để deploy lên môi trường sản phẩm.\
Builds the app for production to the `build` folder.\

### `Responsive`

Phiên bản hiện tại chỉ hỗ trợ trên màn hình máy tính
lỗi: trên giao diện điện thoại không hiển thị được các kết quả khi kéo xuống dưới cùng
### `Test case với Search Bar`

1.
input: gan
output: 2 kết quả mặc định, kéo xuống dưới cùng sẽ hiện thêm 10 kết quả
2
input: bệnh dại
output: 1 kết quả mặc định, kết quả mặc định tiếp theo không có trả ra null
3
input: hello
output: 2 kết quả mặc định, kéo xuống dưới cùng sẽ hiện thêm 10 kết quả
        những kết quả có chứa thuộc tính giá trị undefined sẽ vẫn hiển thị kết quả đó nhưng không hiển thị giá trị

4: kí tự không có nghĩa vd:
input: sjkfehewug
output: trả về null

5: không nhập gì cả
input: ""
output: thông báo lỗi cho người dùng và yêu cầu nhập lại