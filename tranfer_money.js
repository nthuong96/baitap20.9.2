function transfer()    {
    let x= +document.getElementById("nhapvao").value;
    let y= +document.getElementById("from").value;
    let z= +document.getElementById("to").value;
    let a= x*z/y;
    document.write("so tien la:" + a);}

function total() {
    let math= +document.getElementById("math_grade").value;
    let physic= +document.getElementById("physic_grade").value;
    let biology= +document.getElementById("biology_grade").value;
    let tong= math+physic+biology
    document.getElementById("tong").innerHTML="tong diem là"+tong;
}
function average() {
    let math= +document.getElementById("math_grade").value;
    let physic= +document.getElementById("physic_grade").value;
    let biology= +document.getElementById("biology_grade").value;
    let tb= (math+physic+biology)/3
    document.getElementById("tb").innerHTML="diem trung binh là"+ tb;
}