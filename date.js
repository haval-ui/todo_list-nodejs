exports.getDate=function (){
    const date = new Date();
    const format ={
        weekday: 'short', 
        day: 'numeric',
        month: 'long', 
        year: 'numeric',
    };
    return formatedDate= date.toLocaleString('en-US',format )
}

exports.getday=()=>{
    const date = new Date();
    const format={
        weekday:'long',    
    }
    return frdate = date.toLocaleString('en-US',format)
}