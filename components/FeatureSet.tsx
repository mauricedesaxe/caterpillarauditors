import React from 'react';
import { classNames } from '../utils/style';

export const FeatureSet = ({
    copy,
    features,
}: {
    copy: { title: string; subtitle: string };
    features: { name: string; description: string; imageSrc: string; imageAlt: string }[];
}) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{copy.title}</h2>
                    <p className="mt-4 text-gray-500">{copy.subtitle}</p>
                </div>

                <div className="mt-16 space-y-16">
                    {features.map((feature, featureIdx) => (
                        <div
                            key={feature.name}
                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                        >
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                                )}
                            >
                                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                            </div>
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                                )}
                            >
                                <div className="aspect-w-5 aspect-h-2 overflow-hidden border-2 border-black bg-gray-100">
                                    <img
                                        src={feature.imageSrc}
                                        alt={feature.imageAlt}
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
