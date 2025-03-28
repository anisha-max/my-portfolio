import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()


    return (
        <section className="bg-black min-h-screen flex items-center justify-center p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center w-full max-w-6xl">

                
                <figure className="w-full max-w-[488px] overflow-hidden bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[65px] shadow-lg mx-auto">
                    <img
                        className="w-full rounded-[65px]"
                        width={400}
                        src="/images/pic.png" 
                        alt="developer image"
                    />
                </figure>

                <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-[500px] mx-auto lg:mx-0 mt-10 lg:mt-0 ">
                    {data ? (
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-sky-400">GitHub Profile</h2>
                            <p className="text-lg">
                                 <span className="font-semibold">Name:</span> {data.name }
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Username:</span> {data.login}
                            </p>
                            <p className="text-lg">
                                 <span className="font-semibold">Email:</span> {data.email }
                            </p>
                            <p className="text-lg">
                                 <span className="font-semibold">Public Repos:</span> {data.public_repos}
                            </p>
                            <p className="text-lg">
                                 <span className="font-semibold">Hireable:</span>
                                {data.hireable }
                            </p>
                            <p className="text-lg">
                                 <span className="font-semibold">Last Updated:</span>{" "}
                                {new Date(data.updated_at).toLocaleDateString()}
                            </p>
                        </div>
                    ) : (
                        <p className="text-gray-400 text-lg animate-pulse">Loading profile...</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Github
