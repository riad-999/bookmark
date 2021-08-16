function initial()
{
  
}
function show_close_nav()
{
    const nav = 
    document.querySelector(".main-header__nav");
    nav.classList.toggle("show");
}
class Tab
{
    static current = document.
    querySelector(".current");
    static tabs = Array.from(document.
    querySelectorAll(".features__btn"));
    static features = Array.from(document.
    querySelectorAll(".feature"));
    static switch_tab(event)
    {
        const current_tab = event.currentTarget;
        Tab.current.classList.remove("current");        
        current_tab.classList.add("current")
        Tab.features[Tab.tabs.indexOf(Tab.current)].classList.
        add("hidden");
        Tab.current = current_tab;
        Tab.features[Tab.tabs.indexOf(Tab.current)].classList
        .remove("hidden"); 
    }
}
function open_close_answer(event)
{
    const target = event.target;
    if(target.closest(".question"))
    {
        const qeustion = target
        .closest(".question");
        const answer = qeustion.nextElementSibling;
        answer.classList.toggle("hidden");
    }
}
function form_submit(event)
{
    event.preventDefault();
    const input = 
    event.currentTarget.querySelector("input");
    const value = input.value;
    const mailformat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(value === "")
        alert("empty feild, please fill the all the inputs");
    else
    {
        console.log(mailformat.test(value))
    if(mailformat.test(value))
        alert("you email has been saved succesfully");
    else 
        alert("you have entered an unvalid email");
    }
}
// function show_message(message)
// {
//     const div = document.createElement("DIV");
//     div.classList.add("message");
//     div.innerHTML = message;
//     document.body.append(div);
//     setTimeout(()=>
//     {
//         div.remove();
//     } , 4000);
// }


