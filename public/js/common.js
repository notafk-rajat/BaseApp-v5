async function refreshPosts(){$(".postsContainer").empty();let t=await axios.get("/api/post");for(let e of t.data){console.log(e);let a=createPostHtml(e);$(".postsContainer").prepend(a)}}function getPostIdFromElement(t){let e=t.hasClass("post"),a=!0===e?t:t.closest(".post"),s=a.data().id;return s}function createPostHtml(t){return t.postedBy,`<div class='post' data-id='${t._id}'>

                <div class='mainContentContainer'>
                    <div class='userImageContainer'>
                    </div>
                    <div class='postContentContainer'>
                        <div class='header'>
                        </div>
                        <div class='postBody'>
                            <span>${t.content}</span>
                        </div>
                        <div class='postFooter'>
                            <div class='postButtonContainer'>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#replyModal">
                                    <i class='far fa-comment'></i>
                                </button>
                            </div>
                            <div class='postButtonContainer green'>
                                <button class='retweet'>
                                    <i class='fas fa-retweet'></i>
                                </button>
                            </div>
                            <div class='postButtonContainer red'>
                                <button class='likeButton'>
                                    <i class='far fa-heart'></i>
                                    <span>${t.likes.length}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`}function timeDifference(t,e){var a=864e5,s=30*a,o=365*a,n=t-e;if(n<6e4)return n/1e3<30?"Just now":Math.round(n/1e3)+" seconds ago";if(n<36e5)return Math.round(n/6e4)+" minutes ago";if(n<a)return Math.round(n/36e5)+" hours ago";if(n<s)return Math.round(n/a)+" days ago";if(n<o)return Math.round(n/s)+" months ago";else return Math.round(n/o)+" years ago"}refreshPosts(),$("#submitPostButton").click(async()=>{let t=$("#post-text").val();await axios.post("/api/post",{content:t}),$("#post-text").val(""),refreshPosts()}),$(".postsContainer").on("click",".likeButton",async t=>{let e=$(t.target),a=getPostIdFromElement(e),s=await axios.patch(`/api/posts/${a}/like`);e.find("span").text(s.data.likes.length)}),$("#submitReplyButton").click(async t=>{let e=$(t.target),a=$("#reply-text-container").val(),s=e.attr("data-id");await axios.post("/api/post",{content:a,replyTo:s})}),$("#replyModal").on("show.bs.modal",async t=>{let e=$(t.relatedTarget),a=getPostIdFromElement(e);$("#submitReplyButton").attr("data-id",a);let s=await axios.get(`/api/posts/${a}`),o=createPostHtml(s.data);$("#originalPostContainer").empty(),$("#originalPostContainer").append(o)});