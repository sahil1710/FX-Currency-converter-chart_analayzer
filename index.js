let data = [];
let tempData = [];
const month = {
  Jan: "00",
  Feb: "01",
  Mar: "02",
  Apr: "03",
  May: "04",
  Jun: "05",
  Jul: "06",
  Aug: "07",
  Sep: "08",
  Oct: "09",
  Nov: "10",
  Dec: "11",
};

const btn1 = document.getElementById("btn1").classList;
const btn2 = document.getElementById("btn2").classList;
const btn3 = document.getElementById("btn3").classList;
const btn4 = document.getElementById("btn4").classList;
const btn5 = document.getElementById("btn5").classList;


window.onload = function () {
  exchangeR();
  btn1.add("btn-1");
  btn2.add("btn-2");
  btn3.add("btn-2");
  btn4.add("btn-2");
  btn5.add("btn-2");
  btn1.remove("btn-2");
  btn2.remove("btn-1");
  btn3.remove("btn-1");
  btn4.remove("btn-1");
  btn5.remove("btn-1");


  let currency_1 = "U.S. dollar   (USD)";
  let currency_2 = "Indian rupee   (INR)";

  if (currency_2 == "") {
    currency_2 = currency_1;
  }
  const year = document.getElementById("year_list").value;

  tempData = allYearData[year];

  tempData.forEach((item) => {
    temp = {};
    temp["x"] = new Date(
      parseInt("20" + item["Date"].split("-")[2]),
      parseInt(month[item["Date"].split("-")[1]]),
      parseInt(item["Date"].split("-")[0])
    );

    const tempVar = item[currency_2] / item[currency_1];

    temp["y"] = tempVar;
    data.push(temp);
  });

  console.log(data);
  function findMinMax(key) {
    const datas = data.map((node) => node[key]);
    return {
      min: Math.min(...datas),
      max: Math.max(...datas),
    };
  }
  const minmax = findMinMax("y");
  console.log(minmax);
  let maxdate;
  let mindate;
  let tempArr;
  data.forEach((val) => {
    if (val.y == minmax["max"]) {
      tempArr = val.x.toString();
      tempArr = tempArr.split(" ");
      maxdate = tempArr[1] + "/" + tempArr[2] + "/" + tempArr[3].slice(2);
    }
    if (val.y == minmax["min"]) {
      tempArr = val.x.toString();
      tempArr = tempArr.split(" ");
      mindate = tempArr[1] + "/" + tempArr[2] + "/" + tempArr[3].slice(2);
    }
  });

  document.getElementById("min").innerHTML = `<span><center>${parseFloat(
    minmax["min"]
  ).toFixed(2)}</center>${mindate}</span>`;
  document.getElementById("max").innerHTML = `<span><center>${parseFloat(
    minmax["max"]
  ).toFixed(2)}</center>${maxdate}</span>`;

  lineChart(currency_1, currency_2);
};

function createPlot() {
  exchangeR();
  document.getElementById('currConv-2').innerHTML="";
  btn1.add("btn-1");
  btn2.add("btn-2");
  btn3.add("btn-2");
  btn4.add("btn-2");
  btn5.add("btn-2");
  btn1.remove("btn-2");
  btn2.remove("btn-1");
  btn3.remove("btn-1");
  btn4.remove("btn-1");
  btn5.remove("btn-1");

  data = [];
  let currency_1 = document.getElementById("currency_1").value;
  let currency_2 = document.getElementById("currency_2").value;
  let first=document.getElementById('currency_1').value;
  let second=document.getElementById('currency_2').value;
  let cur1=document.getElementById('currConv-1').value;
  const year = document.getElementById("year_list").value;
  console.log(first,second,cur1,year); 
  let firstdata=allYearData[year][allYearData[year].length-1][first];
  let seconddata=(allYearData[year][allYearData[year].length-1][second]);
  if(firstdata==undefined){
    document.getElementById('error').style.display='inline';
    console.log(document.getElementById('error'));
    document.getElementById('error').innerText=`*${first.substr(first.length-4,3)} Data is Not Available for ${year}`;
  }
  else if(seconddata==undefined){
    console.log(document.getElementById('error'));
    document.getElementById('error').style.display='inline';
    document.getElementById('error').innerHTML=`*${second.substr(second.length-4,3)} Data is Not Available for ${year}`;
  }
  else{
      console.log(firstdata);
      console.log(seconddata);
    document.getElementById('error').style.display='none';
  }

  if (currency_2 == "") {
    currency_2 = currency_1;
  }

  tempData = allYearData[year];

  tempData.forEach((item) => {
    temp = {};
    temp["x"] = new Date(
      parseInt("20" + item["Date"].split("-")[2]),
      parseInt(month[item["Date"].split("-")[1]]),
      parseInt(item["Date"].split("-")[0])
    );

    const tempVar = item[currency_2] / item[currency_1];

    temp["y"] = tempVar;
    data.push(temp);
  });

  console.log(data);
  function findMinMax(key) {
    const datas = data.map((node) => node[key]);
    return {
      min: Math.min(...datas),
      max: Math.max(...datas),
    };
  }
  const minmax = findMinMax("y");
  console.log(minmax);
  let maxdate;
  let mindate;
  let tempArr;
  data.forEach((val) => {
    if (val.y == minmax["max"]) {
      tempArr = val.x.toString();
      tempArr = tempArr.split(" ");
      maxdate = tempArr[1] + "/" + tempArr[2] + "/" + tempArr[3].slice(2);
    }
    if (val.y == minmax["min"]) {
      tempArr = val.x.toString();
      tempArr = tempArr.split(" ");
      mindate = tempArr[1] + "/" + tempArr[2] + "/" + tempArr[3].slice(2);
    }
  });

  document.getElementById("min").innerHTML = `<span><center>${parseFloat(
    minmax["min"]
  ).toFixed(2)}</center>${mindate}</span>`;
  document.getElementById("max").innerHTML = `<span><center>${parseFloat(
    minmax["max"]
  ).toFixed(2)}</center>${maxdate}</span>`;
  //   document.getElementById("min").innerHTML = minObj["min"] + " " + minObj["Date"]
  //   document.getElementById("max").innerHTML = maxObj["max"] + " " + maxObj["Date"]

  lineChart(currency_1, currency_2);
}

