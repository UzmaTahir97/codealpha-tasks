function randomGenerator(){
    
let arr = ["❝Ability can take you to the top, but it takes character to keep you there❞. —<b>  Zig Ziglar</b>" ,
     "❝Live as if you were to die tomorrow. Learn as if you were to live forever❞. — <b> Mahatma Gandhi</b> " , 
     "❝It is better to be hated for what you are than to be loved for something you not❞. —<b>       AndréGide</b>" , 
     "❝Be yourself; everyone else is already taken.❞ — <b> Oscar Wilde</b>" , 
     "❝People who have no hold over their process of thinking are likely to be ruined by liberty of thought. If thought is immature, liberty of thought becomes a method of converting men into animals. ❞—<b>  Allama Muhammad Iqbal</b>" ,
     "❝By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation,   which is easiest; and third by experience, which is the bitterest.❞  —<b> Confucius</b>" ,
     "❝Well done is better than well said.❞  —<b>  Benjamin Franklin</b>"  ,
     "❝What happens is not as important as how you react to what happens.❞  — <b> Ellen Glasgow</b>",
     "❝Today is a most unusual day, because we have never lived it before; we will never live it again; it is the only day we have.❞— <b> William Arthur Ward</b>" ,
     "❝Think 100 times before you take a decision, But once that decision is taken, stand by it as one     man.❞  — <b> Muhammad Ali Jinnah </b>" ]

let randm =arr[Math.floor(Math.random()*arr.length)];
document.getElementById("quotes").innerHTML=randm;
let color = ["rgba(241, 156, 156, 1)","rgba(176, 248, 176, 1)","rgb(205, 238, 140)","rgb(241, 203, 224)" ]
let rndm = color[Math.floor(Math.random()*color.length)]
let p =document.getElementById("quotes");
p.style.backgroundColor=rndm;

}
