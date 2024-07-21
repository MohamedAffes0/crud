let price=document.getElementById('price');
let tax=document.getElementById('tax');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let body=document.body;
let display_icon=document.getElementById('display_icon');
let mode='dark';
function l_d_mode() {
    if (body.className=='light') {
        mode='dark';
        body.className='';
        localStorage.setItem('mode','dark');
        display_icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11017)"> <path d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z" fill="#ffffff"></path> </g> <defs> <clipPath id="clip0_429_11017"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>';
    } else {
        mode='light';
        body.className='light';
        localStorage.setItem('mode','light');
        display_icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#a)" fill="#000000"> <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path> </g> <defs> <clipPath id="a"> <path fill="#000000" d="M0 0h24v24H0z"></path> </clipPath> </defs> </g></svg>';
    }
}
function mode_init() {
    if (localStorage.mode=='light') {
        mode='light';
        body.className='light';
        display_icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#a)" fill="#000000"> <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path> </g> <defs> <clipPath id="a"> <path fill="#000000" d="M0 0h24v24H0z"></path> </clipPath> </defs> </g></svg>';
    } else if(localStorage.mode=='dark'){
        mode='dark';
        body.className='';
        display_icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11017)"> <path d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z" fill="#ffffff"></path> </g> <defs> <clipPath id="clip0_429_11017"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>';
    }
}
mode_init();
calcTotal();
function calcTotal() {
    if (price.value=='') {
        total.innerHTML='Total:';
        if (mode=='dark') {
            total.style.backgroundColor='rgb(139, 58, 58)';
        } else {
            total.style.backgroundColor='rgb(204, 85, 76)';
        }
    } else {
        let result=(+price.value + +tax.value + +ads.value) - +discount.value;
        total.innerHTML='Total:'+result+'$';
        if (mode=='dark') {
            total.style.backgroundColor='rgb(86, 139, 58)';
        } else {
            total.style.backgroundColor='rgb(133, 191, 32)';
        }
        return result;
    }
}
let title=document.getElementById('title');
let category=document.getElementById('category');
let count=document.getElementById('count');
let create_item=document.getElementById('create-item');
let sp1=document.getElementById('sp1');
let sp2=document.getElementById('sp2');
let sp3=document.getElementById('sp3');
let data=[];
function reload_table() {
    if (localStorage.getItem('data')!=null || localStorage.length!=0) { //|| localStorage.length!=0
        data=JSON.parse(localStorage.getItem('data'));
    }
    else{
        data=[];
    }
}
function create() {
    if (localStorage.getItem('data')!=null) {
        data=JSON.parse(localStorage.getItem('data'));
    }
    else{
        data=[];
    }
    title.value=title.value.trim();
    if (title.value=='' || price.value=='' || category.value=='') {
        if (title.value=='') {
            title.style.border='solid 2px red';
            sp1.removeAttribute('class');
        }
        if (price.value=='') {
            price.style.border='solid 2px red';
            sp2.removeAttribute('class');
        }
        if (category.value=='') {
            category.style.border='solid 2px red';
            sp3.removeAttribute('class');
        }
    } else {
        let d={
            title:title.value.toLowerCase(),
            price:price.value,
            tax:tax.value,
            ads:ads.value,
            discount:discount.value,
            total:calcTotal(),
            category:category.value.toLowerCase(),
            count:count.value,
        }
        if (count.value=='') {
            d.count=1;
        }
        data.push(d);
        save_data();
        title.value='';
        price.value='';
        tax.value='';
        ads.value='';
        discount.value='';
        category.value='';
        count.value='';
        calcTotal();
        reload_items();
    }
}
function save_data() {
    localStorage.setItem('data',JSON.stringify(data));
}
function no_border(name,sp) {
    let y=document.getElementById(sp);
    let x=document.getElementById(name);
    x.style.border='solid 0px';
    y.setAttribute('class','hidden');
}
let delete_all=document.getElementById('delete_all');
function reload_items() {
    let l_data=JSON.parse(localStorage.getItem('data'));
    if (l_data==null || l_data.length==0) {
        delete_all.setAttribute('class','hidden');
        items.innerHTML='';
    } else {
        delete_all.removeAttribute('class');
        delete_all.innerText='Delete All('+l_data.length+')';
        let items=document.getElementById('items');
        items.innerHTML='';
        for (let index = 0; index < l_data.length; index++) {
            const element = l_data[index];
            let tr=document.createElement('tr');
            tr.setAttribute('id',index);
            let td1=document.createElement('td');
            td1.innerText=index + 1;
            tr.appendChild(td1);
            let td2=document.createElement('td');
            td2.innerText=element.title;
            tr.appendChild(td2);
            let td3=document.createElement('td');
            td3.innerText=element.price;
            tr.appendChild(td3);
            let td4=document.createElement('td');
            td4.innerText=element.tax;
            tr.appendChild(td4);
            let td5=document.createElement('td');
            td5.innerText=element.ads;
            tr.appendChild(td5);
            let td6=document.createElement('td');
            td6.innerText=element.discount;
            tr.appendChild(td6);
            let td7=document.createElement('td');
            td7.innerText=element.total;
            tr.appendChild(td7);
            let td8=document.createElement('td');
            td8.innerText=element.category;
            tr.appendChild(td8);
            let td9=document.createElement('td');
            td9.innerText=element.count;
            tr.appendChild(td9);
            let td10=document.createElement('td');
            let div1=document.createElement('div');
            div1.setAttribute('id','update');
            div1.setAttribute('onclick',`upd(${index})`);
            div1.innerText='Update';
            td10.appendChild(div1);
            tr.appendChild(td10);
            let td11=document.createElement('td');
            let div2=document.createElement('div');
            div2.setAttribute('id','delete');
            div2.setAttribute('class',`delete${index}`)
            div2.setAttribute('onclick',`del(${index})`);
            div2.innerText='Delete';
            td11.appendChild(div2);
            tr.appendChild(td11);
            items.appendChild(tr);
        }
    }
}
function del_all() {
    localStorage.removeItem('data');
    data=[];
    reload_items();
}
function del(index) {
    let l_data=JSON.parse(localStorage.getItem('data'));
    l_data.splice(+index,1);
    localStorage.setItem('data',JSON.stringify(l_data));
    reload_table();
    reload_items();
}
function upd(index) {
    let dl=document.getElementsByClassName(`delete${index}`)[0];
    console.log(dl);
    dl.removeAttribute('onclick');
    let l_data=JSON.parse(localStorage.getItem('data'));
    let l_data1=l_data[+index];
    title.value=l_data1.title;
    price.value=l_data1.price;
    tax.value=l_data1.tax;
    ads.value=l_data1.ads;
    discount.value=l_data1.discount;
    calcTotal();
    category.value=l_data1.category;
    count.value=l_data1.count || 1;
    create_item.innerText='Update';
    create_item.setAttribute('class','upd');
    create_item.setAttribute('onclick',`get_upd(${index})`);
}
function get_upd(index) {
    title.value=title.value.trim();
    if (title.value==='' || price.value==='' || category.value==='') {
        if (title.value==='') {
            title.style.border='solid 2px red';
            sp1.removeAttribute('class');
        }
        if (price.value==='') {
            price.style.border='solid 2px red';
            sp2.removeAttribute('class');
        }
        if (category.value==='') {
            category.style.border='solid 2px red';
            sp3.removeAttribute('class');
        }
    }
    else{
        let d=JSON.parse(localStorage.getItem('data'));
        d[+index].title=title.value;
        d[+index].price=price.value;
        d[+index].tax=tax.value;
        d[+index].ads=ads.value;
        d[+index].discount=discount.value;
        d[+index].total=calcTotal();
        d[+index].category=category.value;
        if (count.value=='') {
            d[+index].count=1;
        }
        else{
            d[+index].count=count.value;
        }
        localStorage.setItem('data', JSON.stringify(d));
        create_item.innerText = 'Create';
        create_item.removeAttribute('class');
        create_item.setAttribute('onclick','create()');
        reload_table();
        reload_items();
        title.value='';
        price.value='';
        tax.value='';
        ads.value='';
        discount.value='';
        calcTotal();
        category.value='';
        count.value='';
        let dl=document.getElementsByClassName(`delete${index}`);
        dl.setAttribute('onclick',`del(${index})`);
    }
}
reload_table();
reload_items();
let search=document.getElementById('search');
let m='Title';
function cherche_mode(mode) {
    if (mode=='s-title') {
        m='Title';
    } else {
        m='Category';
    }
    search.placeholder='Search By '+m;
    search.focus();
    return m;
}
function chercher() {
    console.log('ok');
    let dt=JSON.parse(localStorage.getItem('data'));
    items.innerHTML='';
    for (let index = 0; index < dt.length; index++) {
        const element = dt[index];
        if ((m=='Title' && element.title.toLowerCase().includes(search.value.toLowerCase()))||(m == 'Category' && element.category.toLowerCase().includes(search.value.toLowerCase()))) {
            let tr=document.createElement('tr');
            tr.setAttribute('id',index);
            let td1=document.createElement('td');
            td1.innerText=index + 1;
            tr.appendChild(td1);
            let td2=document.createElement('td');
            td2.innerText=element.title;
            tr.appendChild(td2);
            let td3=document.createElement('td');
            td3.innerText=element.price;
            tr.appendChild(td3);
            let td4=document.createElement('td');
            td4.innerText=element.tax;
            tr.appendChild(td4);
            let td5=document.createElement('td');
            td5.innerText=element.ads;
            tr.appendChild(td5);
            let td6=document.createElement('td');
            td6.innerText=element.discount;
            tr.appendChild(td6);
            let td7=document.createElement('td');
            td7.innerText=element.total;
            tr.appendChild(td7);
            let td8=document.createElement('td');
            td8.innerText=element.category;
            tr.appendChild(td8);
            let td9=document.createElement('td');
            td9.innerText=element.count;
            tr.appendChild(td9);
            let td10=document.createElement('td');
            let div1=document.createElement('div');
            div1.setAttribute('id','update');
            div1.setAttribute('onclick',`upd(${index})`);
            div1.innerText='Update';
            td10.appendChild(div1);
            tr.appendChild(td10);
            let td11=document.createElement('td');
            let div2=document.createElement('div');
            div2.setAttribute('id','delete');
            div2.setAttribute('class',`delete${index}`)
            div2.setAttribute('onclick',`del(${index})`);
            div2.innerText='Delete';
            td11.appendChild(div2);
            tr.appendChild(td11);
            items.appendChild(tr);
        }
    }
}