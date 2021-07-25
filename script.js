function takeInput()
{
  
  let name = prompt("What is your name ?");
  console.log(name);

  let favBird = prompt("which is your favorite bird ? \n Cockatiel \n Cockatoo \n Casco");
  console.log(favBird);
  
  let massage = "<p>" + name + "'s favorite bird is: " + favBird + "</p>";

  if(favBird == "Cockatiel" || favBird == "cockatiel")
  {
    document.getElementById("fav").innerHTML = massage;   
  }
  else if(favBird == "Cockatoo" || favBird == "cockatoo")
  {
    document.getElementById("fav").innerHTML = massage;
  }
  else if(favBird == "Casco" || favBird == "casco")
  {
    document.getElementById("fav").innerHTML = massage;
  }
  else
  {
    document.getElementById("fav").innerHTML = "<p>Choose only from these please.</p>";
  }
}

function starRating()
{
  let rating = prompt("How much would you rate the website ?");
  console.log(rating);

  let fullStar = "";
  let emptyStar = "";

  if(rating == 0)
    {
      for(let i = 0; i < 5; i++)
      {
        emptyStar += "<div class=\"columnR\"><span class=\"fa fa-star empty\"></span></div>";
      }
      document.getElementById("rate").innerHTML = emptyStar;
    }
  else if(rating == 1)
  {
    for(let i = 0; i < 1; i++)
    {
      fullStar += " <div class=\"columnR\"><span class=\"fa fa-star checked\"></span></div>";
    }
    for(let i = 0; i < 4; i++)
    {
      emptyStar += "<div class=\"columnR\"><span class=\"fa fa-star empty\"></span></div>";
    }
    document.getElementById("rate").innerHTML = fullStar + emptyStar;
  }
  else if(rating == 2)
  {
    for(let i = 0; i < 2; i++)
    {
      fullStar += " <div class=\"columnR\"><span class=\"fa fa-star checked\"></span></div>";
    }
    for(let i = 0; i < 3; i++)
    {
      emptyStar += "<div class=\"columnR\"><span class=\"fa fa-star empty\"></span></div>";
    }
    document.getElementById("rate").innerHTML = fullStar + emptyStar;
  }
  else if(rating == 3)
  {
    for(let i = 0; i < 3; i++)
    {
      fullStar += " <div class=\"columnR\"><span class=\"fa fa-star checked\"></span></div>";
    }
    for(let i = 0; i < 2; i++)
    {
      emptyStar += "<div class=\"columnR\"><span class=\"fa fa-star empty\"></span></div>";
    }
    document.getElementById("rate").innerHTML = fullStar + emptyStar;
  }
  else if(rating == 4)
  {
    for(let i = 0; i < 4; i++)
    {
      fullStar += " <div class=\"columnR\"><span class=\"fa fa-star checked\"></span></div>";
    }
    for(let i = 0; i < 1; i++)
    {
      emptyStar += "<div class=\"columnR\"><span class=\"fa fa-star empty\"></span></div>";
    }
    document.getElementById("rate").innerHTML = fullStar + emptyStar;
  }
  else if(rating == 5)
  {
   for(let i = 0; i < 5; i++)
    {
      fullStar += " <div class=\"columnR\"><span class=\"fa fa-star checked\"></span></div>";
    }
    document.getElementById("rate").innerHTML = fullStar;
  }
  else
  {
    document.getElementById("rate").innerHTML = "Please Rate 0-5";
  }
}
