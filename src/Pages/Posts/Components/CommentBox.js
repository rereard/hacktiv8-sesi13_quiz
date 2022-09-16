const CommentBox = (props) => {
    return(
        <div className="border-b-2 mb-3">
            <h4 className="font-medium">{props.name}</h4>
            <h4 className="mb-2 text-slate-400">{props.email}</h4>
            <p className="mb-3">{props.body}</p>
        </div>
    )
}
export default CommentBox