function monthlyPlot() {
  btn1.add("btn-2");
  btn2.add("btn-2");
  btn3.add("btn-1");
  btn4.add("btn-2");
  btn5.add("btn-2");
  btn1.remove("btn-1");
  btn2.remove("btn-1");
  btn3.remove("btn-2");
  btn4.remove("btn-1");
  btn5.remove("btn-1");

  data = [];
  let currency_1 = document.getElementById("currency_1").value;
  let currency_2 = document.getElementById("currency_2").value;

  const year = document.getElementById("year_list").value;

  tempData = allYearData[year];

  let i = 0;
  let ans = 0;
  let k = true;
  tempData.forEach((item) => {
    temp = {};
    if (i % 20 == 0) {
      temp["x"] = new Date(
        parseInt("20" + item["Date"].split("-")[2]),
        parseInt(month[item["Date"].split("-")[1]]),
        parseInt(item["Date"].split("-")[0])
      );
      if (k) temp["y"] = item[currency_2] / item[currency_1];
      else temp["y"] = ans / 20;
      ans = 0;
      data.push(temp);
      i = 0;
    }
    ans += item[currency_2] / item[currency_1];
    
    i++;
  });
  temp["x"] = new Date(
    parseInt("20" + tempData[tempData.length - 1]["Date"].split("-")[2]),
    parseInt(month[tempData[tempData.length - 1]["Date"].split("-")[1]]),
    parseInt(tempData[tempData.length - 1]["Date"].split("-")[0])
  );
  temp["y"] = tempData[tempData.length - 1][currency_2];
  data.push(temp);
  console.log(data);
  lineChart(currency_1, currency_2);
}

function weeklyPlot() {
  btn1.add("btn-2");
  btn2.add("btn-1");
  btn3.add("btn-2");
  btn4.add("btn-2");
  btn5.add("btn-2");
  btn1.remove("btn-1");
  btn2.remove("btn-2");
  btn3.remove("btn-1");
  btn4.remove("btn-1");
  btn5.remove("btn-1");

  data = [];
  let currency_1 = document.getElementById("currency_1").value;
  let currency_2 = document.getElementById("currency_2").value;

  const year = document.getElementById("year_list").value;
  tempData = allYearData[year];

  let i = 0;
  let k = true;
  let ans = 0;
  tempData.forEach((item) => {
    temp = {};
    if (i % 5 == 0) {
      temp["x"] = new Date(
        parseInt("20" + item["Date"].split("-")[2]),
        parseInt(month[item["Date"].split("-")[1]]),
        parseInt(item["Date"].split("-")[0])
      );
      if (k) {
        temp["y"] = item[currency_2] / item[currency_1];
        k = false;
      } else temp["y"] = ans / 5;
      data.push(temp);
      i = 0;
      ans = 0;
    }
    ans += item[currency_2] / item[currency_1];
    i++;
  });
  
  temp["x"] = new Date(
    parseInt("20" + tempData[tempData.length - 1]["Date"].split("-")[2]),
    parseInt(month[tempData[tempData.length - 1]["Date"].split("-")[1]]),
    parseInt(tempData[tempData.length - 1]["Date"].split("-")[0])
  );
  temp["y"] = tempData[tempData.length - 1][currency_2];
  data.push(temp);
  console.log(data);
  lineChart(currency_1, currency_2);
}

