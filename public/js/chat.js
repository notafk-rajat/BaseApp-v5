const socket=io();async function loadMsgs(){let s=await axios.get("/allmessages");for(let e of(console.log(s),s.data))$("#all-msg-container").append(`<li>
                <span>${e.user}  <span>
                <span>${e.createdAt} <span>
                <p>${e.content}</p>
    
            </li>`)}loadMsgs(),$("#send-msg-btn").click(()=>{let s=$("#msg-text").val();socket.emit("send-msg",{user:currentUser,msg:s}),$("#msg-text").val("")}),socket.on("recived-msg",s=>{$("#all-msg-container").append(`<li>
            <span>${s.user} </span>
            <span>${s.createdAt} <span>
            <p>${s.msg}</p>

        </li>`)});