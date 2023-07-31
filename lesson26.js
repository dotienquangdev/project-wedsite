/* 
    position: Nó sẽ bị nổi lên trừ duy nhất postion Relative nó không
    => position: dùng để căn những vị trí cực khó hoặc không thể căn được bằng css thông thường
    position: fixed: Ăn theo trình duyệt 
        - default : top: 0; left : 0;
                    top : 0 default !== top : 0; khi mình css
                    default nó sẽ ăn theo không gian sử dụng => not suggest
                    => khi maf sử dụng postion : fixed;
                    => required :  quy định vị trí cho nó top: 0; css thẳng vào, quy định kích thước
                    => default nó sẽ bằng 0px; 0%; 0... => 0 có đơn vị
                    => sử dụng khi nào:  Làm header, sider bar => Tùy theo mục đích sử dụng
    
    Relative vk absolute => Trong thực tế 95% 2 thằng này lúc nào nó cũng đi cùng nhau
    => div con css position :absolute; => 98% => thằng cha bên ngoài nó kiểu gì cũng có position: relative;
    => relative: vị trí tuyệt đối nó lấy chính nó là vị trí để căn những thằng khác bên trong nó có thuộc tính position : absolute;
    => absolute default nó cũng sẽ ăn vào top lef : 0; đối tượng mà nó bám là thằng cha gần nhất có thuộc tính position
    
    flex box : 
        flex :  bẻ item lên nằm ngang
        align-items: start; =>  căn item bên trong theo chiều Y => sử dụng đối với thằng cha sử dụng flex box
        align-items: center; =>  căn item bên trong theo chiều Y => sử dụng đối với thằng cha sử dụng flex box
        align-items: end; =>  căn item bên trong theo chiều Y => sử dụng đối với thằng cha sử dụng flex box
        justify-content : flex-start; căn item bên trong theo chiều X => sử dụng đối với thằng cha sử dụng flex box
        justify-content : center;  căn item bên trong theo chiều X => sử dụng đối với thằng cha sử dụng flex box
        justify-content : flex-end;  căn item bên trong theo chiều X => sử dụng đối với thằng cha sử dụng flex box
        justify-content: space-between; Mang hết item bên trong chia đều ra 2 bên rìa
    example :
        .your-class {
            display: flex;
            align-items: start; 
            justify-content : flex-end;
            gap: 20px; => Có nghĩa là các đứa con bên trong nó cách nhau 20px;
        }
        item => dùng không tác dụng
    animation: syntax - cú pháp
        - hiệu ứng ví dụ như là pháo hoa, trươt vào
        - Cú pháp :
        @keyframes Tên_animation {
            from{ 
                 // from: Thời điểm bắt đầu hiệu ứng
            }
            
            to {
               // to : hiệu ứng của bạn sẽ chạy đến đây
            }
        }
        Cách sử dụng  :
        .your-class {
            animation: Tên_animation kiểu_hiệu_ứng_hd (linear,ease, ease-in-out,ease-in, ease-out) Số_giây_mà_animation_chạy (3s);
        }
        cursor: pointer; Biến con chuột thành hình bàn tay
*/

.box - one {
    width: 300px;
    height: 400px;
    background: red;
    position: relative;
    margin - left: 200px;
    margin - top: 200px;
    border - radius: 10px;
}

.favirote{
    border: 1px solid #ccc;
    background - color: #fff;
    color: #000;
    display: inline - block;
    padding: 6px 10px;
    position: absolute;
    bottom: 50 %;
    left: 50 %;
    /* transform: translate(-50%, -50%); */
    /* transform: translateX(-50%); di nguoc lai voi chin no 50% ( 50% la 50% do dai cua no) */
}


.box - one{
    display: flex;
    justify - content : flex - end;
    align - items: end;
}