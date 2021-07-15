let items_per_page = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
    //generate the html list of student cards
    let student_list = document.querySelector('.student-list');
    student_list.innerHTML = "";

    if (list.length>0){
        //determine start/end card indexes for each page
        let i_start = (page * items_per_page) - items_per_page;
        let i_end = page * items_per_page;


        for (let i = 0; i < list.length; i++) {
            if (i >= i_start && i < i_end) {
                let card = `
                <li class="student-item cf">
                    <div class="student-details">
                        <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
                        <h3>${list[i].name.first} ${list[i].name.last}</h3>
                        <span class="email">${list[i].email}</span>
                    </div>
                    <div class="joined-details">
                        <span class="date">Joined ${list[i].registered.date}</span>
                    </div>
                </li>
            `;
                //put it in!
                student_list.insertAdjacentHTML("beforeend",card);
            }
        }
    } else {
        student_list.insertAdjacentHTML('beforeend', 'Oops! No results found.');
    }

}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
    //select the element we'll be populating
    let link_list = document.querySelector('.link-list');
    link_list.innerHTML = '';

    if (list.length>0){
        //figure out how many pages
        let page_buttons = Math.ceil(list.length/items_per_page);


        //make them buttons!
        for (let i=1; i<=page_buttons; i++){
            let button = `
            <li>
               <button type="button">${i}</button>
            </li>
        `
            link_list.insertAdjacentHTML("beforeend",button);
        }

        //make sure the first button is active
        let first_button = document.querySelector('.link-list li button');
        first_button.classList.add('active');

        //event listener for when buttons are clicked
        link_list.addEventListener('click', (e)=>{
            if (e.target.tagName==="BUTTON"){

                //remove other active buttons. we only want one!
                let all_buttons = document.querySelectorAll('.link-list li button')
                for (let i=0; i<all_buttons.length; i++){
                    all_buttons[i].classList.remove('active');
                }

                //make current button active
                e.target.classList.add('active');

                //and then show that page!
                showPage(data,e.target.innerText);
            }
        })
    } else {
        link_list.insertAdjacentHTML("beforeend", "No pages!");
    }

}


// Call functions
showPage(data,1);
addPagination(data);


/*
* SEARCH COMPONENT
 */
let header = document.querySelector('.header');
let search_html = `
<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
`
header.insertAdjacentHTML('beforeend',search_html);

let search = document.getElementById('search');
search.addEventListener('keyup', ()=>{
    let search_value = search.value.toLowerCase();

    let filtered = Array.prototype.filter.call(data, function(person){
        let full_name = (person.name.first + " " + person.name.last).toLowerCase();
        return (full_name.includes(search_value));
    });
    showPage(filtered,1);
    addPagination(filtered);
})