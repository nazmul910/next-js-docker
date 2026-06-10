import Image from "next/image";
import DockerImage from "../../../assets/hero-home/docker.webp"

export const Hero = () =>{
    return(
        <>
            <div className="bg-black h-auto w-full flex items-center justify-center flex-col gap-4">
                <div>
                    <h1>Docker Setup Project</h1>
                    <p className="text-gray-400">A project to set up Docker for development and deployment.</p>
                </div>

                <div className="w-full flex items-center justify-center mt-8">
                    <div className="w-1/2 flex items-center justify-center border border-white rounded-3xl relative overflow-hidden">
                        <Image src={DockerImage} alt="Docker Image" width={400} height={400} />
                    </div>

                </div>
            </div>
        </>
    )
}  