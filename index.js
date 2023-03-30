const unicorn = [ 
    {
      "_id": "641c96ee7ec064e78397d533",
      "name": "Horny",
      "dob": "1992-03-13T15:47:00.000Z",
      "loves": [
        "carrot",
        "papaya"
      ],
      "weight": 600,
      "gender": "m",
      "vampires": 63,
      "vaccinated": "True"
    },
    {
      "_id": "641c96ee7ec064e78397d534",
      "name": "Aurora",
      "dob": "1991-01-24T21:00:00.000Z",
      "loves": [
        "carrot",
        "grape",
        "sugar"
      ],
      "weight": 450,
      "gender": "f",
      "vampires": 43,
      "vaccinated": "True"
    },
    {
      "_id": "641c96ee7ec064e78397d535",
      "name": "Unicrom",
      "dob": "1973-02-10T06:10:00.000Z",
      "loves": [
        "energon",
        "redbull"
      ],
      "weight": 984,
      "gender": "m",
      "vampires": 182,
      "vaccinated": "True"
    },
    {
      "_id": "641c96ee7ec064e78397d536",
      "name": "Roooooodles",
      "dob": "1979-08-19T01:44:00.000Z",
      "loves": [
        "apple"
      ],
      "weight": 575,
      "gender": "m",
      "vampires": 99,
      "vaccinated": "True"
    },
    {
      "_id": "641c96ee7ec064e78397d537",
      "name": "Solnara",
      "dob": "1985-07-04T09:01:00.000Z",
      "loves": [
        "apple",
        "carrot",
        "chocolate"
      ],
      "weight": 550,
      "gender": "f",
      "vampires": 80,
      "vaccinated": "True"
    },
    {
      "_id": "641c96ee7ec064e78397d538",
      "name": "Ayna",
      "dob": "1998-03-07T16:30:00.000Z",
      "loves": [
        "strawberry",
        "lemon"
      ],
      "weight": 733,
      "gender": "f",
      "vampires": 40,
      "vaccinated": "True"
    },
    {
      "_id": "641c96ee7ec064e78397d539",
      "name": "Kenny",
      "dob": "1997-07-01T17:42:00.000Z",
      "loves": [
        "grape",
        "lemon"
      ],
      "weight": 690,
      "gender": "m",
      "vampires": 39,
      "vaccinated": "True"
    },
    {
      "_id": "641c96ee7ec064e78397d53a",
      "name": "Raleigh",
      "dob": "2005-05-03T07:57:00.000Z",
      "loves": [
        "apple",
        "sugar"
      ],
      "weight": 421,
      "gender": "m",
      "vampires": 2,
      "vaccinated": "True"
    },
    {
      "_id": "641c96ee7ec064e78397d53b",
      "name": "Leia",
      "dob": "2001-10-08T21:53:00.000Z",
      "loves": [
        "apple",
        "watermelon"
      ],
      "weight": 601,
      "gender": "f",
      "vampires": 33,
      "vaccinated": "True"
    },
    {
      "_id": "641c96ee7ec064e78397d53c",
      "name": "Pilot",
      "dob": "1997-03-01T13:03:00.000Z",
      "loves": [
        "apple",
        "watermelon"
      ],
      "weight": 650,
      "gender": "m",
      "vampires": 55,
      "vaccinated": "True"
    }
  ]




const searchBtnClick = () => {
  $("#searchResult").empty();
    console.log("searchBtnClick");
    unicorn.map(
      (unicorn) => {
        if (unicorn.name === $("#searchInput").val() ) {
          $("#searchResult").html(JSON.stringify(unicorn))
        }
      }
    )
}

const searchBtnWeightClick = () => {
  $("#searchResult").empty();
  console.log("searchBtnWeightClick");
  unicorn.map(
    (unicorn) => {
      if (unicorn.weight >= $("#searchInputWeightMin").val()
      &&
      unicorn.weight <= $("#searchInputWeightMax").val() ) {
    $("#searchResult").append(JSON.stringify(unicorn))
      }
    }
  )
}


  


const setup = () => {
    console.log("setup");
    
    $("#searchBtn").click(searchBtnClick)
    $("#searchBtnWeight").click(searchBtnWeightClick)

}

$(document).ready(setup)