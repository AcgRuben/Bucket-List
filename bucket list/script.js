// #1 Create a <p> using the createElement method. When you have a reference to your new element, change its innerText to something that you would like to have on your bucket list, and then append it to the DOM with the appendChild method. Where does this element go? How can you get it do be added directly after the already existing <p>.

const paragraphItem1 = document.createElement("p"); 
paragraphItem1.innerText = "Travel the world"; 
console.log(paragraphItem1);

const body = document.body;
const section = body.querySelector("section");
section.appendChild(paragraphItem1);

// #2 Create another <p> with an item you would like to have on you bucket list. This time add it to the DOM, right after your existing <p>-tags with the help of the insertAdjecentElement method. This method accepts a position argument. Which value should that argument have?

const paragraphItem2 = document.createElement("p"); 
paragraphItem2.innerText = "Drink 10 million beers"; 
section.insertAdjacentElement("beforeend", paragraphItem2); 

// #3 innerHTML is an interesting property that exists on HTML elements. With that property we can get and set the inner HTML of a HTML element very easy. Try to get (or do you already have it?) the inner HTML from the element that contains all the <p>-tags of your bucket list. Log that to the console.

const valueOfSection = body.querySelector("section").innerHTML; 
console.log(valueOfSection);

// #4 In order to set the innerHTML of an element we need to create a string that contains the HTML code that we want to add to the DOM. It can look something like this:"<div>This is a div element as a string</div>";
// Now create that string that contains a new item that you want to add to your bucket list.
// #5 Set the innerHTML of the list with the new item you just created. What happens when you do that?

// const paragraphItem3 = "<p>Dricka 100 mille öl</p>";
// section.innerHTML += paragraphItem3

// #6 Comment out that previous line(s) of code and the three items that you had before you should exist again. How can you add that last item and still keep the three other ones? There is a method that is very similar to the insertAdjecentElement that will take your HTML string and add it to the list. Try to add your new item to the beginning of the list.

const paragraphItem3 = "<p>Drink a billion beers</p>";
section.insertAdjacentHTML("afterbegin",paragraphItem3);

// #7 Add three more items to the end of list, but try and do it with a loop instead. Less repetitive code.
moreItems = ["Buy myself a beer", "Buy a stranger a beer", "Have myself a nice cold beer"];
for(let items of moreItems){
    
    const paragraphs = document.createElement("p");
    paragraphs.innerText = items;
    section.appendChild(paragraphs);
    console.log(items)
}

// #8  How many items do you have in your bucket list now? Log it to the console. Use the children property.
console.log(section.children);

// #9 Change the content of the h2 at the to top of the HTML document do have your name instead of "Bucky's";

body.firstElementChild.innerHTML = "Oscar's";

// #10 Replace the first item in your list with a new item. There are several ways to do this, but try the replaceChild method out.

const newFirstItem = document.createElement("p"); 
newFirstItem.innerText = "DRINK A GAZILION BEERS";

const firstItem = section.querySelector("p");

section.replaceChild(newFirstItem, firstItem);

// #11 Now try replace an element in the middle of the list to a new one. Use the same method as before or get creative.

const newMiddleItem = document.createElement("p");
newMiddleItem.innerText = "Stuck in the middle with you"; 

section.replaceChild(newMiddleItem, paragraphItem2);

// #12 Remove the last element in the list. lastChildElement combine with the removeChild method might work.


lastItem = section.lastElementChild;
section.removeChild(lastItem);