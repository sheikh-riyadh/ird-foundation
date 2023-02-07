import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
export default function Header() {

    const { systemTheme, theme, setTheme } = useTheme()

    const [isDark, setIsDark] = useState(false)
    const handleDarkMode = () => {

        const currentTheme = theme === "system" ? systemTheme : theme;
        /* Set dark boolean value in local-storage */
        /* localStorage.setItem('theme-color', !isDark) */
        /* Change value */
        /* setIsDark(!isDark) */

        if (currentTheme === "dark") {
            return <FaSun className='text-2xl' onClick={() => setTheme('light')}></FaSun>
        }
        else {
            return <FaMoon className='text-2xl' onClick={() => setTheme('dark')}></FaMoon>
        }
    }
    useEffect(() => {
        /* Get value from local-storage */
        const checkDark = localStorage.getItem('theme-color')
        /* Check dark true or false */
        if (checkDark === 'true') {
            /*If true add dark class */
            document.documentElement.classList.add('dark')
            setIsDark(true)
        } if (checkDark === 'false') {
            /* If false remove dark class */
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])




    return (
        <nav className="justify-center items-center border-gray-200 rounded border-b-2 md:border-0 py-5 lg:py-3">
            <div className="mx-5 lg:mx-12 xl:mx-24 flex flex-wrap items-center justify-between">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl whitespace-nowrap dark:text-white bg-[#6765F0] text-white p-2 rounded-lg">Gym</span>
                    <span className="self-center text-xl whitespace-nowrap dark:text-white text-[#6765F0] ml-1">baran</span>
                </a>
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700 text-black items-center">
                        <li>
                            <a href="#" className=" text-black block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Program</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About us</a>
                        </li>
                        <li className="bg-[#264373] lg:py-3 lg:px-9 rounded-lg">
                            <a href="#" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-white">Login</a>
                        </li>
                        <li onClick={handleDarkMode} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer dark:hover:text-white md:dark:hover:bg-transparent">
                            {
                                handleDarkMode()
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}