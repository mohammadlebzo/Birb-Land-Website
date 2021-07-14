function takeInput()
{
  
  let name = prompt("What is your name ?");
  console.log(name);

  let favBird = prompt("which is your favorite bird ? \n Cockatiel \n Cockatoo \n Casco");
  console.log(favBird);
  
  let massage = name + "'s favorite bird is:" + favBird;

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
    document.getElementById("fav").innerHTML = "Choose only from these please.";
  }
}

