//Bài 5
document.getElementById("btnBaiTap5").onclick = function () {
  var soNguyenTo = document.getElementById("soNguyenTo").value * 1;
  var chuoiSo = "";
  if (soNguyenTo > 3) {
    chuoiSo += 2 + " ";
    chuoiSo += 3 + " ";
  }
  // Chạy số
  for (n = 2; n <= soNguyenTo; n++) {
    // Kiểm tra số
    for (i = 2; i <= Math.sqrt(n); i++) {
      var flag = true;
      // Gán flag
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      chuoiSo += n + " ";
    }
  }
  document.getElementById("ketQuabaitap5").innerHTML = chuoiSo;
};
//Bài 1
document.getElementById("btnBaiTap1").onclick = function () {
  var tong = 0;
  var soCanTim = "";
  for (i = 0; i + tong <= 10000; i++) {
    tong += i;
    soCanTim = i;
  }
  document.getElementById("ketQuaBaiTap1").innerHTML =
    "Số cần tìm là: " + soCanTim;
};
//Bài 2
document.getElementById("btnBaiTap2").onclick = function () {
  var soX = document.getElementById("soX").value * 1;
  var soN = document.getElementById("soN").value * 1;
  var tong = 0;
  for (i = 1; i <= soN; i++) {
    tong += Math.pow(soX, i);
  }
  document.getElementById("ketQuaBaiTap2").innerHTML = tong;
};
//Bài 3
document.getElementById("btnBaiTap3").onclick = function () {
  var soM = document.getElementById("soM").value * 1;
  var giaiThua = 1;
  for (i = 1; i <= soM; i++) {
    giaiThua *= i;
  }
  document.getElementById("ketQuaBaiTap3").innerHTML = giaiThua;
};
//Bài 4
document.getElementById("btnBaiTap4").onclick = function () {
  ketQua = "";
  for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      ketQua +=
        '<div class="bg-danger">' + "div chẵn " + Math.ceil(i / 2) + "</div>";
    } else {
      ketQua +=
        '<div class="bg-primary">' + "div lẻ " + Math.ceil(i / 2) + "</div>";
    }
  }
  document.getElementById("ketQua").innerHTML = ketQua;
};
