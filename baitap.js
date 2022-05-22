class conNguoi {
    constructor(ten, tuoi, gioiTinh, queQuan) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.queQuan = queQuan;
        this.gioiTinh = gioiTinh;
    }
    //phương thức
    hienThiThongTin() {
        document.write(`Họ tên:${this.ten}, </br> `);
        document.write(`Tuổi:${this.tuoi},</br>`);
        if (this.gioiTinh = true) {
            document.write('Giới tính: nam, </br>');
        }
        else {
            document.write('Giới tính: nữ, </br>');
        }
        document.write(`Quê quán:${this.queQuan},</br>`);
    }
}
var human = new conNguoi('Nguyễn Trọng Long', 20, true, 'tỉnh Thanh Hóa');
document.write('+THÔNG TIN SINH VIÊN </br>');
human.hienThiThongTin();
//object sinhVien
class sinhVien extends conNguoi {
    constructor(ten, tuoi, gioiTinh, queQuan, msv, lop, diemToan, diemLy, diemHoa) {
        super(ten, tuoi, true, queQuan);
        this.msv = msv;
        this.lop = lop;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    //Phương thức
    diemTb() {
        return (this.diemToan + this.diemLy + this.diemHoa) / 3;
    }
    inThongTin() {
        document.write(`Mã sinh viên: ${this.msv},</br> `);
        document.write(`Lớp: ${this.lop},</br> `);
        document.write(`Điểm toán là: ${this.diemToan},</br>`);
        document.write(`Điểm lý là: ${this.diemLy},</br>`);
        document.write(`Điểm hóa là: ${this.diemHoa},</br>`);
    }
    rank() {
        if (student.diemTb() >= 9) {
            document.write(`Xếp loại: xuất sắc,  </br>`);
        }
        else if (student.diemTb() >= 8 && student.diemTb() < 9) {
            document.write(`Xếp loại: giỏi  </br>`);
        }
        else if (student.diemTb() >= 6.5 && student.diemTb() < 8) {
            document.write(`Xếp loại: khá  </br>`);
        }
        else {
            document.write(`Xếp loại: TB  </br>`);
        }
    }
}
var student = new sinhVien('Long', 20, true, 'Thanh Hoa', 'B9185', 'C2110H1', 9.5, 10, 9);
student.diemTb();
student.inThongTin();
student.rank();
document.write(`Điểm trung bình của sinh viên ${human.ten} thuộc lớp ${student.lop} là: ${student.diemTb()} </br>`);
document.write('</br>');
//object nhân viên
document.write('+THÔNG TIN NHÂN VIÊN </br>');
class nhanVien extends conNguoi {
    constructor(ten, tuoi, gioiTinh, queQuan, mnv, luongCb, soNgayCong) {
        super(ten, tuoi, true, queQuan);
        this.mnv = mnv;
        this.luongCb = luongCb;
        this.soNgayCong = soNgayCong;
    }
    inThongTin() {
        document.write(`Họ tên: ${this.ten}, </br>`);
        document.write(`Tuổi: ${this.tuoi}, </br>`);
        if (this.gioiTinh = true) {
            document.write('Giới tính: nam, </br>');
        }
        else {
            document.write('Giới tính: nữ, </br>');
        }
        document.write(`Quê quán:${this.queQuan},</br>`);
        document.write(`Mã nhân viên: ${this.mnv}, </br>`);
        document.write(`Lương cơ bản (theo ngày): ${this.luongCb}$,</br>`);
        document.write(`Số ngày làm: ${this.soNgayCong}, </br>`);
    }
    tinhLuong() {
        return this.luongCb * this.soNgayCong;
    }
    rank() {
        if (staff.tinhLuong() >= 1000) {
            document.write('Thành tích: Đã đạt thành tích xuất sắc trong năm 2022 </br>');
            document.write('Xếp loại nhân viên: Xuất sắc </br>');
        }
        else {
            document.write('Hoàn thành tốt nhiệm vụ </br>');
            document.write('Xếp loại nhân viên: bình thường </br>');
        }
    }
}
var staff = new nhanVien('Nguyễn Trọng Long', 20, true, 'Thanh Hóa', 'B9185', 50, 30);
staff.inThongTin();
staff.rank();
document.write(`Tiền lương của nhân viên ${staff.ten} là: ${staff.tinhLuong()}$`);
