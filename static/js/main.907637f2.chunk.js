(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(19),s=n.n(o),r=n(8),i=(n(29),n(23)),u=n(12),l=n(2),p=n(3),d=n.p+"static/media/logo-white.1f1e9591.svg",m=n(0);var j=function(e){var t=e.email,n=e.loggedIn,a=e.onSignOut;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("img",{src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f: \u043d\u0430\u0434\u043f\u0438\u0441\u044c Mesto.Russia",className:"header__logo"}),Object(m.jsx)("div",{className:"header__link-container",children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"header__mail",children:t}),Object(m.jsx)(r.b,{to:"/sign-in",className:"header__link button header__link_shadow",onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(r.c,{to:"/sign-up",className:"header__link button",activeClassName:"header__link_hidden",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsx)(r.c,{to:"/sign-in",className:"header__link button",activeClassName:"header__link_hidden",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})},b=c.a.createContext();var f=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,o=e.onCardDelete,s=t.name,r=t.link,i=t.likes,u=c.a.useContext(b),l=t.owner._id===u._id,p="button card__trash-button ".concat(!l&&"card__trash-button_hidden"),d=t.likes.some((function(e){return e._id===u._id})),j="button card__like ".concat(d&&"card__like_active");return Object(m.jsxs)("li",{className:"card",children:[Object(m.jsx)("img",{src:r,className:"card__image button",alt:s,onClick:function(){n(t)}}),Object(m.jsxs)("div",{className:"card__alt",children:[Object(m.jsx)("h2",{className:"card__title",children:s}),Object(m.jsxs)("div",{className:"card__like-container",children:[Object(m.jsx)("button",{className:j,type:"button",onClick:function(){a(t)}}),Object(m.jsx)("p",{className:"card__like-number",children:i.length})]})]}),Object(m.jsx)("button",{type:"button",className:p,onClick:function(){o(t)}})]})};var h=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,o=e.cards,s=e.onCardClick,r=e.onCardLike,i=e.onCardDelete,u=c.a.useState(!1),p=Object(l.a)(u,2),d=p[0],j=p[1],h=c.a.useContext(b);return Object(m.jsxs)("main",{className:"content",children:[Object(m.jsxs)("section",{className:"profile",children:[Object(m.jsxs)("div",{className:"profile__avatar-container",children:[Object(m.jsx)("img",{src:h.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",onMouseEnter:function(){j(!0)}}),Object(m.jsx)("div",{className:"profile__avatar-edit-button ".concat(d?"profile__avatar-edit-button_visible":""),onClick:a,onMouseLeave:function(){j(!1)}})]}),Object(m.jsxs)("div",{className:"profile__info-container",children:[Object(m.jsxs)("div",{className:"profile__name-container",children:[Object(m.jsx)("h1",{className:"profile__name",children:h.name}),Object(m.jsx)("button",{type:"button",className:"profile__edit-button button",onClick:t})]}),Object(m.jsx)("p",{className:"profile__about",children:h.about})]}),Object(m.jsx)("button",{type:"button",className:"profile__add-button button",onClick:n})]}),Object(m.jsx)("section",{className:"cards",children:Object(m.jsx)("ul",{className:"cards__list",children:o.map((function(e){return Object(m.jsx)(f,{card:e,onCardClick:s,onCardLike:r,onCardDelete:i},e._id)}))})})]})};var O=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var x=function(e){var t=e.onSignIn,n=c.a.useState(""),a=Object(l.a)(n,2),o=a[0],s=a[1],r=c.a.useState(""),i=Object(l.a)(r,2),u=i[0],p=i[1];return Object(m.jsx)("main",{className:"content",children:Object(m.jsx)("div",{className:"login-container",children:Object(m.jsxs)("form",{className:"login-form",noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log("\u0434\u0435\u043b\u0430\u044e \u0437\u0430\u043f\u0440\u043e\u0441"),t({password:u,email:o})},children:[Object(m.jsx)("h2",{className:"login-form__title",children:"\u0412\u0445\u043e\u0434"}),Object(m.jsx)("input",{type:"email",className:"login-form__input",id:"email",name:"email",placeholder:"Email",required:!0,value:o,onChange:function(e){s(e.target.value)}}),Object(m.jsx)("div",{className:"popup__form-error-container",children:Object(m.jsx)("span",{className:"email-error popup__form-error"})}),Object(m.jsx)("input",{type:"password",className:"login-form__input",id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,value:u,onChange:function(e){p(e.target.value)}}),Object(m.jsx)("div",{className:"popup__form-error-container",children:Object(m.jsx)("span",{className:"password-error popup__form-error"})}),Object(m.jsx)("button",{type:"submit",className:"login-form__button button",children:"\u0412\u043e\u0439\u0442\u0438"})]})})})};var v=function(e){var t=e.onSignUp,n=c.a.useState(""),a=Object(l.a)(n,2),o=a[0],s=a[1],i=c.a.useState(""),u=Object(l.a)(i,2),p=u[0],d=u[1];return Object(m.jsx)("main",{className:"content",children:Object(m.jsx)("div",{className:"login-container",children:Object(m.jsxs)("form",{className:"login-form",noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log("\u0434\u0435\u043b\u0430\u044e \u0437\u0430\u043f\u0440\u043e\u0441"),t({password:p,email:o})},children:[Object(m.jsx)("h2",{className:"login-form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsx)("input",{type:"email",className:"login-form__input",id:"email",name:"email",placeholder:"Email",required:!0,value:o,onChange:function(e){s(e.target.value)}}),Object(m.jsx)("div",{className:"popup__form-error-container",children:Object(m.jsx)("span",{className:"email-error popup__form-error"})}),Object(m.jsx)("input",{type:"password",className:"login-form__input",id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,value:p,onChange:function(e){d(e.target.value)}}),Object(m.jsx)("div",{className:"popup__form-error-container",children:Object(m.jsx)("span",{className:"password-error popup__form-error"})}),Object(m.jsx)("button",{type:"submit",className:"login-form__button button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(m.jsx)(r.b,{className:"login-form__bottomlink button",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})})})};var N=function(e){var t=e.isOpen,n=e.onClose,a=e.result,c=e.message;return Object(m.jsx)("div",{className:"popup ".concat(t&&"popup_opened"),onClick:function(e){e.target.classList.contains("popup")&&n()},children:Object(m.jsxs)("div",{className:"popup__container popup__container_tooltip",children:[Object(m.jsx)("button",{type:"button",className:"popup__close-button button",onClick:n}),Object(m.jsx)("img",{src:a?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfBSURBVHgB7Z2NmZs4EIbfXAOXDnY6yHYQXQXZDkIHdx0sHSQdeK+CXCrwpoJLKlhfBdlUkPMsOB4E2GDzI4He51FMDKxBHzMa/SC9Yhm83qfbfZJ9elP+X8p02P+64bzdPj2b9K38/FqmZyLnFXHiKAR9y1HYMdhRCP2l/HwkMQpqfX/t03afvu/Tz5mS/vanfcoY76EalJAtWEXN9ukdhcWeQl3pjsLK/iu3D+mwv8ndCkf3LVRd/C3Nbt3yuE9/l587Ep1w+7ThtKU+lcdkjGtJt+VvPJS/ecq6N5x/EFeNo3DBbRmo+9RNC/MhFIKfus5/y2MSJY526ziIes5VzoFQCKmCtnmZjBXjaLYEdc0ficvdqSt/oF1ox4oQ2oXNCdNauyIUD2eTR9oQSeR9DX9SD56WIKyPUNxT00N8zwIRmq1Wn+olCesjNLvuJxZkzU1Wq4GJYz0IdbetefIXEaOW+YH605uzXnLq+fGBCBHq1Qd9gm9JCHVrjsplq4j+DWhkueSyti+aF5on0Yl8R728jbqcGRnNG79cviNQ3lO/2OSSz9Pk8d4TGL64UZUpASAELHISdxiEAEW+I4k7JEJd5NnKZKEaUCVxh0GoijxLLCPeRSRxh0WYOX+TuOMjVD2kNhxN0pbgNz+mqtB4aN5O2qz5J6kRY2r8xpDR8lyouoyPJKbCNmuqBsII+OVualueDs1rm/9bBuaeqpsQElPjl8eDuWqh6ppzEnORM4Kr3lB1zYl5sf3sV7tqR3LNoeGoauK4Aluwb0iEwgMDWHFGst5Q0ajaxkWOC7DWm5MIjZwrYqOM1NYcOldZsY3UohzWuRJyLiiLHansjYWLrNjWe1PkHD62nfqsXkLqCowNR7V162QfQUa1gzkRB1r+dmqjtgdmJGLB9hm3BltCCq5iRd2y1e6Xm/7NHOTM9iNpWqCYeKY6SVt22LACvzPbf5Poigai98zPZ7P9rukAW58SEl1QcQ/5NrfIQjWaruBIfb59eU/9Tcq5Rbb9B87usFHY2cpyovY+VigiP9BSXfpEqh515ZS4c4ucmWv4x+6wpp1ar9pR4X52THOMGRcailpbh/pOoo0+4mrmzmUoNi54qQ87OrSCrJy+4grzYbt6ndaD7ZP2g4SPipt3PHa3T38wbyPRN7MtKrDtffhKwhKbuHi/f6sCv2nZuXZiFFfZme3f9R8tdxsrxytmQzxlro/Di6lsoZyqSP3E1bwTwkLwqkpP5osb1ovGIn3FDXUm+orA9qJDY6oM1N9pm5o/JnGVWrtGqAIL0yxw0VfcB8J/N7qiaagCq3s5XNdYY7OF/uLGQPAC3zN+tCqcXwspRnGVoAXOOJ3RQzTiC/3EzYmLiqa1xukZEbpl/IbLrVlYtrhKRWB7szfMy5buGa/X3bfeLixfXKGaR8EILPTL/EO6H+nv58SJnazl5eWFrfnCMS9C+wpip9K5FqWmSbeXKK7iON6HalvJ0Iww0ECq7zrBKmDW8Ldue/6tnLjJON7Ly7Ad+3ZaTjgIl7lsrTMfgsW+4mbET46nZ2a+2BAe/uokXa1Z59Vcm7iKHUD5UqV0eIVygGRcZs1d0neWNZJ0C9WYKpZBd0K/alRXcZfWRdrYrvFkvrwhbHKSuG3YKtKT3RHbwHfhOpet5y5xcEPG8R5fIujD24VfzEFvCZ8dxRioS96C3JXnLnGAodXu0e5wtJh2BPSpM+u9CcvFejXn77SZdENcCOdd9tLFFc4Ey1u8+lOE5KxTXCXDK399Ok3kEQF3rHPZH2ugWdMBrRN5RIhQ3HCIw1rHQKhqJ20HLsFNW2J+SPuQ0dH7LsVNrw07cDA7deAgE00nJsVfjUXOnfBgDv5IInQ2HPXadDnBUa1PraUcixGhar2u64k22MpJhIpdKLRXV68jWXHoCNX6fkZP7Mk5idC458r+A0ey4lARqmVvxoXYsrhThJaYBBs5X2S9BxwXRmmJ0RAG1sRacaiD8taEjY0G8apCWl42FGxgNehK4P468mmylukRqhrkDIx11eomUlQ9Hf4S71cFVm0IVVedlrybDttiNahr9vFd9RL6jENHX8GZNM/9d4VSeTweflfgJL17/rRDo7qMFSPUy93J4h5hnQPbpkIIIH/9d2+TyMMgVMWd1UPesb7xx2Mi1Afw3zEzGUnkIRDq4mYEQkYS+RqEgMU9kFEXOVWhztM0j0hGoGh54V9sagxpx2/E0Lybvcw9h1B3N3bmm0SRF7b5MTqPJ9RFTuVyQdOkbNG+Q9U0BdI960Xv3c8PzaOovVvTG/hrs2ZHfeJxzZPFxCdC8xv4G5YtdNtCH1sWet85zfNpqOsSloMKq/fk3+uirLYNoXlGWbXwD8QtdJuwi7baNhztE6eoW4upkcRRPJxtwjpWTEa70IdldYTwUGtVd6sCNl273pMj8YuM00vcbJlfbOG0qMliO+A4P+u7Woe68YxxXbmUv7Hh9Dxc38tjHIHxinARigx7z/mMe6aYmlA/dYHkXZmey7RrOOc1xwYGMemG4qERzjdAPO7TZ4oH8pnExQiFJX2i/1T/Qyb97S2Fm46i9SlkCz6Fo7CytxytbQx2FJ7hS/n5SGTEKrCPWtNtmXT7DUcXrEkazjm4b2VXph8UQu44uvyo+R/5BrK0SFqXpAAAAABJRU5ErkJggg==":"data:image/png;base64,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",className:"popup__tooltip-image",alt:a?"\u0423\u0441\u043f\u0435\u0445!":"\u041e\u0448\u0438\u0431\u043a\u0430!"}),Object(m.jsx)("h2",{className:"popup__tooltip-title",children:a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(m.jsx)("p",{className:"popup__tooltip-message",children:c})]})})};var _=function(e){var t=e.card,n=e.onClose,a=t._id,c=t.link,o=t.name;return Object(m.jsx)("div",{className:"popup popup_dark ".concat(a&&"popup_opened"),id:"popup-bigpicture",onClick:function(e){e.target.classList.contains("popup")&&n()},children:Object(m.jsxs)("div",{className:"popup__container popup__container_picture",children:[Object(m.jsx)("button",{type:"button",className:"popup__close-button button",onClick:n}),Object(m.jsx)("img",{src:c,className:"popup__picture",alt:o}),Object(m.jsx)("h2",{className:"popup__pic-title",children:o})]})})};var g=function(e){var t=e.isOpen,n=e.onClose,a=e.onSubmit,c=e.name,o=e.title,s=e.submitText,r=e.children;return Object(m.jsx)("div",{className:"popup ".concat(t&&"popup_opened"),id:c,onClick:function(e){e.target.classList.contains("popup")&&n()},children:Object(m.jsxs)("div",{className:"popup__container popup__container_form",children:[Object(m.jsx)("button",{type:"button",className:"popup__close-button button",onClick:n}),Object(m.jsxs)("form",{className:"popup__form",name:c,onSubmit:a,noValidate:!0,children:[Object(m.jsx)("h2",{className:"popup__form-title",children:o}),r,Object(m.jsx)("button",{type:"submit",className:"popup__form-submit-button button",children:s})]})]})})};var C=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,o=c.a.useContext(b),s=c.a.useState(""),r=Object(l.a)(s,2),i=r[0],u=r[1],p=c.a.useState(""),d=Object(l.a)(p,2),j=d[0],f=d[1];return c.a.useEffect((function(){u(o.name),f(o.about)}),[o]),Object(m.jsxs)(g,{isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,about:j})},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"popup-profile",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(m.jsx)("input",{type:"text",className:"popup__form-input",id:"name",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",required:!0,minLength:"2",maxLength:"40",value:i,onChange:function(e){u(e.target.value)}}),Object(m.jsx)("div",{className:"popup__form-error-container",children:Object(m.jsx)("span",{className:"name-error popup__form-error"})}),Object(m.jsx)("input",{type:"text",className:"popup__form-input",id:"about",name:"about",placeholder:"\u0410 \u0447\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0435\u0442\u0435\u0441\u044c?",required:!0,minLength:"2",maxLength:"200",value:j,onChange:function(e){f(e.target.value)}}),Object(m.jsx)("div",{className:"popup__form-error-container",children:Object(m.jsx)("span",{className:"about-error popup__form-error"})})]})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=c.a.useRef();return Object(m.jsxs)(g,{isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:o.current.value}),o.current.value=""},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"popup-avatar",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(m.jsx)("input",{type:"url",className:"popup__form-input",id:"avatar",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:o}),Object(m.jsx)("div",{className:"popup__form-error-container",children:Object(m.jsx)("span",{className:"avatar-error popup__form-error"})})]})};var A=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddCard,o=c.a.useState(""),s=Object(l.a)(o,2),r=s[0],i=s[1],u=c.a.useState(""),p=Object(l.a)(u,2),d=p[0],j=p[1];return Object(m.jsxs)(g,{isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:r,link:d}),i(""),j("")},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"popup-addcard",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(m.jsx)("input",{type:"text",className:"popup__form-input",id:"place",name:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",value:r,onChange:function(e){i(e.target.value)}}),Object(m.jsx)("div",{className:"popup__form-error-container",children:Object(m.jsx)("span",{className:"place-error popup__form-error"})}),Object(m.jsx)("input",{type:"url",className:"popup__form-input",id:"link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:d,onChange:function(e){j(e.target.value)}}),Object(m.jsx)("div",{className:"popup__form-error-container",children:Object(m.jsx)("span",{className:"link-error popup__form-error"})})]})},S=n(21),y=n(22),E=function(){function e(t){var n=t.baseUrl,a=t.headers;Object(S.a)(this,e),this._baseUrl=n,this._headers=a}return Object(y.a)(e,[{key:"_header",value:function(e){return e||this._headers}},{key:"_apiRequest",value:function(e,t,n,a){return"GET"===t?fetch("".concat(this._baseUrl).concat(e),{method:t,headers:this._header(a)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})):fetch("".concat(this._baseUrl).concat(e),{method:t,headers:this._header(a),body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"signUp",value:function(e){return this._apiRequest("/signup","POST",{password:e.password,email:e.email})}},{key:"signIn",value:function(e){return this._apiRequest("/signin","POST",{password:e.password,email:e.email})}},{key:"checkToken",value:function(){return this._apiRequest("/users/me","GET",null,{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))})}},{key:"getUserInfo",value:function(){return this._apiRequest("/users/me","GET")}},{key:"updateUserInfo",value:function(e){return this._apiRequest("/users/me","PATCH",{name:e.name,about:e.about})}},{key:"setNewAvatar",value:function(e){return this._apiRequest("/users/me/avatar","PATCH",{avatar:e})}},{key:"getInitialCards",value:function(){return this._apiRequest("/cards","GET")}},{key:"addNewCard",value:function(e){return this._apiRequest("/cards","POST",{name:e.name,link:e.link})}},{key:"addCardLike",value:function(e){return this._apiRequest("/cards/likes/".concat(e),"PUT")}},{key:"removeCardLike",value:function(e){return this._apiRequest("/cards/likes/".concat(e),"DELETE")}},{key:"removeCard",value:function(e){return this._apiRequest("/cards/".concat(e),"DELETE")}}]),e}(),R=new E({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"0ea9232f-20d8-4231-b26e-2828aaef49f5","Content-Type":"application/json"}}),w=new E({baseUrl:"https://auth.nomoreparties.co",headers:{"Content-Type":"application/json"}}),q=n(24),L=function(e){var t=e.component,n=Object(q.a)(e,["component"]);return Object(m.jsx)(p.b,{children:function(){return n.loggedIn?Object(m.jsx)(t,Object(u.a)({},n)):Object(m.jsx)(p.a,{to:"./sign-in"})}})};var I=function(){var e=Object(p.g)(),t=c.a.useState(!1),n=Object(l.a)(t,2),a=n[0],o=n[1],s=c.a.useState([]),r=Object(l.a)(s,2),d=r[0],f=r[1],g=c.a.useState(""),S=Object(l.a)(g,2),y=S[0],E=S[1],q=c.a.useState({avatar:"https://github.com/konjvpaljto/mesto/blob/master/src/images/avatar.jpg?raw=true",name:"\u0416\u0430\u043a \u0418\u0432-\u041a\u0443\u0441\u0442\u043e",about:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430"}),I=Object(l.a)(q,2),X=I[0],U=I[1],P=c.a.useState(!1),Z=Object(l.a)(P,2),K=Z[0],M=Z[1],H=c.a.useState(!1),J=Object(l.a)(H,2),Y=J[0],V=J[1],B=c.a.useState(""),T=Object(l.a)(B,2),D=T[0],G=T[1],Q=c.a.useState(!1),F=Object(l.a)(Q,2),z=F[0],W=F[1],$=c.a.useState(!1),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(!1),ce=Object(l.a)(ae,2),oe=ce[0],se=ce[1],re=c.a.useState({}),ie=Object(l.a)(re,2),ue=ie[0],le=ie[1];function pe(){W(!1),ne(!1),se(!1),M(!1),G(""),le({})}function de(e,t){V(e),M(!0),G(t)}function me(t){w.signIn(t).then((function(e){localStorage.setItem("token",e.token),o(!0),E(t.email)})).then((function(){e.push("/cards")})).catch((function(e){de(!1,"\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u0432\u043e\u0439\u0442\u0438: ".concat(e))}))}return c.a.useEffect((function(){var e=function(e){"Escape"===e.key&&pe()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),c.a.useEffect((function(){localStorage.getItem("token")&&w.checkToken().then((function(e){E(e.data.email),o(!0)})).then((function(){e.push("/cards")})).catch((function(e){o(!1),de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f: ".concat(e))}))}),[]),c.a.useEffect((function(){R.getUserInfo().then((function(e){U(e)})).catch((function(e){de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e))}))}),[y]),c.a.useEffect((function(){R.getInitialCards().then((function(e){f(e)})).catch((function(e){de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ".concat(e))}))}),[y]),Object(m.jsx)(b.Provider,{value:X,children:Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)(j,{email:y,loggedIn:a,onSignOut:function(){o(!1),localStorage.removeItem("token")}}),Object(m.jsxs)(p.d,{children:[Object(m.jsx)(p.b,{path:"/sign-in",children:Object(m.jsx)(x,{onSignIn:me})}),Object(m.jsx)(p.b,{path:"/sign-up",children:Object(m.jsx)(v,{onSignUp:function(e){w.signUp(e).then((function(){de(!0)})).then((function(){setTimeout((function(){me(e),pe()}),1500)})).catch((function(e){de(!1,"\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f: ".concat(e))}))}})}),Object(m.jsx)(L,{path:"/cards",loggedIn:a,onEditProfile:function(){ne(!0)},onAddPlace:function(){se(!0)},onEditAvatar:function(){W(!0)},cards:d,onCardClick:function(e){le(e)},onCardLike:function(e){function t(t){var n=d.map((function(n){return n._id===e._id?t:n}));f(n)}e.likes.some((function(e){return e._id===X._id}))?R.removeCardLike(e._id).then((function(e){t(e)})).catch((function(e){de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a: ".concat(e))})):R.addCardLike(e._id).then((function(e){t(e)})).catch((function(e){de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043d\u044f\u0442\u044c \u043b\u0430\u0439\u043a: ".concat(e))}))},onCardDelete:function(e){e.owner._id===X._id?R.removeCard(e._id).then((function(){var t=d.filter((function(t){return t._id!==e._id}));f(t)})).catch((function(e){de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443: ".concat(e))})):de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443: \u0432\u044b \u043d\u0435 \u0445\u043e\u0437\u044f\u0438\u043d. \u041d\u0435\u0447\u0435\u0433\u043e \u043d\u0430 \u0441\u043a\u0440\u044b\u0442\u044b\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 \u0436\u0430\u0442\u044c!")},component:h}),Object(m.jsx)(p.b,{path:"/",children:a?Object(m.jsx)(p.a,{to:"/cards"}):Object(m.jsx)(p.a,{to:"/sign-in"})})]}),Object(m.jsx)(O,{}),Object(m.jsx)(N,{isOpen:K,onClose:pe,result:Y,message:D}),Object(m.jsx)(k,{isOpen:z,onClose:pe,onUpdateAvatar:function(e){R.setNewAvatar(e.avatar).then((function(){U(Object(u.a)(Object(u.a)({},X),{},{avatar:e.avatar}))})).then((function(){pe()})).catch((function(e){pe(),de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440: ".concat(e))}))}}),Object(m.jsx)(C,{isOpen:te,onClose:pe,onUpdateUser:function(e){R.updateUserInfo(e).then((function(e){U(e)})).then((function(){pe()})).catch((function(e){pe(),de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e))}))}}),Object(m.jsx)(A,{isOpen:oe,onClose:pe,onAddCard:function(e){R.addNewCard(e).then((function(e){f([e].concat(Object(i.a)(d)))})).then((function(){pe()})).catch((function(e){pe(),de(!1,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443: ".concat(e))}))}}),Object(m.jsx)(_,{onClose:pe,card:ue})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(r.a,{basename:"/react-mesto-auth",children:Object(m.jsx)(I,{})})}),document.getElementById("root")),X()}},[[36,1,2]]]);
//# sourceMappingURL=main.907637f2.chunk.js.map