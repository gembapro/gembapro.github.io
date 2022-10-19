function ExecuteScript(strId)
{
  switch (strId)
  {
      case "640oAiZ8uhz":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer(); 

var scoreTotal = 100; 

//set score; the first number is the score 

lmsAPI.SetScore(scoreTotal, 100, 0); 

//set status; possible values: "completed","incomplete", "failed","passed" 

if ( scoreTotal >= 100 ) { 

  lmsAPI.SetPassed();

} else { 

  lmsAPI.ResetStatus();

}
}

