var bName=document.getElementById('name')
var bUrl=document.getElementById('url')

var bookContainer=[]

if(localStorage.getItem('book')!=null)
{
    bookContainer=JSON.parse(localStorage.getItem('book'));
    display();
}

function addBook()
{
    var bookObj={
            name:bName.value,
            url:bUrl.value
    }
    console.log(bookContainer)
    bookContainer.push(bookObj);
    localStorage.setItem('book',JSON.stringify(bookContainer));
    display();
    bName.value=" ";
    bUrl.value=" ";
}

function display()
{
    var item=``;

    for(var i=0;i<bookContainer.length;i++)
    {
        item+=`<div class="container show2  py-5 px-4 my-2">
        <div class="row row-cols-3">
            <span class="fw-bold fs-4">${bookContainer[i].name}</span>
            <a href="${bookContainer[i].url}" class="bt btn btn-primary mx-2">Visit</a>
            <button onclick="Delete(${i})" class="bt btn btn-danger  mx-2">Delete</button>
        </div>
    </div>`
    }
    document.getElementById('show').innerHTML=item;
}

function Delete(num)
{
    bookContainer.splice(num,1);
    localStorage.setItem('book',JSON.stringify(bookContainer));
    display()
}




