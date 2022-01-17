let patients=[{
  name:'Dhruv',
  age:20,
  gender:'Male',
  mobileNumber:9689965472,
  city:'Ahmedabad',
  position:'New',
  image:'1.png'
},
{
  name:'Nirali',
  age:24,
  gender:'Female',
  mobileNumber:9978654356,
  city:'Surat',
  position:'New',
  image:'2.png'
  
},
{
  name:'Dhrom',
  age:15,
  gender:'Male',
  mobileNumber:9975689965,
  city:'Rajkot',
  position:'Appointment',
  image:'1.png'
},
{
  name:'Neema',
  age:24,
  gender:'Female',
  mobileNumber:9789758869,
  city:'Mehsana',
  position:'New',
  image:'2.png'
  
},
{
  name:'Om',
  age:15,
  gender:'Male',
  mobileNumber:9886547821,
  city:'Surat',
  position:'Appointment',
  image:'1.png'
},
{
  name:'Kyusi',
  age:24,
  gender:'Female',
  mobileNumber:9988775689,
  city:'Junagadh',
  position:'Appointment',
  image:'2.png'
  
},
{
  name:'Dhruvil',
  age:15,
  gender:'Male',
  mobileNumber:8856971236,
  city:'Porbandar',
  position:'New',
  image:'1.png'
},
{
  name:'Guddi',
  age:24,
  gender:'Female',
  mobileNumber:9797865431,
  city:'Amreli',
  position:'Appointment',
  image:'2.png'
  
},
{
  name:'Sujal',
  age:15,
  gender:'Male',
  mobileNumber:9978565432,
  city:'Surat',
  position:'New',
  image:'1.png'
}]

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return patients.filter((term)=> {
	  if (term.name.toLowerCase().match(reg)) {
  	  return term;
	  }
  });
}

function showResults(val) {
  let res = document.getElementById("result");
  let green=" text-success";
  let red=" text-danger";
  res.innerHTML = '';
  res.style.visibility="visible";
  let table='';
  let newValue=val.toLowerCase();
  let terms = autocompleteMatch(newValue);
  for (let i=0; i<terms.length; i++) {
    table += '<table class="view my-4"><tr><td rowspan="2"><img src= "' + terms[i].image + '"/></td><td id="pname">'+terms[i].name+'</td><td rowspan="2" class="position px-5 '+`${terms[i].position==='New'?red:green}`+ '">'+terms[i].position+'</tr></td><tr><td>'+" | "+terms[i].age+" | "+terms[i].gender+" | "+terms[i].mobileNumber+" | "+terms[i].city+'</td></tr></table>';
  }
  res.innerHTML = '<div>' + table + '</div>';

  $(document).ready(function() {
    $('div#result').keyscroll();
  });
}

function uniKeyCode(event) {
  var key = event.which || event.keyCode; 
  if(key==38||key==40){
    console.log(key);
    document.getElementById("q").blur();
    document.getElementById("result").focus();
  }
}



// 38,40