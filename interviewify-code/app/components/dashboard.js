export default function DashBoardComponent(){
    return (
        <div className="lg:max-w-screen-xl lg:mx-auto flex flex-col w-full mt-8 gap-16 lg:gap-36">
            <div className="flex flex-col gap-4 ml-2 md:mx-auto md:w-11/12">
                <p className="text-3xl md:text-4xl font-bold">Profession</p>
                <select name="jobs" id="jobs" className="w-64 border-2 rounded-md border-black text-xl md:text-2xl font-medium h-10">
                    <option value="SoftwareEngineer">Software Engineer</option>
                </select>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-2">
                <div className="w-fit md:w-11/12 lg:max-w-screen-xl md:mx-10 border-2 h-fit md:h-32 rounded-md shadow-md border-[C8C8C8] flex flex-col gap-4 md:gap-0 py-4 md:py-0 px-4 md:px-0 md:flex-row items-center justify-around md:grid md:grid-cols-10">
                    <p className="text-2xl md:text-3xl font-semibold drop-shadow-none text-center w-full md:text-center col-span-5">Mock Behavorial Interview</p>
                    <div className="flex drop-shadow-none items-center gap-2 md:col-span-3">
                        <p className="drop-shadow-none text-xl font-medium">Number of Questions</p>
                        <select name="numbers" id="numbers" className="w-14 border-2 rounded-md border-black text-2xl font-medium h-10 drop-shadow-none pl-1">
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                            <option value="five">5</option>
                        </select>
                    </div>
                    <button className="h-10 w-52 bg-[#3772FF] rounded-md text-white text-xl font-medium md:col-span-2">Begin Interview</button>
                </div>
                <p className="text-xs font-medium md:text-base text-[#474747] text-justify mx-2 md:text-center md:pl-5 md:mx-auto">Leveraging the power of OpenAIs GPT-4, an advanced language model, you will be given comprehensive feedback and constructive criticism on audio responses to question prompts.</p>
            </div>
        </div>
    )
}