import React from "react";
import Image from "next/image";

const UploadRegister = () => {
    return (
        <div className="flex justify-center items-center py-5">
            <div className="flex items-end">
                <div className="w-32 h-32 rounded-full bg-white border border-black flex items-center justify-center mr-2">
                </div>
                <div className="text-xl">
                    <Image src="/CameraPlus.svg" width="5" height="5" alt="" className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}

export default UploadRegister