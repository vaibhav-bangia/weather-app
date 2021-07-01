// callbacks

setTimeout(() => {
    console.log('4 seconds are up!')
}, 4000);


const names =['Vikcy','Jen','Jess'];

const shorNames = names.filter((name)=>{
    return name.length<=4;
})