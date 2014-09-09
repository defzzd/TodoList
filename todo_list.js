// This answer was retyped by myself from a very directly useful Stack Overflow post at
// http://stackoverflow.com/questions/17012157/remove-clicked-li-onclick
// ... which I found after much reading and testing, from which I ended up with another dynamic list implementation which reached the point it was able to delete premade items and add new entries that couldn't be deleted with the code I had.
// The problem had something to do with the selector function I was using not caring about newly created items even though they contained the proper class attribute; this might have been because the selector only picked up list entries to scan on window load.


// Initialization:

window.onload = function () {

    var add_list_entry_button = document.getElementById("add_list_entry_button");
    add_list_entry_button.onclick = add_new_list_item;

};


// This all-in-one function takes text field data and make <li> entries with it.
// Each <li> so created will feature an onclick function which deletes the <li>.
function add_new_list_item() {

    var text_entry_field = document.getElementById("text_entry_field");
    var text_entry_field_contents = text_entry_field.value;

    if (text_entry_field_contents) {

        var todo_list = document.getElementById("todo_list");
        var list_element = document.createElement("li");

        //list_element.innerHTML = text_entry_field_contents;
        list_element.textContent = text_entry_field_contents;
        // I'm almost certain this is called an anonymous function, like a lambda.
        list_element.onclick = function () {
            this.parentNode.removeChild(this);
        };

        if (todo_list.childElementCount === 0) {

            todo_list.appendChild(list_element);

        } else {

            todo_list.insertBefore(list_element, todo_list.firstChild);

        }

        // Despite the netterblags telling me otherwise, none of the following comments work for simply resetting the input field:
        //text_entry_field.reset();
        //document.getElementById("text_entry_field").reset();
        //document.getElementById("text_entry_field")[0].reset();
        //text_entry_field_contents = '';

        // They did lead me to the correct solution, though.
        document.getElementById("text_entry_field").value = '';

    }
}
