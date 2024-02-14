"use client"
import {Link} from "../../navigation";

const ChooseLanguage = () => {
    return (
        <div>
            <select
                className="border border-[#7042f861] bg-[#0300145e] px-[10px] py-[5px] rounded-full text-gray-200"
            >
                <option>
                    <Link href={"/en"} locale="en">
                        English
                    </Link>
                </option>
                <option>
                    <Link href={"/es"} locale="es">
                        Español
                    </Link>
                </option>
            </select>
        </div>
    )
}

export default ChooseLanguage