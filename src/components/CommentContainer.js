import React from "react"

const CommentContainer = ()=>{

    const commentsData = [
        {
            name:"Rahul",
            text:"Lorem ipsum dummy text",
            reply:[ {
                name:"Rahul",
                text:"Lorem ipsum dummy text",
                reply:[ {
                    name:"Rahul",
                    text:"Lorem ipsum dummy text",
                    reply:[]
                }, {
                    name:"Rahul",
                    text:"Lorem ipsum dummy text",
                    reply:[ {
                        name:"Rahul",
                        text:"Lorem ipsum dummy text",
                        reply:[]
                    }, {
                        name:"Rahul",
                        text:"Lorem ipsum dummy text",
                        reply:[]
                    }]
                },]
            }, {
                name:"Rahul",
                text:"Lorem ipsum dummy text",
                reply:[]
            }, {
                name:"Rahul",
                text:"Lorem ipsum dummy text",
                reply:[]
            }]
        },
        {
            name:"Rahul",
            text:"Lorem ipsum dummy text",
            reply:[]
        },
        {
            name:"Rahul",
            text:"Lorem ipsum dummy text",
            reply:[]
        },
        {
            name:"Rahul",
            text:"Lorem ipsum dummy text",
            reply:[]
        }
    ]
    const Comment = ({comment})=>{
        const {name,text} = comment;
        return(<>
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
        </>)
    }

    const CommentList = ({comments})=>{
return comments?.map((comment,index)=>(
    <div key={index}>
<div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{comment.name}</p>
        <p>{comment.text}</p>
      </div>
    </div>
    <div className="pl-5 border border-l-black ml-5">
    <CommentList comments={comment.reply} />
    </div>
    </div>
))
    }
    return(<>
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
    </>)
}
export default CommentContainer