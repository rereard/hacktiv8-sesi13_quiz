import ReactLoading from "react-loading"
const Loading = () => {
    return(
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <ReactLoading type="spinningBubbles" color="#000" width={120} height={150}/>
            <h3 className="text-xl font-medium">Loading Data...</h3>
        </div>
    )
}
export default Loading