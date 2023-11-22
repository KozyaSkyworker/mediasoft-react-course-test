import{r as s,C as u,j as e}from"./index-7f476f94.js";function d(){return typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"}function _(n){const o=s.useContext(u);if(!o)throw new Error("Missing <CookiesProvider>");const[t,i]=s.useState(()=>o.getAll());d()&&s.useLayoutEffect(()=>{function l(){const c=o.getAll({doNotUpdate:!0});h(n||null,c,t)&&i(c)}return o.addChangeListener(l),()=>{o.removeChangeListener(l)}},[o,t]);const r=s.useMemo(()=>o.set.bind(o),[o]),m=s.useMemo(()=>o.remove.bind(o),[o]),f=s.useMemo(()=>o.update.bind(o),[o]);return[t,r,m,f]}function h(n,o,t){if(!n)return!0;for(let i of n)if(o[i]!==t[i])return!0;return!1}const p="_information_1uwo6_1",x="_information__form_1uwo6_9",j="_information__inpt_1uwo6_13",C="_information__textarea_1uwo6_13",b="_information__btn_1uwo6_20",a={information:p,information__form:x,information__inpt:j,information__textarea:C,information__btn:b},w=()=>{const[n,o]=s.useState({name:"",email:"",phone:"",message:""}),[t,i]=_(["form"]),r=m=>{o({...n,[m.target.name]:m.target.value}),i("form",n,{path:"/shop/info"})};return s.useEffect(()=>{t.form==null?i("form",n,{path:"/shop/info"}):o(t.form)},[]),e.jsxs("div",{className:a.information,children:[e.jsx("h1",{children:"Основные положения"}),e.jsxs("section",{className:"about",children:[e.jsx("h2",{children:"О нас"}),e.jsx("p",{children:'Мы рады предложить вам недорогие, но качественные товары с подробными описаниями, характеристиками и фотографиями. У нас Вы можете купить замечательные товары: технику, электронику, одежду, обувь, игрушки, книги и многое другое в вашем регионе по ценам производителей и без наценки. Продажа большого ассортимента разнообразных товаров – основная специализация нашего интернет-магазина. Мы доставим ваш заказ бесплатно в любой уголок мира, осуществим подробную консультацию по товарам и поможем с выбором. Магазин "MyShop.ru" предлагает Вам купить качественную и доступную технику, электронику, одежду, обувь, игрушки, книги и многое другое с доставкой! Все виды современных товаров от эконом класса до более дорогих представлены в нашем каталоге. Вы можете купить любые товары в вашем городе: технику, электронику, одежду, обувь, игрушки, книги и многое другое.'})]}),e.jsxs("section",{className:"contacts",children:[e.jsx("h2",{children:"Контакты"}),e.jsx("p",{children:"Вы можете найти нас по адресу: г. Москва, ул. Торговая, дом 123, офис 456 Как добраться: Сокольническая линия метро, последний вагон из центра, выход в сторону Казанского вокзала. Телефон отдела продаж: 8-495-123-45-67 (многоканальный) Телефон отдела оптовых продаж: 8-495-765-43-21 Email: sales@myshop.ru График работы офиса и склада: Понедельник с 9:00 до 21:00 Вторник с 9:00 до 21:00 Среда с 9:00 до 21:00 Четверг с 9:00 до 21:00 Пятница с 9:00 до 21:00 Суббота с 10:00 до 20:00 Воскресенье с 10:00 до 20:00"})]}),e.jsxs("section",{className:"feedback",children:[e.jsx("h2",{children:"Обратная связь"}),e.jsxs("form",{className:a.information__form,children:[e.jsxs("label",{children:["Введите Ваше",e.jsx("br",{}),e.jsx("input",{className:a.information__inpt,type:"text",placeholder:"Как к Вам обращаться?",name:"name",value:n.name,onChange:r,required:!0})]}),e.jsxs("label",{children:["Введите Ваш адресс электронной почты",e.jsx("br",{}),e.jsx("input",{className:a.information__inpt,type:"email",placeholder:"example@gmail.com",name:"email",value:n.email,onChange:r,required:!0})]}),e.jsxs("label",{children:["Введите Ваш номер телефона",e.jsx("br",{}),e.jsx("input",{className:a.information__inpt,type:"tel",placeholder:"8 (999) 999-99-99",name:"phone",value:n.phone,onChange:r,required:!0})]}),e.jsxs("label",{children:["Введите Ваше сообщение",e.jsx("br",{}),e.jsx("textarea",{className:a.information__textarea,id:"",cols:"30",name:"message",value:n.message,onChange:r,required:!0})]}),e.jsx("button",{className:a.information__btn,children:"Отправить"})]})]})]})};export{w as default};
