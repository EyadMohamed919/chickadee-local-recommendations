export const NavBar = ()=>{
    return (
    <div className="flex justify-center items-center text-black w-[98%] mt-2 h-16 bg-pink-100 border-[1px] rounded-xl border-pink-500">
        <h1 className="font-bold text-2xl ml-7 m-auto text-pink-700">Chickadee</h1>
        <div className="mr-7">
            <a href="#" className="bg-pink-900 pl-6 pr-6 pt-3 pb-3 mr-2 text-white font-light rounded-full justify-center items-center transition-all duration-200 border-[1px] border-transparent
            hover:bg-white hover:text-pink-700 hover:border-pink-500">Home</a>
            <a href="#" className="bg-pink-900 pl-6 pr-6 pt-3 pb-3 ml-2 text-white font-light rounded-full justify-center items-center transition-all duration-200 border-[1px] border-transparent
            hover:bg-white hover:text-pink-700 hover:border-pink-500">About</a>
        </div>
    </div>
    );
};