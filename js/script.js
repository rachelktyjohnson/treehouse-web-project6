let items_per_page = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
    let i_start = (page * items_per_page) - items_per_page;
    let i_end = page * items_per_page;

    let student_list = document.querySelector('.student-list');
    student_list.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        if (i >= i_start && i < i_end) {
            let card = `
                <li class="student-item cf">
                    <div class="student-details">
                        <img class="avatar" src="${data[i].picture.thumbnail}" alt="Profile Picture">
                        <h3>${data[i].name.first} ${data[i].name.last}</h3>
                        <span class="email">${data[i].email}</span>
                    </div>
                    <div class="joined-details">
                        <span class="date">Joined ${data[i].registered.date}</span>
                    </div>
                </li>
            `;
            student_list.insertAdjacentHTML("beforeend",card);
        }
    }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


// Call functions
