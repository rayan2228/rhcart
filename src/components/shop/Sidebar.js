"use client"
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false)
    return (
        <>
            {/* sidebar */}
            {/* drawer init and toggle */}
            <div className="text-center md:hidden"> 
                <Button
                    onClick={() => setIsOpen(true)}
                    className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
                    type="button"
                    data-drawer-target="drawer-example"
                    data-drawer-show="drawer-example"
                    aria-controls="drawer-example"
                >
                    <ion-icon name="grid-outline" />
                </Button>
            </div>
            {/* drawer component */}
            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="Info"  titleIcon={FaCircleInfo}/>
                <Drawer.Items>
                <div className="space-y-5 divide-y divide-gray-200">
                    <div>
                        <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                            Categories
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="cat-1"
                                    id="cat-1"
                                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                                />
                                <label
                                    htmlFor="cat-1"
                                    className="ml-3 text-gray-600 cusror-pointer"
                                >
                                    Bedroom
                                </label>
                                <div className="ml-auto text-sm text-gray-600">(15)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="cat-2"
                                    id="cat-2"
                                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                                />
                                <label
                                    htmlFor="cat-2"
                                    className="ml-3 text-gray-600 cusror-pointer"
                                >
                                    Sofa
                                </label>
                                <div className="ml-auto text-sm text-gray-600">(9)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="cat-3"
                                    id="cat-3"
                                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                                />
                                <label
                                    htmlFor="cat-3"
                                    className="ml-3 text-gray-600 cusror-pointer"
                                >
                                    Office
                                </label>
                                <div className="ml-auto text-sm text-gray-600">(21)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="cat-4"
                                    id="cat-4"
                                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                                />
                                <label
                                    htmlFor="cat-4"
                                    className="ml-3 text-gray-600 cusror-pointer"
                                >
                                    Outdoor
                                </label>
                                <div className="ml-auto text-sm text-gray-600">(10)</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                            Price
                        </h3>
                        <div className="flex items-center mt-4">
                            <input
                                type="text"
                                name="min"
                                id="min"
                                className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                                placeholder="min"
                            />
                            <span className="mx-3 text-gray-500">-</span>
                            <input
                                type="text"
                                name="max"
                                id="max"
                                className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                                placeholder="max"
                            />
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                            size
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xs" className="hidden" />
                                <label
                                    htmlFor="size-xs"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    XS
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-sm" className="hidden" />
                                <label
                                    htmlFor="size-sm"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    S
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-m" className="hidden" />
                                <label
                                    htmlFor="size-m"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    M
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-l" className="hidden" />
                                <label
                                    htmlFor="size-l"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    L
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xl" className="hidden" />
                                <label
                                    htmlFor="size-xl"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    XL
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                </Drawer.Items>
            </Drawer>
            {/* ./sidebar */}
            <div className="hidden col-span-1 px-4 pb-6 bg-white rounded shadow overflow-hiddenb md:block">
                <div className="space-y-5 divide-y divide-gray-200">
                    <div>
                        <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                            Categories
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="cat-1"
                                    id="cat-1"
                                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                                />
                                <label
                                    htmlFor="cat-1"
                                    className="ml-3 text-gray-600 cusror-pointer"
                                >
                                    Bedroom
                                </label>
                                <div className="ml-auto text-sm text-gray-600">(15)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="cat-2"
                                    id="cat-2"
                                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                                />
                                <label
                                    htmlFor="cat-2"
                                    className="ml-3 text-gray-600 cusror-pointer"
                                >
                                    Sofa
                                </label>
                                <div className="ml-auto text-sm text-gray-600">(9)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="cat-3"
                                    id="cat-3"
                                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                                />
                                <label
                                    htmlFor="cat-3"
                                    className="ml-3 text-gray-600 cusror-pointer"
                                >
                                    Office
                                </label>
                                <div className="ml-auto text-sm text-gray-600">(21)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="cat-4"
                                    id="cat-4"
                                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                                />
                                <label
                                    htmlFor="cat-4"
                                    className="ml-3 text-gray-600 cusror-pointer"
                                >
                                    Outdoor
                                </label>
                                <div className="ml-auto text-sm text-gray-600">(10)</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                            Price
                        </h3>
                        <div className="flex items-center mt-4">
                            <input
                                type="text"
                                name="min"
                                id="min"
                                className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                                placeholder="min"
                            />
                            <span className="mx-3 text-gray-500">-</span>
                            <input
                                type="text"
                                name="max"
                                id="max"
                                className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                                placeholder="max"
                            />
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                            size
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xs" className="hidden" />
                                <label
                                    htmlFor="size-xs"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    XS
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-sm" className="hidden" />
                                <label
                                    htmlFor="size-sm"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    S
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-m" className="hidden" />
                                <label
                                    htmlFor="size-m"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    M
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-l" className="hidden" />
                                <label
                                    htmlFor="size-l"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    L
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xl" className="hidden" />
                                <label
                                    htmlFor="size-xl"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                                >
                                    XL
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar