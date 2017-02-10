function formValidation()    // This function is called when submit button on form is clicked and it will check all the validations.
	{
		var firstName =  document.getElementById("fname").value;
		var lastName =  document.getElementById("lname").value;
		var city =  document.getElementById("city").value;
		var postal =  document.getElementById("postal").value;
		var email =  document.getElementById("email").value;
		var address = document.getElementById("address").value; 
	   	//  to check empty form fields.
		if(firstName == "" ||  lastName == "" || city == "" || postal == "" || email == "" ||  address == "")
			{
				
				alert( "---  Fields marked with *(asterisk) are mandatory ---");
				//this segment displays the validation rule for all fields
				return false;
			}
		if(!emailValidation(email))
			{
				return false;
			}
		if(!cityCheck(city))
			{
				return false;
			}
		if(!postalMatch(postal))
			{
				return false;
			}    
	}
 
  function titleCase(id)    // This function will change first alphabet of every input word to uppercase rest lowercase
		{
		       var id1 =  document.getElementById(id).value;
			   id1 = id1.trim();
               var splitStr = id1.toLowerCase().split(' ');
               for (var i = 0; i < splitStr.length; i++)
				   {
                        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
                   }
               id1=splitStr.join(' ');
               document.getElementById(id).value = id1;   
        } 
 function cityCheck(inputt)       // This function will check the length of city textbox it should be atleast 3 characters long.
	{
		if(inputt.length>= 3)
			{
				return true;
			}
		else
			{
				alert("* Please enter atleast 3 characters *");
				//this segment displays the validation rule for username
				document.getElementById("city").focus();
				return false;
			}
	}
 function convertToUpper()   // This function is called on blur to convert input into uppercase and trim all leading and trailing spaces.
	{
		var postal =  document.getElementById("postal").value;
		var postalTrim = postal.trim();
		var postalUpper = postalTrim.toUpperCase();
		document.getElementById("postal").value = postalUpper;
	 
	}
 function postalMatch(input)   // This function checks whether input text matches the given format of postal code or not.
	{
		var strMatch = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
		if(input.match(strMatch))
			{
				return true;
			}
		else
			{
				alert("* Please enter in Correct format (eg. A9Z9A9)");
				document.getElementById("postal").focus();
				return false;
			}
	}
 function emailValidation(inputtext)    // This function checks whether input text matches the given format of email or not.
	{
		var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
		if(inputtext.match(emailExp))
			{
				return true;
			}
		else
			{ 
				alert("* Please enter a valid email address (eg. abc@def.abs) *");
				//this segment displays the validation rule for email
				document.getElementById("inputtext").focus();
				return false;
			}
	}