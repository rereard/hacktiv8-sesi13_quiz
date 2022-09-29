const PostBox = (props) => {
    return(
        <div className="border-2 border-slate-400 rounded-lg md:w-2/4 w-9/12 flex flex-col flex-wrap p-3 mb-5">
            <div className="border-b-2">
                <h2 className="md:text-2xl font-medium text-xl">{props.title}</h2>
                <h4 className="text-slate-400 md:text-lg mt-2 text-base">{props.name}</h4>
            </div>
            <p className="mt-3">{props.body}</p>
        </div>
    )
}
export default PostBox