function quarterlyPlot() {
  btn1.add("btn-2");
  btn2.add("btn-2");
  btn3.add("btn-2");
  btn4.add("btn-1");
  btn5.add("btn-2");
  btn1.remove("btn-1");
  btn2.remove("btn-1");
  btn3.remove("btn-1");
  btn4.remove("btn-2");
  btn5.remove("btn-1");

  data = [];
  let currency_1 = document.getElementById("currency_1").value;
  let currency_2 = document.getElementById("currency_2").value;

  const year = document.getElementById("year_list").value;
  tempData = allYearData[year];

  let i = 0;
  let k = 0;
  let ans = 0;
  tempData.forEach((item) => {
    temp = {};
    if (i % 60 == 0 && k < 4) {
      temp["x"] = new Date(
        parseInt("20" + item["Date"].split("-")[2]),
        parseInt(month[item["Date"].split("-")[1]]),
        parseInt(item["Date"].split("-")[0])
      );
      if (k != 0) temp["y"] = ans / 60;
      else temp["y"] = item[currency_2] / item[currency_1];
      data.push(temp);
      ans = 0;
      i = 0;
      k++;
    }
    i++;
    ans += item[currency_2] / item[currency_1];
  });

  temp["x"] = new Date(
    parseInt("20" + tempData[tempData.length - 1]["Date"].split("-")[2]),
    parseInt(month[tempData[tempData.length - 1]["Date"].split("-")[1]]),
    parseInt(tempData[tempData.length - 1]["Date"].split("-")[0])
  );

  temp["y"] = tempData[tempData.length - 1][currency_2];
  data.push(temp);

  console.log(data);
  lineChart(currency_1, currency_2);
}

function yearlyPlot() {
  btn1.add("btn-2");
  btn2.add("btn-2");
  btn3.add("btn-2");
  btn4.add("btn-2");
  btn5.add("btn-1");
  btn1.remove("btn-1");
  btn2.remove("btn-1");
  btn3.remove("btn-1");
  btn4.remove("btn-1");
  btn5.remove("btn-2");

  data = [];
  let currency_1 = document.getElementById("currency_1").value;
  let currency_2 = document.getElementById("currency_2").value;

  for (let i in allYearData) {
    temp = {};
    console.log(i);
    temp["x"] = new Date(
      parseInt("20" + allYearData[i][0]["Date"].split("-")[2]),
      parseInt(month[allYearData[i][0]["Date"].split("-")[1]]),
      parseInt(allYearData[i][0]["Date"].split("-")[0])
    );
    let ans = 0;
    for (let j of allYearData[i]) {
      ans += j[currency_2] / j[currency_1];
    }
    temp["y"] = ans / allYearData[i].length;

    // temp["y"]=allYearData[i][0][str];
    console.log(temp["x"], temp["y"]);
    data.push(temp);
  }

  console.log(data);
  lineChart(currency_1, currency_2);
}


function currencyConverter(){
  let first=document.getElementById('currency_1').value;
  let second=document.getElementById('currency_2').value;
  let cur1=document.getElementById('currConv-1').value;
  year=document.getElementById('year_list').value;
  console.log(first,second,cur1,year); 
  let firstdata=allYearData[year][allYearData[year].length-1][first];
  let seconddata=(allYearData[year][allYearData[year].length-1][second]);
  if(firstdata==undefined){
    document.getElementById('error').style.display='inline';
    console.log(document.getElementById('error'));
    document.getElementById('error').innerText=`${first.substr(first.length-4,3)} Data is Not Available for ${year}`;
  }
  else if(seconddata==undefined){
    console.log(document.getElementById('error'));
    document.getElementById('error').style.display='inline';
    document.getElementById('error').innerHTML=`${second.substr(second.length-4,3)} Data is Not Available for ${year}`;
  }
  else{
    console.log(firstdata);
    console.log(seconddata);
  document.getElementById('error').style.display='none';
  let cur2=cur1*(seconddata/firstdata);
  document.getElementById('currConv-2').innerHTML=cur2.toPrecision(7);
  }
}


function clear(){
  document.getElementById("currency_1").value = "";
}


function lineChart(currency_1, currency_2) {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "dark2",
    title: {
      text: currency_1 + " To " + currency_2,
      fontSize: 18,
    },
    data: [
      {
        type: "line",
        indexLabelFontSize: 6,
        dataPoints: data,
      },
    ],
  });
  chart.render();
}

function exchangeR()
{
  const year = document.getElementById("year_list").value;
  console.log(year);
  let temp;
  temp = exchangeRate[year];
  // console.log(temp[0]["Algerian dinar   (DZD)"]);
  // console.log(Object.keys(temp[0]).length);

  card = document.getElementById('row2')
  individual=card.children[0]
  console.log(individual);
 
  let i=1;

  for (const item in temp[0]) {
    if(i>4){
    // clone1=individual.children[0].children[0].cloneNode(true);
    clone=individual.children[0].cloneNode(true);
    console.log(clone);
    clone.children[0].id='er'+i;
    card.append(clone);
    }
    console.log(document.getElementById('er'+i));
    document.getElementById('er'+i).innerHTML= `<div>${item}</div>  <div style="color:#00b8b8;">${parseFloat(temp[0][item]).toFixed(2)}</div>`;
    i++;
  }
  }