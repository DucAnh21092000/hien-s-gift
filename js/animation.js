//          Tác giả : Đinh Đức Anh
//          Mail    : anh.dd182330@sis.hust.edu.vn
//                    dinhanh21092000@gmail.com

// Object chứa giá trị cần hiển thị
let initialValue = {
    year: "Xin chào Hiền xinh đẹp",
    content: "Chúc Hiền sớm khỏi ốm nha",
    icon: " ❤❤❤❤",
    mess: "Nhớ ăn uống, giữ gìn sức khỏe / " +
        "Tặng Hiền bó hoa này .../"

}


const year = document.querySelector('.year')
const content = document.querySelector('.content')
const icon = document.querySelector('.icon')
const mess = document.querySelector('.mess')

let arrYear = initialValue.year.split('')
let arrContent = (initialValue.content.split(""))
let arrIcon = initialValue.icon.split('')
let arrMess = initialValue.mess.split('')

let arrYearResult = []
let arrContentResult = []
let arrIconResult = []
let arrMessResult = []

// Hiển thị tin nhắn muốn hiển thị
const displayMess = () => {
    setTimeout(() => {
        const timeOut = setInterval(() => {
            let arrShift = arrMess.shift()
            if (arrShift == '/') {
                arrMessResult.push('<br>')
            }
            else {
                arrMessResult.push(arrShift)
            }
            mess.innerHTML = arrMessResult.join("")
            if (arrMess.length == 0) {
                clearInterval(timeOut)
                displayIcon()
            }
        }, 300) // thời gian lấy ra từng chữ 1 và hiển thị
    }, 1000) // thời gian delay
}

// Hiển thị nội dung lời chúc
const displayContent = () => {
    setTimeout(() => {
        const timeOut = setInterval(() => {
            arrContentResult.push(arrContent.shift())
            content.innerHTML = arrContentResult.join("")

            if (arrContent.length == 0) {
                clearInterval(timeOut)
                displayMess()
            }
        }, 500)
    }, 1000)
}

// hiển thị icon
const displayIcon = () => {
    setTimeout(() => {
        const timeOut = setInterval(() => {
            arrIconResult.push(arrIcon.shift())
            icon.src = './images/hoaa.png'
            icon.classList.add('bg__icon')
            if (arrIcon.length == 0) {
                clearInterval(timeOut)
                openPopup()
            }
        }, 100)
    }, 600)
}

// function chạy đầu tiên
function display() {
    document.getElementById('boxLayout').style.display = 'none';
    setTimeout(() => {
        const timeOut = setInterval(() => {
            arrYearResult.push(arrYear.shift())
            year.classList.add('.animation')
            year.innerHTML = arrYearResult.join("")
            year.classList.remove('.animation')
            if (arrYear.length == 0) {
                clearInterval(timeOut)
                displayContent()
            }
        }, 1000)
    }, 2000)


}
display()

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}


function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('mes').style.display = 'none';

    document.getElementById('boxLayout').style.display = 'block';

}