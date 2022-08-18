import React from "react";
import SuggestionRow from "./suggestionRow";

const suggestions = [
  {
    id: "123",
    username: "swetha ogeti",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJDJisq3ecaPo1prF9NShDFkKC9D11JWLWnW885vVRbCXzaprii6ikn5GQgqxUOenW4A&usqp=CAU",
    worksAt: " encourage your clients ",
  },

  {
    id: "124",
    username: "Jerry",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDubjQzVfqY6Tquckxqoi5ooS1zBj_2LPJsQ&usqp=CAU",
    worksAt: " generators you can  ",
  },

  {
    id: "125",
    username: "Jyothika ogeti",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PwKZcAYo7F-MlD4mZaHIuHtJlrIP6LMm8w&usqp=CAU",
    worksAt: " encourage your clients ",
  },
  {
    id: "126",
    username: "James smith",
    userImg:
      "https://cdn.quotesgram.com/img/44/97/2115314380-BcogIEmIEAA3O5m.jpg",
    worksAt: "generators you can  ",
  },
  {
    id: "127",
    username: "Jessica",
    userImg:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    worksAt: " formatting, blockquotes  ",
  },
  {
    id: "128",
    username: "christan",
    userImg:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    worksAt: " dummy pics to your  ",
  },
];
const Suggestions = () => {
  return (
    <div className=" hidden xl:inline-flex  mt-5  max-w-[600px] xl:min-w-[300px] pl-2">
      <div className="flex flex-col flex-1 p-2">
        <h2 className="text-[1.5rem] font-bold text-gray-600">Suggestions</h2>
        {suggestions.map((item) => {
          return <SuggestionRow item={item} />;
        })}
      </div>
    </div>
  );
};

export default Suggestions;
