import { useState } from "react";

export default function DashBoardComponent() {
  const professions = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
  ];
  const [profession, setProfession] = useState(professions[0]);
  const [toggleDropProfession, setToggleDropProfession] = useState(false);

  const numbers = [1, 2, 3, 4];
  const [numberQuestions, setNumberQuestions] = useState(1);
  const [toggleDropNumber, setToggleDropNumber] = useState(false);

  const professionChange = (value) => {
    setProfession(value);
    setToggleDropProfession(!toggleDropProfession)
  };

  const numberChange = (value) => {
    setNumberQuestions(value)
    setToggleDropNumber(!toggleDropNumber)
  }

  return (
    <div className="lg:max-w-screen-lg lg:mx-auto flex flex-col w-full mt-8 gap-16 lg:gap-36">
      <div className="flex flex-col gap-4 ml-2 md:mx-auto md:w-11/12">
        <p className="text-2xl font-bold">Profession</p>
        <div className="flex flex-col w-fit">
          <button
            id="dropdownDefaultButton"
            onClick={() => setToggleDropProfession(!toggleDropProfession)}
            class="text-white bg-[#3772FF] hover:bg-blue-800 font-medium rounded-lg text-base px-3 py-2 text-center inline-flex items-center w-fit"
            type="button"
          >
            {profession}
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            class={`absolute ${
              toggleDropProfession ? "" : "hidden"
            } md:top-44 top-[27%] lg:top-[30%] bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 z-10`}
          >
            <ul
              class="py-2 text-base text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              {professions.map((profession) => {
                return (
                  <li onClick={() => professionChange(profession)} key={profession}>
                    <a
                      href="#"
                      class="block px-4 py-2 bg-gray-700 opacity-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {profession}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:gap-2">
        <div className="w-fit md:w-11/12 mx-auto lg:max-w-screen-lg border-2 h-fit md:h-32 rounded-md shadow-md border-[C8C8C8] flex flex-col gap-4 md:gap-0 py-4 md:py-0 px-4 md:px-0 md:flex-row items-center justify-around md:grid md:grid-cols-10">
          <p className="text-2xl font-semibold drop-shadow-none text-center justify-center w-full md:text-center col-span-4">
            Mock Behavorial Interview
          </p>
          <div className="flex drop-shadow-none items-center justify-center gap-2 md:col-span-3">
            <p className="drop-shadow-none text-base font-medium text-center">
              Number of Questions
            </p>
            <button
              id="dropdownNumberQuestion"
              onClick={() => setToggleDropNumber(!toggleDropNumber)}
              class="text-black bg-white border-black w-11 border-2 hover:bg-slate-200 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center"
              type="button"
            >
              {numberQuestions}
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              class={`absolute ${
                toggleDropNumber ? "" : "hidden"
              } top-1/2 mt-8 lg:right-7 right-0 w-11 bg-white divide-y divide-gray-100 rounded-lg shadow bg-gray-700`}
            >
              <ul
                class="py-2 text-base text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {numbers.map((number) => {
                  return (
                    <li onClick={() => numberChange(number)} key={number}>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-center dark:hover:text-white"
                      >
                        {number}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex md:col-span-3 justify-center">
            <button className="h-10 w-52 md:w-36 lg:w-52 bg-[#3772FF] rounded-md text-white text-base font-medium">
              Begin Interview
            </button>
          </div>
        </div>
        <p className="text-xs font-medium md:text-sm text-[#474747] lg:max-w-screen-lg lg:w-11/12 text-justify mx-2 md:text-center md:pl-5 md:mx-auto">
          Leveraging the power of OpenAIs GPT-4, an advanced language model, you
          will be given comprehensive feedback and constructive criticism on
          audio responses to question prompts.
        </p>
      </div>
    </div>
  );
}
