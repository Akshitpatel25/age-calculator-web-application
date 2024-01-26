const dd = document.getElementById('dd');
const mm = document.getElementById('mm');
const yyyy = document.getElementById('yyyy');

const day = 31;
const month = 12;

// geting latest year

let date = new Date();;
let yearr = date.getFullYear()-1;
let monthh = date.getMonth()+1;
let dayy = date.getDate();  



function checking() {
    // let d = parseInt(dd.value);
    // let m = parseInt(mm.value);
    let y = yearr;

    // calculating answer

    if (dd.value <= 31 && mm.value <= 12 && yyyy.value <= yearr ) {
        
        
        let year_ans = y - yyyy.value;
        let month_ans =  mm.value - monthh;
        let monthh_ans = 12-month_ans;
        let day_ans = dayy - dd.value;


        let latestyear = 0;
        let latestmonth = 0;
        if (monthh_ans == 12) {
            latestyear = year_ans + 1;
            monthh_ans = 0;
            latestmonth = monthh_ans;
        } else {
            latestyear = year_ans;
            latestmonth = monthh_ans;
        }

        document.querySelector(".span_years").innerHTML = latestyear;
        document.querySelector(".span_months").innerHTML = latestmonth;
        document.querySelector(".span_days").innerHTML = day_ans;
    }




        // for empty message

    if (dd.value === "") {
        document.querySelector('.input_box1').style.borderColor = "red";
        document.querySelector('.d_p').style.display = "block";
        document.querySelector('.day_h5').style.color = "red";
        document.querySelector(".span_days").innerHTML = "--";
    }
    if (mm.value === "") {
        document.querySelector('.input_box2').style.borderColor = "red";
        document.querySelector('.m_p').style.display = "block";
        document.querySelector('.month_h5').style.color = "red";
        document.querySelector(".span_months").innerHTML = "--";
    }
    if (yyyy.value === "") {
        document.querySelector('.input_box3').style.borderColor = "red";
        document.querySelector('.y_p').style.display = "block";
        document.querySelector('.year_h5').style.color = "red";
        document.querySelector(".span_years").innerHTML = "--";
    }
    
    // ----------------


    // condition checking

    if (dd.value >= 32) {
        document.querySelector('.input_box1').style.borderColor = "red";
        document.querySelector('.day_p').style.display = "block";
        document.querySelector('.day_h5').style.color = "red";
    }
    if (mm.value >= 13) {
        document.querySelector('.input_box2').style.borderColor = "red";
        document.querySelector('.month_p').style.display = "block";
        document.querySelector('.month_h5').style.color = "red";
    }
    if (yyyy.value > yearr) {
        document.querySelector('.year_p').style.display = "block";
        document.querySelector('.input_box3').style.borderColor = "red";
        document.querySelector('.year_h5').style.color = "red";
    }
    
    

}

// for reloading page

function reload() {
    document.querySelector('.d_p').style.display = "none";
    document.querySelector('.day_p').style.display = "none";
    document.querySelector('.m_p').style.display = "none";
    document.querySelector('.month_p').style.display = "none";
    document.querySelector('.y_p').style.display = "none";
    document.querySelector('.year_p').style.display = "none";
    document.querySelector('.input_box1').style.borderColor = "lightgray";
    document.querySelector('.input_box2').style.borderColor = "lightgray";
    document.querySelector('.input_box3').style.borderColor = "lightgray";
    document.querySelector('.day_h5').style.color = "#717171";
    document.querySelector('.month_h5').style.color = "#717171";
    document.querySelector('.year_h5').style.color = "#717171";
}
