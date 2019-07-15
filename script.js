var century,year,month,day,gender, days, maleNames, femaleNames;
days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
maleNames=["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function workout(){
    century = document.getElementById("century").value;
    year = document.getElementById("year").value;
    month = document.getElementById("month").value;
    day = document.getElementById("day").value;
    dayOfTheWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day-2)%7;
    return(Math.floor(dayOfTheWeek));
}
var result=dayOfTheWeek()

function validation(){
  if (document.getElementById("century").value == "" || century<1 || century>21){
      alert("Please enter a valid century")
      return false;
  }else{
      return true;
  }
}
function val(){
    validation();
    if (document.getElementById("year").value == "" || year<1 || year>99){
        alert("Please enter a valid year")
        return false;
    } else {
        return true;
    }
}
function val2(){
    val();
    if (document.getElementById("month").value == "" || month<1 || month>12){
        alert("Please enter a valid month")
    } else {
        return true;
    }
}
function val3(){
    val2();
    if (document.getElementById("day").value == "" || day<1 || day>31){
        alert("Please enter a valid day.")
    } else {
        return true;
    }
}
function checkDayOfTheWeek(){
    var calculate = workout();
    val3();
    gender = document.getElementsByName("gender");
    if (gender[0].checked==true){
        gender = "male";
    } else if (gender[1].checked==true){
        gender = "female";
    }else{
        alert("Please choose your gender");
    }

    if(gender=="male" && calculate==0){
        document.write("Your were born on "+days[0]+" and your Akan name is "+maleNames[0]);
    } 
    else if (gender=="female"&& calculate==0){
        document.write("You were born on "+days[0]+" and your Akan name is "+femaleNames[0]);
    }
    else if (gender=="male"&& calculate==1){
        document.write("Your were born on "+days[1]+" and your Akan name is "+maleNames[1]);
    }
    else if(gender=="female"&& calculate==1){
        document.write("Your were born on "+days[1]+" and your Akan name is "+femaleNames[1]);
    }
    else if (gender=="male" && calculate==2){
        document.write("You were born on "+days[2]+" and your Akan name is "+maleNames[2]);
    }
    else if (gender=="female" && calculate==2){
        document.write("You were born on "+days[2]+" and your Akan name is "+femaleNames[2]);
    }
    else if (gender=="male" && calculate==3){
        document.write("You were born on "+days[3]+" and your Akan name is "+maleNames[3]);
    }
    else if (gender=="female" && calculate==3){
        document.write("You were born on "+days[3]+" and your Akan name is "+femaleNames[3]);
    }
    else if (gender=="male" && calculate==4){
        document.write("You were born on "+days[4]+" and your Akan name is "+maleNames[4]);
    }
    else if (gender=="female" && calculate==4){
        document.write("You were born on "+days[4]+" and your Akan name is "+femaleNames[4]);
    }
    else if (gender=="male" && calculate==5){
        document.write("You were born on "+days[5]+" and your Akan name is "+maleNames[5]);
    }
    else if (gender=="female" && calculate==5){
        document.write("You were born on "+days[5]+" and your Akan name is "+femaleNames[5]);
    }
    else if (gender=="male" && calculate==6){
        document.write("You were born on "+days[6]+" and your Akan name is "+maleNames[6]);
    }
    else {
        document.write("You were born on "+days[6]+" and your Akan name is "+femaleNames[6]);
    }
}