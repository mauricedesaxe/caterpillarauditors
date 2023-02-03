import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100/20">
                <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40 lg:px-8">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <img className="h-12" src="/caterpillar_glass.png" alt="Caterpillar Auditors" />
                                <div className="mt-24 sm:mt-32 lg:mt-16">
                                    <Link href="/donate" className="inline-flex space-x-6">
                                        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                            <span>Want to help?</span>
                                        </span>
                                        <span className="bg-emerald-600/10 px-3 py-1 text-sm font-semibold leading-6 text-emerald-600 ring-1 ring-inset ring-emerald-600/10">
                                            Donate!
                                        </span>
                                    </Link>
                                </div>
                                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Become a full-time bounty hunter
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    We financially support jr. auditors to quit their jobs and become full-time bounty
                                    hunters.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <Link
                                        href="/join"
                                        className="border-2 border-black bg-emerald-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                                    >
                                        Join the program
                                    </Link>
                                    <Link href="/donate" className="text-base font-semibold leading-7 text-gray-900">
                                        Help us help more auditors <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-emerald-600/10 ring-1 ring-emerald-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg">
                            <div className="border-2 border-black bg-emerald-500 [clip-path:inset(0)]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-emerald-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <div className="w-screen overflow-hidden bg-gray-900">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white">
                                                        Registry.sol
                                                    </div>
                                                    <div className="border-r border-gray-600/10 py-2 px-4">
                                                        Factory.sol
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="/solidity-code.png" alt="Solidity smart contract code" />
                                        </div>
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    );
}
